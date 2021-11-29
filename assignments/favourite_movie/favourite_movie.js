const movies = [];

function favouriteMovie(operation="add", movie="lucy") {
    // Write your code here

    if (operation === "add"){
        return movies.push(movie);
    } else if(operation === "remove"){
        return movies.pop(movie);
    }
};

module.exports = favouriteMovie;
console.log(favouriteMovie());
