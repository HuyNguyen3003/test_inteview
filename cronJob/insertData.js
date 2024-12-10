require("../dbs/init.mongodb");
const fs = require("fs");
const { insertManyToModel } = require("../models/repositories/socket.repo");

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
    const fileData = fs.readFileSync(`./data/${filename}.json`, "utf8");
    const data = JSON.parse(fileData);
    const jsonData = data.map((item) => {
      return JSON.parse(item);
    });
    jsonData.forEach((item) => {
      const protocolKey = `protocol${item.protocol}`;
      if (organizedData.hasOwnProperty(protocolKey)) {
        organizedData[protocolKey].push(item.data);
      } else {
        organizedData.temporary.push({ data: item });
      }
    });
    return organizedData;
  } catch (err) {
    console.error("Error:", err);
  }
};

async function saveDataToDB(filename) {
  const organizedData = organizeData(filename);

  for (const [protocol, dataArray] of Object.entries(organizedData)) {
    if (dataArray.length > 0) {
      await insertManyToModel(protocol, dataArray);
    }
  }
}

const checkTask = async () => {
  const fileData = fs.readFileSync(`./data/timeline.json`, "utf8");
  const data = JSON.parse(fileData);
  console.log(data.length);
};
checkTask();

// saveDataToDB("output");
