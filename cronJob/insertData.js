require("../dbs/init.mongodb");
const fs = require("fs");
const {
  insertManyToModel,
  getLogsByStatus,
} = require("../models/repositories/socket.repo");
const { StatusLog, timeInterval } = require("../config");

const organizeData = (filename) => {
  try {
    const organizedData = {
      protocol20: [],
      protocol21: [],
      protocol24: [],
      protocol25: [],
      protocol26: [],
      protocol30: [],
      protocol33: [],
      protocol34: [],
      protocol38: [],
      protocol39: [],
      protocol70: [],
      temporary: [],
    };
    const fileData = fs.readFileSync(`./data/${filename}`, "utf8");
    const jsonData = JSON.parse(fileData);
    const data = jsonData.map((item) => {
      return JSON.parse(item);
    });

    data.forEach((item) => {
      const protocolKey = `protocol${item.protocol}`;
      if (organizedData.hasOwnProperty(protocolKey)) {
        organizedData[protocolKey].push(item.data);
      } else {
        organizedData["temporary"].push({ data: item });
      }
    });

    return organizedData;
  } catch (err) {
    console.error("Error organizing data:", err);
  }
};

async function saveDataToDB(filename) {
  const organizedData = organizeData(filename);

  if (!organizedData) {
    console.error("Failed to organize data for file:", filename);
    return;
  }

  for (const [protocol, dataArray] of Object.entries(organizedData)) {
    if (dataArray.length > 0) {
      try {
        await insertManyToModel(protocol, dataArray);
      } catch (err) {
        console.error(`Error inserting data for protocol ${protocol}:`, err);
      }
    }
  }
}

const checkTask = async () => {
  try {
    const filenameArr = await getLogsByStatus(StatusLog.PENDING);
    console.log("log: ", filenameArr.length);

    if (filenameArr.length === 0) return;

    for (const item of filenameArr) {
      try {
        await saveDataToDB(item["filename"]);
        item["status"] = StatusLog.SUCCESS;
        await item.save();
        console.log(`Processed file with ${item["filename"]}`);
      } catch (err) {
        item["status"] = StatusLog.ERROR;
        await item.save();
        console.error("Error processing file with index:", item["index"], err);
      }
    }
  } catch (err) {
    console.error("Error in checkTask:", err);
  }
};

setInterval(checkTask, timeInterval);
checkTask();
