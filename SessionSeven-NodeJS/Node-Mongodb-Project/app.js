const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/userModel');

var corsOptions = {
    origin: "http://localhost:4200"
}


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));
app.set('view engine', "ejs");
app.set('views', './views');


mongoose.connect('mongodb://localhost:27017/tcsprojectdb', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) throw err;
    console.log("Successfully Connected to Database");
})

// Request URL: http://localhost:5001/
app.get('/', (req, res) => {
    // res.send("Hello from App!!");
    res.render('index');
})

// Request URL: http://localhost:5001/users (GET)
app.get('/users', (req, res) => {
    User.find((err, data) => {
        if (err) throw err;
        // res.json(data);
        res.render('users', { usersList: data })
    })
})

// Request URL: http://localhost:5001/users/60818ab44a2cbdd840c7195a (GET)
app.get("/users/:id", (req, res) => {
    User.findById(req.params.id, (error, user) => {
        if (error) throw err;
        // res.send(user);
        res.render('user-detail', { userDetail: user })
    })
})

app.get('/user-add', (req, res) => {
    res.render('user-add');
})

// Request URL: http://localhost:5001/users (POST)
app.post('/users', (req, res) => {
    User.create(req.body, (err, user) => {
        if (err) throw err;
        // res.send(user);
        res.redirect('/users')
    })
})

// // Request URL: http://localhost:5001/users (DELETE)
// app.delete('/user-delete/:id', (req, res) => {
//     User.findByIdAndRemove(req.params.id, (err, user) => {
//         if (err) throw err;
//         res.send(user);
//     })
// })

// Request URL: http://localhost:5001/users (DELETE)
app.post('/user-delete', (req, res) => {
    User.findOneAndRemove({ _id: req.body._id }, (err, user) => {
        if (err) throw err;
        // res.send(user);
        res.redirect('/users')
    })
})

app.get('/user-edit/:id', (req, res) => {
    User.findById(req.params.id, (error, user) => {
        if (error) throw err;
        // res.send(user);
        res.render('user-update', { userDetail: user })
    })
})

// app.put('/user-update/:id', (req, res) => {
//     User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
//         if (err) throw err;
//         res.send(data);
//     })
// })

app.post('/user-update', (req, res) => {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, (err, data) => {
        if (err) throw err;
        // res.send(data);
        res.redirect('/users')
    })
})

app.listen(5001, () => {
    console.log('The server is running at port 5001!!');
})