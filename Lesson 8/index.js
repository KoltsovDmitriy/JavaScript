// Задача: изменять окончание слова в зависимости от количества.
//Русккие буквы.

const getWord = (number,arrayWords) => {
    const division = number % 10;

    if (division == 1 && number != 11){
        console.log(number, arrayWords[0]);
    }
    else
    if((division == 2 && number != 12) || (division == 3 && number != 13) || (division == 4 && number != 14)){
        console.log(number, arrayWords[1]);       
    }
    else
        console.log(number, arrayWords[2]);
};

getWord(72, ['фильм', 'фильма', 'фильмов']);
getWord(736, ['предмет', 'предмета', 'предметов']);


//Английский язык. Алгорить взял https://skysmart.ru/articles/english/mnozhestvennoe-chislo-sushestvitelnyh-v-anglijskom-yazyke

const getWordEng= (number,word) => {

}
getWordEng(5, 'apple')











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
