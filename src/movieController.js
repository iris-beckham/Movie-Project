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

module.exports = {create}

