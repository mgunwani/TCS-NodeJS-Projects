/**
 * http is a core module.
 * Helps in creating web server in node.js
 */

// Import http core module
var http = require('http');

// Create Server
var server = http.createServer(function (req, res) {
    res.write('Hello Everyone !!!!');
    res.end();
})

server.listen(3000, function () {
    console.log('The server is running at 3000!!');
});

// server.listen(3000);
// console.log('The server is running at 3000!!');


