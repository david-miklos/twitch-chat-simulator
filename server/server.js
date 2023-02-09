const express = require("express");
const { createMessage } = require("./utils");
const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = 3001;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  setInterval(() => {
    socket.emit("chat-message", createMessage());
  }, 2000);
});

httpServer.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
