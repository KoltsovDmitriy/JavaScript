import {movies} from './data.js';

//1
const newMovies = movies.map((movies) => {
    movies.actors.forEach((actors) => {
        if (actors.birthyear != null)
        actors.age = new Date().getFullYear() - actors.birthyear; 
    });
    return movies;
});

// console.log(newMovies); 


//2
// const genreNames = newMovies.map((genre) => {
//     return genre.genre
// });
// const allGenres = [... new Set(genreNames.flat())];

// const collectionOfGenres = allGenres.map((genre) => {
//     const moviesArray = [];
    
//     newMovies.map((movie) => {        
//         if ((movie.genre).includes(genre)){    
//             moviesArray.push(movie.title);
//         }; 
//     });

//     const collection = {genre, moviesArray};
//     return collection;    
// })

// console.log(collectionOfGenres);

//3

const title = document.querySelector('.header-name');
const rating = document.querySelector('.rating_info-score');
const ratingScore = document.querySelector('.score-number');
const filmsImage = document.querySelector('.films_image');
const description = document.querySelector('.films_info-description');
const genres = document.querySelector('.films_info-genre');
const actorsInfo = document.querySelector('.actors_info');
const similarMovies = document.querySelector('.similar-movies');

const getMovie = (id) => {
    newMovies.forEach((movie) => {
        if (movie.id === id) {
            title.innerText = movie.title;

            if (movie.rating >=8) {
                ratingScore.style.color = '#64C342';
            } else if (movie.rating >=6) {
                ratingScore.style.color = '#ADBF3A';
            } else {
                ratingScore.style.color = '#CA3838';
            }


            ratingScore.innerText = movie.rating;

            const img = document.createElement('img');
            img.src = `./images/${id}.jpg`;
            filmsImage.appendChild(img);

            description.innerText = movie.description;

            movie.genre.forEach((genre) => {
                const movieGenre = document.createElement('div');
                movieGenre.className = 'genre';
                genres.append(movieGenre);
                movieGenre.innerText = genre;
            })

            movie.actors.forEach((actor) => {
                const movieActors = document.createElement('div');
                movieActors.className ='actors_info-info';
                actorsInfo.append(movieActors);

                const actorsInfoImg = document.createElement('div');
                actorsInfoImg.className = 'actors_info-img';
                movieActors.append(actorsInfoImg);

                const actorsInfoName = document.createElement('div');
                actorsInfoName.className = 'actors_info-name';
                movieActors.append(actorsInfoName);

                const actorName = actor.name.toLowerCase().split(" ").pop();
                const imgActor = document.createElement('img');
                imgActor.src = `./images/actors/${actorName}.jpg`;
                actorsInfoImg.appendChild(imgActor);

                actorsInfoName.innerText = actor.name;
            })

            movie.similar.forEach((similar) => {
                const similarMovie = document.createElement('div');
                similarMovie.className = 'similar-movies-img';
                similarMovies.append(similarMovie);
                const imgSimilar = document.createElement('img');

                newMovies.forEach((similarMovies) =>{
                    
                    if(similar.includes(similarMovies.title)) {
                        imgSimilar.src = `./images/${similarMovies.id}.jpg`;
                        similarMovie.append(imgSimilar);
                    }
                })
                
    
            })

        }
        
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

            let ratingScoreNew = (+ratingScore.innerText + +rateInput.value)/2;
            ratingScore.innerText = ratingScoreNew.toFixed(1);

            if (ratingScoreNew.toFixed(1) >=8) {
                ratingScore.style.color = '#64C342';
            } else if (ratingScoreNew.toFixed(1) >=6) {
                ratingScore.style.color = '#ADBF3A';
            } else {
                ratingScore.style.color = '#CA3838';
            }
            
            rateInput.value = "";
        }
       
    })
    
}
getMovie(3);





