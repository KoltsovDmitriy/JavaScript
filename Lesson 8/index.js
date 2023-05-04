






















///////////////////Polindrom///////////////////////////
//Way 1
const polindrom = (string) => {
    let reversedString = '';

    for (let i = string.length - 1; i >= 0; i--){
        reversedString += string[i];
    };
    console.log(reversedString);
    return string.toLowerCase() === reversedString.toLowerCase();
};
console.log(polindrom('Lol'));

//Way 2
const polindromAnalog = (string) =>{
    const reversedString = string.split('').reverse().join('');
    console.log(reversedString);
    return string.toLowerCase() === reversedString.toLowerCase();
}
console.log(polindromAnalog('LoL 123 321 lol'));
