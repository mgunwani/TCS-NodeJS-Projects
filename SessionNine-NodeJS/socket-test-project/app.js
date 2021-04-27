const app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    // res.send('Hello Everyone');
    res.sendFile(__dirname + '/index.html');
})

var clientsConnected = 0;
// Whenever client connects this event is emmitted.
io.on('connection', function (socket) {
    clientsConnected++;
    io.sockets.emit('broadcast', { desc: clientsConnected + " clients Connected." });
    socket.on('disconnect', function () {
        clientsConnected--;
        io.sockets.emit('broadcast', { desc: clientsConnected + " clients Connected." });
    })
})

http.listen(3000, (err) => {
    if (err) throw err;
    console.log('The server is running at port 3000!!');
})