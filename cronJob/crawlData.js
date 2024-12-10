require("../dbs/init.mongodb");
const fs = require("fs");
const { createWebSocketConnection } = require("../websocketClient");
const {
  initDataSend,
  urlSocket,
  optionsSocket,
  maxIndex,
} = require("../config");
const { countLogs, insertLog } = require("../models/repositories/socket.repo");

let receivedData = {};
let index;

async function onDataReceived(data) {
  if (!receivedData[index]) {
    receivedData[index] = [];
  }

  receivedData[index].push(data);
  console.log(`Received data for index: ${index}:`, receivedData[index].length);

  if (receivedData[index].length === maxIndex) {
    fs.writeFileSync(
      `./data/data${index}.json`,
      JSON.stringify(receivedData[index], null, 2)
    );
    await insertLog(`data${index}.json`);
    console.log(`Data has been saved to data${index}.json`);

    index++;
    receivedData[index] = [];
  }
}

const listendSocket = async () => {
  index = await countLogs();
  index += 1;
  receivedData[index] = [];
  createWebSocketConnection(
    urlSocket,
    optionsSocket,
    initDataSend,
    onDataReceived
  );
};
listendSocket();
