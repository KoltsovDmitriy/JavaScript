import {movies} from './data.js';

//1
const newMovies = movies.map((movie) => {
    const actorsArr = movie.actors.map((actor) => {
        const actorsNew = {... actor};
        if (actor.birthyear)
        actorsNew.age = new Date().getFullYear() - actor.birthyear;
        return actorsNew;
    });
    return {... movie, actors: actorsArr};
});
// console.log(newMovies[2].actors[2]);
// console.log(movies[1].actors[2]);

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

// console.log(collectionOfGenres);

//3, 4
const wrapper = document.querySelector('.wrapper');
const title = document.querySelector('.header-name');
const rating = document.querySelector('.rating_info-score');
const ratingScore = document.querySelector('.score-number');
const filmsImage = document.querySelector('.films_image');
const description = document.querySelector('.films_info-description');
const genres = document.querySelector('.films_info-genre');
const actorsInfo = document.querySelector('.actors_info');
const similarMovies = document.querySelector('.similar-movies');

let ratingColor = '';
const changeColor = (element) => {
    if (element >=8) ratingColor = '#64C342';
    else if (element >=6) ratingColor = '#ADBF3A';
    else ratingColor = '#CA3838';
}

const getMovie = (id) => {
    
        const foundMovie = newMovies.find((movie) => movie.id === id );
        if (!foundMovie) return (wrapper.innerHTML = 'Movie is not found');

        title.innerText = foundMovie.title;            
        changeColor(foundMovie.rating);
        ratingScore.style.color = ratingColor;
        ratingScore.innerText = foundMovie.rating;

        const img = document.createElement('img');
        img.src = `./images/${id}.jpg`;
        filmsImage.append(img);

        description.innerText = foundMovie.description;

        foundMovie.genre.forEach((genre) => {
            const movieGenre = document.createElement('div');
            movieGenre.classList.add('genre');
            genres.append(movieGenre);
            movieGenre.innerText = genre;
            
        })
           
        foundMovie.actors.forEach((actor) => {
            const movieActors = document.createElement('div');
            movieActors.classList.add('actors_info-info');
            actorsInfo.append(movieActors);
            
            const actorsInfoImg = document.createElement('div');
            actorsInfoImg.classList.add('actors_info-img');
            movieActors.append(actorsInfoImg);
            
            const actorsInfoName = document.createElement('div');
            actorsInfoName.classList.add('actors_info-name');
            movieActors.append(actorsInfoName);

            const actorName = actor.name.toLowerCase().split(" ").pop();
            const imgActor = document.createElement('img');
            imgActor.src = `./images/actors/${actorName}.jpg`;
            actorsInfoImg.append(imgActor);

            actorsInfoName.innerText = actor.name;
        })
        foundMovie.similar.forEach((similar) => {
            const similarMovie = document.createElement('div');
            similarMovie.classList.add('similar-movies-img');
            similarMovies.append(similarMovie);
            
            const imgSimilar = document.createElement('img');

            newMovies.forEach((similarMovieAnother) =>{
                    
                if(similar.includes(similarMovieAnother.title)) {
                    imgSimilar.src = `./images/${similarMovieAnother.id}.jpg`;
                    similarMovie.append(imgSimilar);
                }
            })
        })
        
//4
    const rateFilm = document.querySelector('.rate_modal-name');
    const rateBtn = document.querySelector('.rate_btn');
    const rateInput = document.querySelector('.rate_input');
    rateFilm.innerText = newMovies[id-1].title;
        
    rating.addEventListener('mouseover', () => {
        const rateForm = document.querySelector('.rate_modal');
        rateForm.classList.add('rate_modal-block');        
    })
    
    rateBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        if((rateInput.value > 10) || (rateInput.value < 0) || (isNaN(rateInput.value)) || (rateInput.value == '')) {
            alert('Введите число от 0 до 10')
            rateInput.value = "";
        }
        else {
            let ratingScoreNew = ((+ratingScore.innerText + +rateInput.value)/2).toFixed(1);
            ratingScore.innerText = ratingScoreNew;
            changeColor(ratingScoreNew);
            ratingScore.style.color = ratingColor;
            rateInput.value = "";
        }
    })
}
getMovie(2);

