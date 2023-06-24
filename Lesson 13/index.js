import {data} from './data.js';
///1


///2
document.getElementById("burger").addEventListener("click", () =>
{
    document.querySelector(".header").classList.toggle("open")
});


///3
const form = document.querySelector('.sign-up__wrapper');

const openCloseForms = (className, condition) => {
    document.querySelector(className).addEventListener('click', () => {
    form.classList.toggle('open', condition);
    })   
}

openCloseForms('.header__link--btn', true);
openCloseForms('.cross', false);


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
const typeNames = data.map((type) => {
    return type.type
});
const allTypes = [... new Set(typeNames.flat())];

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
        element.insertAdjacentHTML('beforeend', getItemTemplate(card));
        }
    })
}

const setItems = allTypes.forEach((type) =>{
    setItemTemplate(type);
})


//7
const openDiv = document.querySelectorAll('.question');
openDiv.forEach((event) => {
    event.addEventListener('click', () => {
        const parent = event.parentNode;
        (parent.classList.contains('open')) ? (parent.classList.remove('open')) : 
        (document.querySelectorAll('.faq').forEach((child) => {child.classList.remove('open')}),
        parent.classList.add('open'))
    })
})




// Дичь
// document.getElementById("question").addEventListener("click", () =>
// {
//     document.querySelector(".faq__answer").classList.toggle("open");
//     document.querySelector(".faq").classList.toggle("open");
// });
// const div = document.querySelectorAll('.question');
// div.forEach((divItem) => {
//     divItem.addEventListener("click", (e) => {
//         document.querySelectorAll(".faq__answer, .faq").forEach((className) => className.classList.toggle('open'))});
// })
// const div = document.querySelector('.question');
// div.addEventListener('click', (e) => {
//     document.querySelector(".faq__answer").classList.toggle("open");
// })
// const btnQuestion = document.querySelectorAll('.question');
// const divAnswer = document.querySelectorAll('.faq__answer');
// btnQuestion.forEach((link)=>{
//     link.addEventListener('click',() =>{
//         divAnswer.forEach((answer)=>{
//             const handler = () =>{
//                 answer.classList.remove('faq-enter-active');
//                 answer.removeEventListener('transitionend', handler);
//             }
//             answer.style.display = 'block';
//             answer.classList.add('faq-enter');
//             setTimeout(() => {
//                 answer.classList.add('faq-enter-active');
//                 answer.classList.remove('faq-enter');
//             }, 200);
//             answer.addEventListener('transitionend', handler)
//         })
//     })
// })
