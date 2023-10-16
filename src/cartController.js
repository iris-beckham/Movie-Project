
const addToCart = (movies, cart, movieID) => {
    const index = movies.findIndex((movie) => movie.id === movieID);
    if (index > -1) {
        cart.push(movies[index]);
        console.log(`${movies[index].name} successfully added to cart`)
        return cart;
    } else {
        console.log(`Movie with id ${movieID} not found. No action taken`);
        return cart;
    }
}

module.exports = { addToCart }