const app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    // res.send('Hello Everyone');
    res.sendFile(__dirname + '/index.html');
})

// Whenever client connects this event is emmitted.
io.on('connection', function (socket) {
    console.log('A client is connected to Server.')

    setTimeout(function () {
        // socket.send('Lets Continue..!!')
        socket.emit('tester', { description: "Lets Start A chat Thread..!!" });
    }, 4000);

    // Whenever client gets disconnected this event is emmitted.
    socket.on('disconnect', function () {
        console.log('A client is disconnected from Server');
    })
})

http.listen(3000, (err) => {
    if (err) throw err;
    console.log('The server is running at port 3000!!');
})