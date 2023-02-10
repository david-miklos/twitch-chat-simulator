import { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
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
  function scrollToLastMessage() {
    listRef.current?.lastChild?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // // One way of scrolling to last message ; without using flushSync
  // useEffect(() => {
  //   scrollToLastMessage()
  // }, [messages]);

  useEffect(() => {
    const socket = connectToServer();
    socket.on("chat-message", (message) => {
      flushSync(() => {
        setMessages((messages) => [...messages, message]);
      });
      scrollToLastMessage();
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
