let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bookRoutes = require('./routes/book.routes');

// Accepting JSON Requests
app.use(express.json());

// Routes Middleware
app.use('/books', bookRoutes);

//db connection
mongoose.connect("mongodb://localhost:27017/mydb",)
    .then(() => console.log('Successfully Connected with Database'))
    .catch(err => console.log('Connection Error : ' + err));

app.get('/', (req, res) => {
    res.send('hello from simple server :)')
})

app.listen(5001, function (err) {
    if (err) throw err;
    console.log('The server is running at port 5001!!');
})

module.exports = app; // for testi