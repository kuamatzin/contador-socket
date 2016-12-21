var app = require('express')();

var server = require('http').Server(app);

var io = require('socket.io')(server);

server.listen(process.env.PORT || 3000, function(){
  console.log('listening on', server.address().port);
});

app.get('/', function(request, response){
    response.send("HOLA MUNDO");
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('new', function(msg) {
        console.log(msg.data);
        io.emit('saludo', { data: msg.data });
    });
});