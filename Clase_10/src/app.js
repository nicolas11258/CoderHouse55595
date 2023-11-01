const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

let messages = [
  {
    id: 1,
    text: "hola soy un mensaje",
    author: "Carlos"
  }
  ]

app.use(express.static('src/public'));

server.listen(8080, function () {
  console.log("Servidor corriendo en http://localhost:8080");
});


io.on("connection", function (socket) {
  console.log("Un cliente se ha conectado");
  socket.emit("messages", messages);

  socket.on("newMessage", function(data){
    console.log("llega mensaje")

    messages.push(data);
    io.emit('messages', messages);
  })
});