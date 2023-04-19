const eventHandler = require("../evenetHandler/event");
const socket = (io) => {
  io.on("connection", (socket) => {
    console.log("Socket Connected...", socket.id);

    socket.on("request", async (data, callback) => {
      eventHandler(data, socket);
    });

    socket.on("Hekki", (msg) =>
      console.log("", msg)
    );

    socket.on("disconnect", () => {
      console.log("Socket Disconnected...");
    });
    socket.emit("testing", "workkkkkkkkkkkkkkkkkk");
  });
};

module.exports = socket;
