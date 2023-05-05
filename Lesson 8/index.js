//Russian language.

const getWord = (number,arrayWords) => {
    const division = number % 10;
    const divisionTwo = number % 100;
    
    if (division == 1 && divisionTwo != 11) {
        console.log(number, arrayWords[0]);
    }
    else if ((division == 2 && divisionTwo != 12) || (division == 3 && divisionTwo != 13) || (division == 4 && divisionTwo != 14)) {
        console.log(number, arrayWords[1]);       
    }
    else
        console.log(number, arrayWords[2]);
};

getWord(136, ['фильм', 'фильма', 'фильмов']);
getWord(1121, ['предмет', 'предмета', 'предметов']);


//English language. Logic from https://skysmart.ru/articles/english/mnozhestvennoe-chislo-sushestvitelnyh-v-anglijskom-yazyke

const getWordEng= (number, string) => {
    const word = string.toLowerCase();
    const endingOneLetter = word.slice(word.length - 1);
    const endingTwoLetter = word.slice(word.length - 2);
    const exceptions = 'man, men, person, people, woman, women, mouse, mice, foot, feet, child, children, tooth, teeth, goose, geese, ox, oxen, bacterium, bacteria, hypothesis, hypotheses, phenomenon, phenomena, stimulus, stimuli, fish, fish, fruit, fruit, species, species, deer, deer, sheep, sheep, water, water, dirt, dirt, cream,cream, love, love, information, information';
    const exceptionsArray = exceptions.split(', ');
   
    if (number == 1) {
        console.log(number, word);
    }
    else if (exceptionsArray.includes(word)) {
        console.log(number, exceptionsArray[exceptionsArray.indexOf(word)+1]);
    }
    else if (['s', 'x', 'z', 'o'].includes(endingOneLetter) || ['sh', 'ch', 'ss'].includes(endingTwoLetter)) {
        console.log(number, word +'es');
    } 
    else if (['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'].includes(endingTwoLetter[0]) && (endingOneLetter == 'y')) {
        console.log(number, word.slice(0, -1) +'ies');       
    }
    else if (endingOneLetter == 'f') {
        console.log(number, word.slice(0, -1) +'ves');
    }
    else if (endingTwoLetter == 'fe') {
        console.log(number, word.slice(0, -2) +'ves');
    }
    else
    console.log(number, word + 's');
}
getWordEng(2, 'cave');


//
import {movieCollection} from './base.js';

const filterShows = (movie, filterCriteria) => {

    const resultFilm = movie.filter((movie) => { 

        const totalScore = movie.details.reviews.reduce((a, b) => a + b.score, 0) / movie.details.reviews.length;
        
        if (movie.year >= filterCriteria.year && 
            movie.title.toLowerCase().includes(filterCriteria.title) && 
            totalScore >= filterCriteria.rating) {  
        return true;
        }
    });     
    return resultFilm;
}

const filterCriteria = {year: 2013, title: 'elb', rating: 5};
console.log(filterShows(movieCollection, filterCriteria));


//Promt

const result = prompt('Please enter a number from 0 to 100');

if (result < 0 || result > 100) {
    console.log('The number must be from 0 to 100');
} else if (result <= 40) {
    console.log('You failed the exam, try again');
} else if (result <= 70) {
    console.log('You passed the exam, but you have to attend additional classes');
} else if (result <= 100) {
    console.log('You passed the exam, get some rest before the next one');
} else if (isNaN(result)) {
    console.log('It must be a number');
}


//Polindrom
//Way 1
const polindrom = (string) => {
    let reversedString = '';

    for (let i = string.length - 1; i >= 0; i--){
        reversedString += string[i];
    };
    
    return string.toLowerCase() === reversedString.toLowerCase();
};
console.log(polindrom('Lol'));

//Way 2
const polindromAnalog = (string) =>{
    const reversedString = string.split('').reverse().join('');
    return string.toLowerCase() === reversedString.toLowerCase();
}
console.log(polindromAnalog('LoL 123 321 lol'));
