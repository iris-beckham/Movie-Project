const { randMovie, randFullName, randBoolean, randMask, randQuote, randNumber, randSinger } = require('@ngneat/falso');

const create = (movies) => {
    const movie = {
        name: randMovie(),
        castAndCrew: {
            director: randFullName(),
            writer: randFullName(),
            producers: randFullName({ length: 2 }),
            actors: [randSinger(), ...randFullName({ length: 4 })]
        },
        inStock: randBoolean(),
        priceInCents: randNumber({ min: 0, max: 4000 }),
        id: randMask(),
        famousLine: randQuote(),
    }
    movies.push(movie);
    return movies;
}

const createMovies = (movies, num) => {
    if( isNaN(Number(num))){
        throw "Please enter a number"
    }
    for (let i = 0; i < num; i++) {
        movies = create(movies)
    }
    return movies;
}

const index = (movies) => {
    return movies.map((movie) => 'ID: ' + movie.id + '  Title: ' + movie.name + '   Availability: ' + (movie.inStock ? 'in stock' : 'not in stock')).join('\n');
}

const info = (movies, movieID) => {
    const movie = movies.find((movie) => movie.id === movieID);
    return `Title: ${movie.name}\nCost: $${movie.priceInCents / 100.00}\nStatus: ${movie.inStock ? 'in stock' : 'not in stock'}\nDirected By: ${movie.castAndCrew.director}\nStarring: ${movie.castAndCrew.actors.join(", ")}\n"${movie.famousLine}"`
}

const edit = (movies, movieID, property, updatedValue) => {
    if (property !== "name" && property !== "inStock" && property !== "priceInCents" && property !== "id" && property !== "famousLine") {
        throw "You can only change the following properties:\nname\ninStock\npriceInCents\nid\nfamousLine";
    }
    const index = movies.findIndex((movie) => movie.id === movieID);
    if (index > -1) {
        const foundMovie = movies[index];
        const oldValue = foundMovie[property];
        foundMovie.id = movieID;
        if (property === "inStock") {
            if (updatedValue === "true" || updatedValue === "false") {
                foundMovie[property] = updatedValue === "true";
            }else{
                throw ("inStock can only be true or false");
            }
        } else if (property === "priceInCents") {
            if (Number(updatedValue)) {
                foundMovie[property] = Number(updatedValue);
            } else {
                throw "priceInCents can only be a number";
            }
        } else {
            foundMovie[property] = updatedValue;
        }
        console.log(`Movie ${property} successfully changed from ${oldValue} to ${foundMovie[property]}`);
        return movies;
    } else {
        throw `Movie with id ${movieID} not found. No action taken`;
    }
}

const destroy = (movies, movieID) => {
    const index = movies.findIndex((movie) => movie.id === movieID);
    if (index > -1) {
        const name = movies[index].name;
        movies.splice(index, 1);
        console.log(`${name} successfully removed from collection`);
        return movies;
    } else {
        throw `Movie with id ${movieID} not found. No action taken`;
    }
}

module.exports = { create, createMovies, index, info, destroy, edit }

