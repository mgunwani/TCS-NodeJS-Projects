const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/userModel');

var corsOptions = {
    origin: "http://localhost:4200"
}

app.use(express.json());
app.use(cors(corsOptions));


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

app.get("/users/:id", (req, res) => {
    User.findById(req.params.id, (error, user) => {
        if (error) throw err;
        res.send(user);
    })
})

// Request URL: http://localhost:5001/users (POST)
app.post('/users', (req, res) => {
    User.create(req.body, (err, user) => {
        if (err) throw err;
        res.send(user);
    })
})

// Request URL: http://localhost:5001/users (DELETE)
app.delete('/users/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) throw err;
        res.send(user);
    })
})

app.listen(5001, () => {
    console.log('The server is running at port 5001!!');
})