
const axios = require('axios');
const fs = require('fs').promises;

/*
async function saveMovies() {
    try {
        let response = await axios.get("http://ghibliapi.herokuapp.com/films")
        response.data.forEach(movie => {
            console.log(`[${movie.title} : ${movie.release_date}]`);
        });
    } catch (error) {
        console.log(`Could not send request to API: ${error}`);
    }
} 
*/

async function saveMovies() {
    try {
        let response = await axios.get("http://ghibliapi.herokuapp.com/films")
        let moviesList = '';
        response.data.forEach(movie => {
            moviesList += `[${movie.title} : ${movie.release_date}]\n`;
        });
        await fs.writeFile('asynawaitMovies.csv', moviesList);
    } catch (error) {
        console.log(`Could not send request to API: ${error}`);
    }
}

saveMovies();

