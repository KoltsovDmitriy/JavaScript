const newObj = {
    fullName: "Dmitriy",
    age: 36,
    anyInfoAboutYourplace: {
        city: "Gatchina",
        street: "Karla Marksa",
        numberOfHome: 35,
    },
    hasCats: false,
    hobbies: ['travel',  'Programming', 'running'],
    greeting() {
        return 'Hey, my name is ' + newObj.fullName;
    },   
};
console.log(newObj.greeting());

const copyNewObj = { ...newObj};
copyNewObj.occupation = {
    height: 186,
    hair: 'black',
    havacar: true,
};

console.log(copyNewObj);

const text = document.querySelector('#elem');
elem.innerHTML = copyNewObj.occupation.hair;