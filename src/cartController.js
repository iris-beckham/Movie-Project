
const addToCart = (movies, cart, movieID) => {
    const index = movies.findIndex((movie) => movie.id === movieID);
    if (index > -1) {
        if (movies[index].inStock) {
            cart.push(movies[index]);
            console.log(`${movies[index].name} successfully added to cart. $${movies[index].priceInCents/100.00}`);
            return cart;
        } else{
            console.log(`${movies[index].name} is not currently in stock`)
        }
    } else{
        console.log(`Movie with id ${movieID} not found. No action taken`);
    }
    return cart;
}

const totalCost = (cart) => {
    const total =  cart.reduce((sum, movie) => sum + Number(movie.priceInCents), cart[0].priceInCents ) - cart[0].priceInCents;
    return `$${total/100.00}`;
}

module.exports = { addToCart, totalCost }