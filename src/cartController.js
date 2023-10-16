
const addToCart = (movies, cart, movieID) => {
    const index = movies.findIndex((movie) => movie.id === movieID);
    if (index > -1 && movies[index].inStock) {
        cart.push(movies[index]);
        console.log(`${movies[index].name} successfully added to cart`)
        return cart;
    } else if (!movies[index].inStock) {
        console.log(`${movies[index].name} is not currently in stock`)
    } else
        console.log(`Movie with id ${movieID} not found. No action taken`);
    return cart;
}

module.exports = { addToCart }