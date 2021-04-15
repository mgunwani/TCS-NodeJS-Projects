
var fs = require('fs');

var data = "\nHello World\nHello Everyone";
// fs.writeFile('sample-one.txt', data, function (err) {
//     if (err) throw err;
//     console.log('Data written to the file successfully.');
// })

fs.appendFile('sample-one.txt', data, function (err) {
    if (err) throw err;
    console.log('Data written to the file successfully.');
})

