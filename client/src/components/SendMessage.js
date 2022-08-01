import React, { useState } from "react";
import socket from "../socket";
import icon from "./icon.svg";
import "../styles/SendMessage.css";

const SendMessage = ({ user }) => {
    const [message, setMessage] = useState("");
    const handleMessage = (e) => {
        e.preventDefault();
        socket.emit("message", { id: Date.now(), user, message });
        setMessage("");
    };
    return (
        <form className="send-message" onSubmit={handleMessage}>
            <input
                type="text"
                placeholder="mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button>
                <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                        <img src={icon} />
                    </div>
                </div>
                <span>Enviar</span>
            </button>
        </form>
    );
};

export default SendMessage;
