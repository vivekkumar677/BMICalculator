
const movies = [];

function favouriteMovie(operation="add", movie="veer") {
    // Write your code here
    if (operation === "add"){
        movies.push(movie);
    }else if(operation==="remove"){
        movies.pop();
    }
    return movies
};

module.exports = favouriteMovie;
