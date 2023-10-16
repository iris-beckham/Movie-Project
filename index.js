const { readJSONFile, writeJSONFile } = require('./src/helpers');
const {create, createMovies, index, info, destroy, editName} = require('./src/movieController')

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
        case "index":
            console.log(index(movies))
            break;
        case "info":
            console.log(info(movies, arg))
            break;
        case "update":
            updatedMovies = editName(movies, arg,  process.argv[4])
            writeToFile = true;
            break;
        case "delete":
            updatedMovies = destroy(movies, arg);
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