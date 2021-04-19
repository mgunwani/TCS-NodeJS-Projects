
var request = require('request');
var fs = require('fs');

/*
request("http://ghibliapi.herokuapp.com/films", (err, response, body) => {
    if (err) {
        console.error(`Could not send request to API: ${err.message}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Expected Status Code 200 but received ${response.statusCode}.`)
        return;
    }
    movies = JSON.parse(body);
    movies.forEach(movie => {
        console.log(`[${movie.title} : ${movie.release_date}]`)
    });
});
*/

request("http://ghibliapi.herokuapp.com/films", (err, response, body) => {
    if (err) {
        console.error(`Could not send request to API: ${err.message}`);
        return;
    }
    if (response.statusCode != 200) {
        console.error(`Expected Status Code 200 but received ${response.statusCode}.`)
        return;
    }
    movies = JSON.parse(body);
    let movieList = '';
    movies.forEach(movie => {
        movieList += `[${movie.title} : ${movie.release_date}]\n`;
    });

    fs.writeFile('callbackMovies.csv', movieList, (error) => {
        if (error) {
            console.error(`Could Not save movies to a file : ${error.message}`);
            return;
        }
        console.log('Saved our movie list to callbackMovies.csv!!');
    })
});