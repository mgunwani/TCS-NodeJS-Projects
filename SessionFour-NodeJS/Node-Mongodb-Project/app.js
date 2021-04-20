const express = require('express');
const app = express();
const mongoose = require('mongoose');

const User = require('./models/userModel');

app.use(express.json())

mongoose.connect('mongodb://localhost:27017/tcsprojectdb', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err;
    console.log("Successfully Connected to Database");
})

// Request URL: http://localhost:5001/
app.get('/', (req, res) => {
    res.send("Hello from App!!");
})

// Request URL: http://localhost:5001/users (GET)
app.get('/users', (req, res) => {
    User.find((err, data) => {
        if (err) throw err;
        res.json(data);
    })
})

// Request URL: http://localhost:5001/users (POST)
app.post('/users', (req, res) => {
    User.create(req.body, (err) => {
        if (err) throw err;
        res.send('User Added Successfully.')
    })
})

app.listen(5001, () => {
    console.log('The server is running at port 5001!!');
})