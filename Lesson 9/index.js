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

// console.log(allGenre);

// debugger;
allGenre.forEach((genres)=> {
    newMovies.forEach((movie) => {
        if ((movie.genre).includes(genres)){     
            let movies = [movie.title]
            let all = {genres, movies};
            console.log(all);
        };
    });
})
