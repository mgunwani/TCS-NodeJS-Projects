
var express = require('express');
var router = express();
var Book = require('../models/book.model');
let mongoose = require('mongoose');

router.get('/', (req, res) => {
    //Query the DB and if no errors, send all the books
    let query = Book.find({});
    query.exec((err, books) => {
        if (err) res.send(err);
        //If no errors, send them back to the client
        res.json(books);
    });
})

router.post('/add', (req, res) => {
    //Creates a new book
    var newBook = new Book(req.body);
    //Save it into the DB.
    newBook.save((err, book) => {
        if (err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({ message: "Book successfully added!", book });
        }
    });
})

router.get('/:id', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err) res.send(err);
        //If no errors, send it back to the client
        res.json(book);
    });
})

module.exports = router;