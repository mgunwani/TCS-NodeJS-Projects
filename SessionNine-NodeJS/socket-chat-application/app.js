var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

users = [];
io.on('connection', function (socket) {
    console.log('A user connected');
    socket.on('setUsername', function (data) {

        users.push(data);
        socket.emit('userSet', { username: data });

        // if (users.indexOf(data) > -1) {
        //     users.push(data);
        //     socket.emit('userSet', { username: data });
        // } else {
        //     socket.emit('userExists', data + ' username is taken! Try some other username.');
        // }

        socket.on('msg', function (data) {
            // Send Message to Everyone..
            io.sockets.emit('newmsg', data);
        })
    })
});

http.listen(3000, function () {
    console.log('listening on localhost:3000');
});