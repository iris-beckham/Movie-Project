const { randMovie, randFullName, randBoolean, randMask, randQuote, randNumber, randSinger, randLine } = require('@ngneat/falso');

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
    for (let i = 0; i < num; i++) {
        movies = create(movies)
    }
    return movies;
}

const index = (movies) => {
    return movies.map((movie) => movie.id + ' ' + movie.name).join('\n');
}

const info = (movies, movieID) => {
    const movie = movies.find((movie) => movie.id === movieID);
    return `Title: ${movie.name}\nCost: $${movie.priceInCents/100.00}\nDirected By: ${movie.castAndCrew.director}\nStarring: ${movie.castAndCrew.actors.join(", ")}\n"${movie.famousLine}"`
}

module.exports = {create, createMovies, index, info}

