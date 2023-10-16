const { readJSONFile, writeJSONFile } = require('./src/helpers');
const {create, createMovies, index, info, destroy, editName} = require('./src/movieController')
const {addToCart} = require('./src/cartController')

const movies = readJSONFile('./data', 'movies.json');
const cart = readJSONFile('./data', 'cart.json');

const run = () => {
    const action = process.argv[2];
    const arg = process.argv[3];

    let writeToMoviesFile, writeToCartFile = false;
    let updatedMovies, updatedCart = [];

    switch (action) {
        case "create":
            updatedMovies = arg ? createMovies(movies, arg) : create(movies);
            writeToMoviesFile = true;
            break;
        case "index":
            console.log(index(movies))
            break;
        case "info":
            console.log(info(movies, arg))
            break;
        case "update":
            updatedMovies = editName(movies, arg,  process.argv[4])
            writeToMoviesFile = true;
            break;
        case "delete":
            updatedMovies = destroy(movies, arg);
            writeToMoviesFile = true;
            break;
        case "addToCart":
            updatedCart = addToCart(movies, cart, arg);
            writeToCartFile = true;
            break;
        case "emptyCart":
            updatedCart = [];
            writeToCartFile = true;
            break;
        default:
            console.log("There was an error.")
    }
    if(writeToMoviesFile){
        writeJSONFile('./data', 'movies.json', updatedMovies);
    }
    if(writeToCartFile){
        writeJSONFile('./data', 'cart.json', updatedCart);
    }
}

run();