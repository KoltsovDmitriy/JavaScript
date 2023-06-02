import {movies} from './data.js';

//1
const newMovies = movies.map((movies) => {
    movies.actors.forEach((actors) => {
        if (actors.birthyear != null)
        actors.age = new Date().getFullYear() - actors.birthyear; 
    });
    return movies;
});

console.log(newMovies); 


//2
const genreNames = newMovies.map((genre) => {
    return genre.genre
});
const allGenres = [... new Set(genreNames.flat())];

const collectionOfGenres = allGenres.map((genre) => {
    const moviesArray = [];
    
    newMovies.map((movie) => {        
        if ((movie.genre).includes(genre)){    
            moviesArray.push(movie.title);
        }; 
    });

    const collection = {genre, moviesArray};
    return collection;    
})

console.log(collectionOfGenres);