import React, { useEffect, useState } from "react";
import socket from "../socket";
import "../styles/Message.css";

const Message = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessage((prevMessage) => [
        ...prevMessage,
        { id: message.id, user: message.user, message: message.message, date: message.date },
      ]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <div className="chat-wrapper">
      {message.map((msg) => (
        <div className="container_message" key={msg.id}>
          <h2 className="username">
            <span className="span-username">{msg.user}</span>
            <span className="span-time">{msg.date}</span>
          </h2>
          <div className="message">{msg.message}</div>
        </div>
      ))}
    </div>
  );
};

export default Message;
