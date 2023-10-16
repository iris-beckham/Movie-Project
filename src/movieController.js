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

const editName = (movies, movieID, updatedName) => {
    const index = movies.findIndex((animal) => animal.id === movieID);
    if (index > -1) {
        const oldName = movies[index].name;
        movies[index].id = movieID;
        movies[index].name = updatedName;
        console.log(`Movie name successfully changed from ${oldName} to ${movies[index].name}`);
        return movies;
    } else {
        console.log(`Movie with id ${movieID} not found. No action taken`);
        return movies;
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
        console.log(`Movie with id ${movieID} not found. No action taken`);
        return movies;
    }
}

module.exports = {create, createMovies, index, info, destroy, editName}

