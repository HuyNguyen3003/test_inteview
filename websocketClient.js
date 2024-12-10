const WebSocket = require("ws");

function createWebSocketConnection(url, options, initialData, onDataReceived) {
  let ws;
  let shouldReconnect = true;

  const connect = () => {
    ws = new WebSocket(url, options);

    ws.on("open", () => {
      console.log("Connected to the WebSocket server");
      ws.send(JSON.stringify(initialData));
    });

    ws.on("message", async (data) => {
      await onDataReceived(data.toString());
    });

    ws.on("error", (err) => {
      console.error("WebSocket error:", err);
      ws.close();
    });

    ws.on("close", () => {
      console.log("Disconnected from the WebSocket server");
      if (shouldReconnect) {
        console.log("Attempting to reconnect...");
        setTimeout(connect, 5000);
      }
    });
  };

  connect();
}

module.exports = { createWebSocketConnection };
