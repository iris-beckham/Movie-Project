const { readJSONFile, writeJSONFile } = require('./src/helpers');

const movies = readJSONFile('./data', 'movies.json');

const run = () => {
    const action = process.argv[2];

    let writeToFile = false;
    let updatedMovies = [];

    switch (action) {
        case "create":
            console.log(action, movies)
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
        writeJSONFile('./data', 'animals.json', updatedMovies);
    }
}

run();