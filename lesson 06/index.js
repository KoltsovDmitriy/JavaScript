const personInfo = {
    fullName: "Dmitriy",
    age: 36,
    anyInfoAboutYourPlace: {
        city: "Gatchina",
        street: "Karla Marksa",
        numberOfHome: 35,
    },
    hasCats: false,
    hobbies: ['travel',  'Programming', 'running'],
    greeting() {
        return 'Hey, my name is ' + personInfo.fullName;
    },   
};
console.log(personInfo.greeting());

const personInfoNew = { ...personInfo};
personInfoNew.occupation = {
    height: 186,
    hair: 'black',
    car: true,
};

console.log(personInfoNew);

const text = document.querySelector('#element');
element.innerHTML = personInfoNew.occupation.hair;
