/**
 * fs module: Built-In Module
 * This helps in comminicating with file-system.
 */

// Import the fs Module
var fs = require('fs');

// Request 1: Reading a file asynchronously.
fs.readFile('data-one.txt', function (err, data) {
    if (err) {
        console.log('There is some error.');
    } else {
        console.log(data.toString());
    }
})

// Request 2: Reading a file asynchronously.
fs.readFile('data-two.txt', function (err, data) {
    if (err) {
        console.log('There is some error.');
    } else {
        console.log(data.toString());
    }
})

