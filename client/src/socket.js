import { io } from "socket.io-client";

// const URL = "http://localhost:4000";
const socket = io(process.env.REACT_APP_SOCKET, { autoConnect: false });

socket.onAny((event, ...args) => {
  // console.log(event, args);
});

export default socket;
