
const axios = require('axios')
const fs = require('fs').promises;

/*
axios.get('http://ghibliapi.herokuapp.com/films1')
    .then((response) => {
        response.data.forEach(movie => {
            console.log(`[${movie.title} : ${movie.release_date}]`)
        });
    })
    .catch((error) => {
        console.error(`Could not send request to API: ${error}`)
    })
*/

axios.get('http://ghibliapi.herokuapp.com/films')
    .then((response) => {
        let moviesList = '';
        response.data.forEach(movie => {
            moviesList += `[${movie.title} : ${movie.release_date}]\n`;
        });
        return fs.writeFile('promiseMovies.csv', moviesList);
    })
    .then(() => {
        console.log('Saved our movie list to promiseMovies.csv!!');
    })
    .catch((error) => {
        console.error(`Could not send request to API: ${error}`)
    })


