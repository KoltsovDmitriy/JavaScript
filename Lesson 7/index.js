const movieCollection = [
    {
        id: 'film',
        title: 'Nobody',
        year: 2021,
        actors: ['Bob Odenkirk', 'Christopher Lloyd', 'Aleksey Serebryakov'],
        description: 'A docile family man slowly reveals his true character after his house gets burgled by two petty thieves, which, coincidentally, leads him into a bloody war with a Russian crime boss.',
        details:{
            genre: 'Action',
            reviews:[
                {userName:'r96sk', content:'An absolute blast!', score: 10},
                {userName:'Offworld_Colony', content:'When is a movie not a movie? How do you rate a movie like this anyway?', score: 8}
            ]
        } 
   
    },
    {
        id: 'film',
        title: 'Hardcore Henry',
        year: 2015,
        actors: ['Sharlto Copley', 'Tim Roth', 'Haley Bennett', 'Danila Kozlovskiy'],
        description: 'Henry is resurrected from death with no memory, and he must save his wife from a telekinetic warlord with a plan to bio-engineer soldiers.',
        details:{
            genre: 'Action',
            reviews:[
                {userName:'Offworld_Colony', content:'When is a movie not a movie? How do you rate a movie like this anyway?', score: 8},
                {userName:'r96sk', content:'An absolute blast!', score: 10}
            ]
        } 
   
    },
    {
        id: 'clip',
        title: 'Biting Elbows: Bad Motherfucker',
        year: 2013,
        actors: ['Oleg Poddubnyy', 'Andrei Dementiev', 'Artur Migranov', 'Alexei Zamaraev'],
        description: 'A man that is captured by an agency tries to escape and get a teleportation device.',
        details:{
            genre: 'music clip',
            reviews:[
                {userName:'Oleg Poddubnyy', content:'Very well made FPS action short', score: 6},
                {userName:'Oleg', content:'Gooood', score: 9},
                {userName:'Colony', content:'When is a movie not a movie?', score: 9}
            ]
        } 
   
    },
]

for(let index = 0; index <= movieCollection.length - 1; index++){
    const numberOfUsers = movieCollection[index].details.reviews.length;
    const initialValue = 0;
    const sumOfScores = movieCollection[index].details.reviews.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.score;
    }, initialValue);
    const numberOfScores = sumOfScores / numberOfUsers;
    // console.log(sumOfScores);
    // console.log(numberOfScores);
    console.log(`The ${movieCollection[index].year} ${movieCollection[index].details.genre} “${movieCollection[index].title}”, which tells the story of “${movieCollection[index].description}” This movie starred ${movieCollection[index].actors} and etc. It was rated by ${numberOfUsers} users, with a total rating of ${numberOfScores}. Register to watch this ${movieCollection[index].details.genre}.`)
}

 function getMovieByYear(movie, year){
    const filteredMovies = movie.filter((movie) =>{
        return movie.year === year;
    }) 
    return filteredMovies; 
 }
 console.log(getMovieByYear(movieCollection, 2013));

 function getMovieByTitle(movie, title){
    const filteredMovies = movie.filter((movie) =>{
        return movie.title.includes(title);
    }) 
    return filteredMovies; 
 }
 console.log(getMovieByTitle(movieCollection, 'Nobody'));
