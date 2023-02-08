const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = 3001;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
  // { cors: { origin: "*"}}
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
