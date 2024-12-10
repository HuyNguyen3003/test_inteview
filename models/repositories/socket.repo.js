const { StatusLog } = require("../../config");
const {
  protocol20,
  protocol21,
  protocol24,
  protocol25,
  protocol26,
  protocol30,
  protocol33,
  protocol34,
  protocol38,
  protocol39,
  protocol70,
  temporary,
  log,
} = require("../index");

async function insertManyToModel(protocol, data) {
  try {
    let model;

    switch (protocol) {
      case "protocol20":
        model = protocol20;
        break;
      case "protocol21":
        model = protocol21;
        break;
      case "protocol24":
        model = protocol24;
        break;
      case "protocol25":
        model = protocol25;
        break;
      case "protocol26":
        model = protocol26;
        break;
      case "protocol30":
        model = protocol30;
        break;
      case "protocol33":
        model = protocol33;
        break;
      case "protocol34":
        model = protocol34;
        break;
      case "protocol38":
        model = protocol38;
        break;
      case "protocol39":
        model = protocol39;
        break;
      case "protocol70":
        model = protocol70;
        break;
      case "temporary":
        model = temporary;
        break;
      default:
        throw new Error("Invalid protocol specified");
    }
    console.log("Inserting data to model:", protocol);
    await model.insertMany(data);
    console.log("Insert successful model ", protocol, ":", data.length);
  } catch (error) {
    console.error("Error inserting data:", error);
  }
}

async function getLogsByStatus(status) {
  try {
    const logs = await log.find({ status });
    return logs;
  } catch (error) {
    console.error("Error fetching logs:", error);
    throw error;
  }
}

async function insertLog(filename) {
  try {
    await log.create({
      filename: filename,
    });
  } catch (error) {
    console.error("Error inserting log:", error);
  }
}
async function countLogs() {
  try {
    const count = await log.countDocuments();
    console.log("Total logs:", count);
    return count;
  } catch (error) {
    console.error("Error counting logs:", error);
  }
}

module.exports = {
  insertLog,
  insertManyToModel,
  getLogsByStatus,
  countLogs,
};
