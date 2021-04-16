
const express = require('express');
const app = express();

// GET Request: http://localhost:5001/
app.get('/', function (req, res) {
    res.send('Hello World');
})

// GET Request: http://localhost:5001/employees
app.get('/employees', function (req, res) {
    res.send('<h2>Employees Data will Render Here..</h2>');
})

// POST Request: http://localhost:5001/employees
app.post('/employees', (req, res) => {
    res.send('<h2>Adding New Employee </h2>')
})

// PUT Request: http://localhost:5001/employees
app.put('/employees', (req, res) => {
    res.send('<h2>Updating Existing Employee </h2>')
})

// DELETE Request: http://localhost:5001/employees
app.delete('/employees', (req, res) => {
    res.send('<h2>Deleting Existing Employee </h2>')
})

app.listen(5001, function () {
    console.log('The server is running at 5001!!')
})