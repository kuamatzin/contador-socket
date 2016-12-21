var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('new', function(msg) {
        console.log(msg.data);
        io.emit('saludo', { data: msg.data });
    });
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});