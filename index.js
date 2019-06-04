var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server, {
  transports: ['websocket'],
  perMessageDeflate: true,
  httpCompression: true,
  wsEngine: 'ws',
  log: true
});
//io.set('transports', ['websocket']);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("a user connected");

  socket.on("chat message", function(msg) {
    console.log("message: ", msg);
    io.emit('chat message', msg);
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
});

server.listen(3000, function() {
  console.log("listening on *:3000");
});
