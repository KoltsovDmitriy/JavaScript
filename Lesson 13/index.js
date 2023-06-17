import {data} from './data.js';

///2
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("burger").addEventListener("click", () =>
    {
        document.querySelector(".header").classList.toggle("open")
    })
})

///3
const openSignIn = document.querySelector('.header__link5');
const closeSingIn = document.querySelector('.cross');
const form = document.querySelector('.sign-up__wrapper');

const openCloseForms = (divForm, state) => {
    divForm.addEventListener('click', () => {
        form.style.visibility = state;        
    })
}
openCloseForms(openSignIn, "visible");
openCloseForms(closeSingIn, "hidden");

///4
const links = document.querySelectorAll('.link');
const handleLink = (e) => {
    e.preventDefault();
    const { currentTarget } = e;
    const href = currentTarget.getAttribute("href");
    if(!href) return;
    const element = document.querySelector(href);
    if(!element) return;
    const top = element.offsetTop; 
    window.scrollTo({ behavior: "smooth", top})
}

links.forEach(link => {
    link.addEventListener('click', handleLink)
});

///5
const sliderBackground = document.querySelector('.slider__image');
const sliderText = document.querySelector('.slider__title');

    let i = 1;
    setInterval(()=>{
        ++i;
        if (i === 4) {
        i = 1;
        }
        sliderBackground.style.backgroundImage = `url(./img/slider_image${i}.png`;
        sliderText.style.backgroundImage = `url(./img/slider_image${i}_${i}.png`;
    }, 4000);

///6
const typeNames = data.map((type) => {
    return type.type
});
const allTypes = [... new Set(typeNames.flat())].reverse();

const collectionOfTypes = allTypes.map((type) => {
    const moviesArray = [];
    data.map((movie) => {        
        if ((movie.type).includes(type)){    
            moviesArray.push(movie);
        }; 
    });
    const collection = {type, moviesArray};
    return collection;    
})
// console.log(collectionOfTypes);

// const getTemplateCards = (data) => {
//     data.forEach((cards) => {        
//         const card = `<div class="film" style="background-image: url(${cards.image});">
//                 <div class="hover">
//                     <div class="film__flex">                                
//                         <img class="film__info--toggle" src="./img/Hover/Toggle.png" alt="Toggle">
//                         <div class="film__info--rating">${cards.rating}</div>
//                         <div class="film__info--year">${cards.year}</div>
//                     </div>
//                     <div class="film__name"><p>${cards.title}</p></div>
//                     <div class="film__description"><p>${cards.description}</p></div>
//                     <div class="film__button">
//                         <a href="${cards.trailer}" class="film__button--watch">WATCH</a>
//                         <img src="./img/Hover/Icon_watch.png" class="film__button--text" alt="">
//                     </div>
//                 </div>
//             </div>`;
//             return cards;
//     })
// }
// const getMovie = ()=>{
//     const getMovieCard = data.forEach(movie => {
//             if(movie.type.includes('show')) {
//             const container = document.querySelector('.shows');
//             container.insertAdjacentHTML('beforeend', getTemplateCards)
           
//             }
//         });
//     }
// getMovie();

// const getTemplateCards = (data) => {
//     data.forEach((cards) => {        
//         const card = `<div class="film" style="background-image: url(${cards.image});">
//                 <div class="hover">
//                     <div class="film__flex">                                
//                         <img class="film__info--toggle" src="./img/Hover/Toggle.png" alt="Toggle">
//                         <div class="film__info--rating">${cards.rating}</div>
//                         <div class="film__info--year">${cards.year}</div>
//                     </div>
//                     <div class="film__name"><p>${cards.title}</p></div>
//                     <div class="film__description"><p>${cards.description}</p></div>
//                     <div class="film__button">
//                         <a href="${cards.trailer}" class="film__button--watch">WATCH</a>
//                         <img src="./img/Hover/Icon_watch.png" class="film__button--text" alt="">
//                     </div>
//                 </div>
//             </div>`;
//     })
    
// }
// console.log(getTemplateCards)

// const getTemplate = (type) => {
//     const foundMovie = collectionOfTypes.find((movie) => movie.type = type)
//     // console.log(foundMovie.moviesArray); 
//         const [{moviesArray}] = collectionOfTypes;
//         // console.log(moviesArray);
//         if (foundMovie) return (
//             moviesArray.map((sortMovie) => { 
//             `<div class="film" style="background-image: url(${sortMovie.image});">
//                 <div class="hover">
//                     <div class="film__flex">                                
//                         <img class="film__info--toggle" src="./img/Hover/Toggle.png" alt="Toggle">
//                         <div class="film__info--rating">${sortMovie.rating}</div>
//                         <div class="film__info--year">${sortMovie.year}</div>
//                     </div>
//                     <div class="film__name"><p>${sortMovie.title}</p></div>
//                     <div class="film__description"><p>${sortMovie.description}</p></div>
//                     <div class="film__button">
//                         <a href="${sortMovie.trailer}" class="film__button--watch">WATCH</a>
//                         <img src="./img/Hover/Icon_watch.png" class="film__button--text" alt="">
//                     </div>
//                 </div>
//             </div>`
//             return sortMovie;
//         })
//     );
   
// }
// getTemplate('show')
// console.log(getTemplate());

// const setItems = ()=>{
//     const container = document.querySelector('.show');

//     collectionOfTypes.forEach((show) => {
//         container.insertAdjacentHTML('beforeend', getTemplate(show));
//     })

// }
// setItems();

// const setItems = ()=>{
    
//     allTypes.forEach((type) =>{
        
//         // console.log(type);
//         if(type === 'show') {
//         const container = document.querySelector('.show');
//         // console.log(container);
        
//         container.insertAdjacentHTML('beforeend', getTemplateCards);
        
//         }
//     })
// }
// setItems();