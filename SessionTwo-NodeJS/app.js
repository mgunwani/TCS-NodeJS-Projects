const express = require('express');
const app = express();
const fs = require('fs');

// GET Request: http://localhost:5001/
app.get('/', function (req, res) {
    res.send('Hello World');
})

app.get('/employees', function (req, res) {
    fs.readFile('./data/employees.json', (err, result) => {
        if (err) throw err;
        res.send(JSON.parse(result));
    })
})

app.listen(5001, function () {
    console.log('The server is running at 5001!!')
})