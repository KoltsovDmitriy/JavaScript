import {movies} from './data.js';

//1
const newMovies = movies.concat();

newMovies.forEach((movies) => {
    movies.actors.forEach((actors) => {
        const today = new Date();       
        if (actors.birthyear != null)
        actors.age = today.getFullYear() - actors.birthyear;
    });
});

console.log(newMovies); 


//2
const nameGenres = newMovies.map((genre) => {
    return genre.genre
});
const allGenre = [... new Set(nameGenres.flat())];


const collectionByGenre = allGenre.map((genre) => {
    const moviesArr = [];
    
    newMovies.map((movie) => {        
        if ((movie.genre).includes(genre)){    
            moviesArr.push(movie.title);
        }; 
    });

    const collection = {genre, moviesArr};
    return collection;    
})

console.log(collectionByGenre);