const WebSocket = require("ws");

function createWebSocketConnection(url, options, initialData, onDataReceived) {
  const ws = new WebSocket(url, options);

  ws.on("open", () => {
    console.log("Connected to the WebSocket server");
    ws.send(JSON.stringify(initialData));
  });

  ws.on("message", (data) => {
    console.log("Received:", data.toString());
    onDataReceived(data.toString());
  });

  ws.on("error", (err) => {
    console.error("Error:", err);
  });

  ws.on("close", () => {
    console.log("Disconnected from the WebSocket server");
  });

  return ws;
}

module.exports = { createWebSocketConnection };
