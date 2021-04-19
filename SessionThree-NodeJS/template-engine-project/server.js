const express = require('express');
const app = express();
const request = require('request');

// Adding Middleware to configure Template Engine
// Static File Path
app.use(express.static(__dirname + "/public"));
// HTML Pages Path
app.set('views', "./views");
// Template View Engine Specification
app.set('view engine', 'ejs');



// http://ghibliapi.herokuapp.com/films

// Request URL: http://localhost:5001/
app.get('/', (req, res) => {
    // res.send('Hello World');
    res.render('index');
})

// Request URL: http://localhost:5001/movies
app.get('/movies', (req, res) => {
    request('http://ghibliapi.herokuapp.com/films', (error, response, body) => {
        if (error) {
            console.log(`Could not make an API call : ${error.message}`)
            return;
        }
        if (response.statusCode != 200) {
            console.error(`Expected Status Code 200 but received ${response.statusCode}.`)
            return;
        }

        res.render('movies', { title: 'Movies List Here!!', moviesList: JSON.parse(body) });

        //res.send(body);
        // let moviesList = '';
        // movies = JSON.parse(body);
        // movies.forEach(movie => {
        //     moviesList += `[${movie.title} : ${movie.release_date}]\n`;
        // });
        // res.send(moviesList);
    })
})

app.listen(5001, function () {
    console.log('The server is running at port 5001!!')
})