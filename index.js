const fs = require("fs");
const { createWebSocketConnection } = require("./websocketClient");

let receivedData = [];

// Dữ liệu ban đầu cần gửi
const initialData = {
  protocol: 1,
  data: {
    sid: "ANONYMOUS-54000393",
    dtBetLimitSelectID: {
      101: 99101,
      102: 99102,
      103: 99103,
      104: 99104,
      105: 99105,
      106: 99106,
      107: 99107,
      108: 99108,
      110: 99110,
      111: 99111,
      112: 99112,
      113: 99113,
      128: 99128,
    },
    bGroupList: true,
    videoName: "TC",
    videoDelay: 3000,
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  },
};

const url = "wss://wmgs.hip288.net/15101";
const options = {
  headers: {
    Origin: "https://wmvn.funplay-88.com",
    "Cache-Control": "no-cache",
    "Accept-Language": "vi,en-US;q=0.9,en;q=0.8",
    Pragma: "no-cache",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "Sec-WebSocket-Key": "CwJo1qvWogHqyfswypEBvA==",
    "Sec-WebSocket-Version": "13",
    "Sec-WebSocket-Extensions": "permessage-deflate; client_max_window_bits",
  },
};

// Hàm xử lý dữ liệu nhận được
function onDataReceived(data) {
  receivedData.push(data);
}

// Tạo kết nối WebSocket
createWebSocketConnection(url, options, initialData, onDataReceived);

// Lưu dữ liệu vào file JSON sau 60 giây
setTimeout(() => {
  fs.writeFile("output.json", JSON.stringify(receivedData, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Data saved to output.json");
    }
  });
}, 60000);
