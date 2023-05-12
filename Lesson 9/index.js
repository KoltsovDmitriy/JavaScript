import {movies} from './data.js';

//1
const newMovies = movies.concat();

// newMovies.forEach((movies) => {
//     movies.actors.forEach((actors) => {
//         const today = new Date();       
//         if (actors.birthyear != null)
//         actors.age = today.getFullYear() - actors.birthyear;
//     });
// });

// console.log(newMovies[2].actors[1]); 


//2
const nameGenres = newMovies.map((genre) => {
    return genre.genre
});
const allGenre = [... new Set(nameGenres.flat())];

console.log(allGenre);
