import React, { useState } from "react";
import socket from "../socket";
import svg from "./file.svg";
import "../styles/SendMessage.css";

const SendMessage = ({ user }) => {
  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    e.preventDefault();
    socket.emit("message", { id: Date.now(), user, message });
    setMessage("");
  };
  return (
    <div className="container-input-message">
      <form className="send-message" onSubmit={handleMessage}>
        <div className="upload-input">
          <input tabIndex={-1} className="file-input" type="file" />
        </div>
        <div className="attach-wrapper">
          <button type="button" className="attach-button">
            <div className="button-content">
              <img src={svg}></img>
            </div>
          </button>
        </div>
        <input
          type="text"
          placeholder="mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SendMessage;
