import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import Message from "./Message";

function connectToServer() {
  const socket = io("http://localhost:3001");
  socket.on("chat-message", (message) => {
    console.log(message);
  });
  return socket;
}

function App() {
  const [messages, setMessages] = useState([]);
  const listRef = useRef(null);

  useEffect(() => {
    const socket = connectToServer();
    socket.on("chat-message", (message) => {
      setMessages((messages) => [...messages, message]);
      listRef.current.lastChild.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <ul ref={listRef} className="messages-list">
        {messages.map((message, index) => (
          <li key={index}>
            <Message
              time={message.time}
              username={message.username}
              body={message.body}
              color={message.color}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
