//Russian language.

const getWord = (number,arrayWords) => {
    const division = number % 10;

    if (division == 1 && number != 11) {
        console.log(number, arrayWords[0]);
    }
    else
    if((division == 2 && number != 12) || (division == 3 && number != 13) || (division == 4 && number != 14)) {
        console.log(number, arrayWords[1]);       
    }
    else
        console.log(number, arrayWords[2]);
};

getWord(76, ['фильм', 'фильма', 'фильмов']);
getWord(736, ['предмет', 'предмета', 'предметов']);


//English language. Logic from https://skysmart.ru/articles/english/mnozhestvennoe-chislo-sushestvitelnyh-v-anglijskom-yazyke

const getWordEng= (number, string) => {
    const word = string.toLowerCase();
    const endingOneLetter = word.slice(word.length - 1);
    const endingTwoLetter = word.slice(word.length - 2);
    const exceptions = 'man, men, person, people, woman, women, mouse, mice, foot, feet, child, children, tooth, teeth, goose, geese, ox, oxen, bacterium, bacteria, hypothesis, hypotheses, phenomenon, phenomena, stimulus, stimuli, fish, fish, fruit, fruit, species, species, deer, deer, sheep, sheep, water, water, dirt, dirt, cream,cream, love, love, information, information';
    const exceptionsArray = exceptions.split(', ');
   
    if (number == 1){
        console.log(number, word);
    }
    else if(['s', 'x', 'z', 'o'].includes(endingOneLetter) || ['sh', 'ch', 'ss'].includes(endingTwoLetter)) {
        console.log(number, word +'es');
    } 
    else if (['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'].includes(endingTwoLetter[0]) && (endingOneLetter == 'y')) {
        console.log(number, word.slice(0, -1) +'ies');       
    }
    
    else if(endingOneLetter == 'f'){
        console.log(number, word.slice(0, -1) +'ves');
    }
    else if(endingTwoLetter == 'fe')
    console.log(number, word.slice(0, -2) +'ves');
    else if(exceptionsArray.includes(word)){
        console.log(number, exceptionsArray[exceptionsArray.indexOf(word)+1]);
    }
    else
    console.log(number, word + 's')
   
    
}
getWordEng(2, 'cat')











///////////////////Polindrom///////////////////////////
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
