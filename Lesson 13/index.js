import {data} from './data.js';
///1


///2
document.getElementById("burger").addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("open")
});


///3
const form = document.querySelector('.sign-up__wrapper');
const modalToggleBtns = document.querySelectorAll('.toggle__modal--btn');
modalToggleBtns.forEach((btn) =>
{
    btn.addEventListener('click', () => {
        form.classList.toggle('open');
        })
})



///4
const links = document.querySelectorAll('.menu__link');
const handleLink = (e) => {
    const { currentTarget } = e;
    const href = currentTarget.getAttribute("href");
    if(!href || !href.startsWith('#') || href.length < 2) return;
        e.preventDefault();
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
       i = i > 2 ? 1 : i + 1;
        sliderBackground.style.backgroundImage = `url(./img/slider_image${i}.png`;
        sliderText.style.backgroundImage = `url(./img/slider_image${i}_${i}.png`;
    }, 4000);


///6
const typeNames = data.map(( {type} ) => type);

const allTypes = [... new Set(typeNames)];

const getItemTemplate = (item) => {
    return `<div class="film" style="background-image: url(${item.image});">
                <div class="hover">
                    <div class="film__flex">                                
                        <img class="film__info--toggle" src="./img/Hover/Toggle.png" alt="Toggle">
                        <div class="film__info--rating">${item.rating}</div>
                        <div class="film__info--year">${item.year}</div>
                    </div>
                    <div class="film__name">${item.title}</div>
                    <div class="film__description">${item.description}</div>
                    <div class="film__button">
                        <div><img src="./img/Hover/Icon_watch.png" class="film__button--text" alt=""></div>
                        <div><a href="${item.trailer}" class="film__button--watch">WATCH</a></div>
                    </div>
                </div>
            </div>`;
}   

const setItemTemplate = (type) => {
    data.forEach((card) => {
        if (card.type === type) {
        const element = document.querySelector(`.${type}`);
        if (!element) return;
        element.insertAdjacentHTML('beforeend', getItemTemplate(card));
        }
    })
}

allTypes.forEach(setItemTemplate);


//7

const handleQuestion =  ( {currentTarget: target} ) => {
    
    const parent = target.parentElement;
    const answerText = parent.childNodes[3];
    const answerTextHeight = answerText.lastChild.clientHeight;
    parent.classList.toggle('open') ? document.querySelector('.open .faq__answer').style.height = answerTextHeight + 'px' : answerText.style.height = 0;
}

const questions = document.querySelectorAll('.question');

questions.forEach((event) => {    
    event.addEventListener('click', handleQuestion);
})

