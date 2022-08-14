import React, { useEffect, useState } from "react";
import SendMessage from "./components/SendMessage";
import Message from "./components/Message";
import socket from "./socket";
import "./styles/App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState();
  useEffect(() => {
    socket.on("joined", (joined) => {
      setJoined(joined);
    });

    return () => {
      socket.off("joined");
    };
  }, []);

  const handleUser = (e) => {
    e.preventDefault();
    socket.connect();
    socket.emit("joined", username);
  };

  return (
    <div>
      {joined ? (
        <div className="container">
          <div className="message-box">
            <Message />
          </div>
          <div className="chat-box">
            <SendMessage user={joined} />
          </div>
        </div>
      ) : (
        <form className="join" onSubmit={handleUser}>
          <input
            type="text"
            placeholder="Nickname"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>Entrar</button>
        </form>
      )}
    </div>
  );
};

export default App;
