require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");
const { transformDate } = require("./helpers/transformDate");

app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("joined", (joined) => {
    socket.emit("joined", joined);
  });
  socket.on("message", (message) => {
    const { id } = message;
    const fullDate = transformDate(id);
    io.emit("message", { ...message, date: fullDate });
  });
});

server.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
