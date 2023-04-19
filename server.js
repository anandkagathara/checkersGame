const express = require("express");
const app = express();
const server = require("http").createServer(app);
require("./config/db");
global.io = require("socket.io")(server);
const path = require("path");
const portNo = process.argv[2] || 1001;

app.use(express.static("./public"));

//redis connection
const pubConnection = require("./config/redis/pub");
pubConnection();
const subConnection = require("./config/redis/sub");
subConnection();

//socket connection
const socketConnection = require("./config/socket");
socketConnection(io);

server.listen(portNo, () => {
  console.log("Server is running on ", portNo);
});
