# Welcome to the Movie Store

You should be able to add new random movies to our catalogue, view a list of all the movies in the store, see information on a specific movie, edit information that might be incorrect, and delete movies from our inventory. As a customer, you can also add movies to into your virtual shopping cart.

Look at the [Movie Commands](#movie-commands) section to see how to view and change the movie catalogue and the [Cart Commands](#cart-commands) section for how to use the cart.

We hope you have a good time at the Movie Store!

### install dependency:

    npm i @ngneat/falso 

## Movie Commands
`npm run create` - creates a new movie

`npm run create <number of movies>` - creates a specified number of movies

`npm run index` - lists the movie titles, their id's, and whether or not they are in stock 

`npm run info <id>` - shows the details for a movie with a specified id

`npm run delete <id>` - deletes the movie with the corresponding id

`npm run edit <id> <property> <updated value>` - changes the value of a specified property of the movie with the specific id. The properties that can be changed are: name, inStock, priceInCents, id, famousLine

## Cart Commands

`npm run addToCart <id>` - adds a movie to the user's cart based on its id from movies.json; shows the name and price of said movie and cart total cost.

`npm run emptyCart` - empties the cart

`npm run showCart` - lists the price, quantity, and name of movies in the cart


## Stretch goals:
- uses @ngneat/falso 
- can create multiple new items at a time
- error handling
