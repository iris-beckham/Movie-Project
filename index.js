const { readJSONFile, writeJSONFile } = require('./src/helpers');
const {create, createMovies} = require('./src/movieController')

const movies = readJSONFile('./data', 'movies.json');

const run = () => {
    const action = process.argv[2];
    const arg = process.argv[3];

    let writeToFile = false;
    let updatedMovies = [];

    switch (action) {
        case "create":
            updatedMovies = arg ? createMovies(movies, arg) : create(movies);
            writeToFile = true;
            break;
        case "read":
            console.log(action, movies)
            break;
        case "update":
            console.log(action, movies)
            writeToFile = true;
            break;
        case "destroy":
            console.log(action, movies)
            writeToFile = true;
            break;
        default:
            console.log("There was an error.")
    }
    if(writeToFile){
        writeJSONFile('./data', 'movies.json', updatedMovies);
    }
}

run();