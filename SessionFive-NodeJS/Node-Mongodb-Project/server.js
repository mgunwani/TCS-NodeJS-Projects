const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb://localhost:27017/";
var db;
MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    if (err) throw err;
    db = client.db("tcsdb")
    console.log('Successfully Connected to Database!!');
})

app.get('/', (req, res) => {
    res.send("Hello Everyone!!");
})

app.get('/users', (req, res) => {
    db.collection("users", (err, collection) => {
        if (err) throw err;
        collection.find().toArray((err, users) => {
            if (err) throw err;
            res.send(users);
        })
    })
})

app.listen(5001, () => {
    console.log('The server is running at port 5001!!');
})