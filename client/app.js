const socket  = io('http://localhost:3001')

socket.on("chat-message", (arg) => {
    console.log(arg); // world
  });