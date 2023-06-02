## Lesson 9.
### Домашнее задание:
#### 1. Создать новый массив, добавив для каждого актера свойство age и посчитать его, учитывая текущий год (найти способ, как получать текущий год с помощью JS)

For example, [
  {
    ...,
    actors: [
      ...,
      {
        name: "Chris Pratt",
        birthyear: 1979,
        country: "USA",
        age: 44
      }
    ]
  }
]

#### 2. Создать массив объектов: один объект - это один жанр фильмов, имеющий структуру:
[
  {
    name: "Thriller",
    movies: ["Plane", "Sharper"]
  },
  {
    name: "Adventure",
    movies: ["Guardians of the Galaxy Vol. 3", "Plane"]
  }
]

и т.п.

!Должны быть все жанры, которые есть в массиве с фильмами: thriller, drama, comedy, adventure, crime etc.

#### 3. Верстка https://www.figma.com/file/HzaZ6wPbGOesItfapGBJ4H/Untitled?type=design&node-id=0-1&t=PXZwt1h137UwOf2a-0

Создать функцию, которая принимает в себя id фильма из массива

getMovie(3)

const getMovie = (id) => { ... }

В зависимости от ID заполнять страницу данными из объекта фильма

Все картинки должны отображаться

О рейтинге:

0 - 5 (красный)
5 - 8 (желтый)
8 - 10 (зеленый)

#### 4. При наведении на рейтинг - открывается окошко, где юзер может оценить фильм
Форма состоит из 2 элементов: input and submit button

В инпут он вводит свой рейтинг, нажимает на кнопку "Rate" и он выводится в блоке с рейтингом (средний)

For example, если рейтинг был 8, а юзер оценил на 10, то вывести срейдний 9.

## Lesson 8.
### Домашнее задание:
#### 1. Верстка страницы + везде добавить футер. Добавить пункт меню shows и он будет вести на новую страницу
#### 2. Задача: изменять окончание слова в зависимости от количества:<br> 
For example, 2 фильма, 5 фильмов, 1 фильм + 1 movie and 2 movies<br>

getWord(2, ['фильм', "фильма", 'фильмов']) -> 2 фильма<br>
getWord(5, ['предмет', "предмета", 'предметов']) -> 5 предметов<br>

#### 3. Создать ОДНУ функцию, которая принимает объект критериев (год, название и рейтинг),  a возвращать будет массив фильмов/сериалов по трем критериям:<br>

filterByYear + filterByTitle = one function<br>

For example, filterShows(shows, filterCriteria);<br>

#### 4.  Задача: через prompt юзер вводить число от 0 до 100 (включительно).<br>
Если число в промежутке [0 - 40], отдаем строку “You failed the exam, try again”<br>
Если число в промежутке [41 - 70], отдаем строку “You passed the exam, but you have to attend additional classes”.<br>
Если число в промежутке [71 - 100], отдаем строку “You passed the exam, get some rest before the next one”.<br>
Если число не входит ни в один промежуток, то отдаем “The number must be from 0 to 100”<br>
Если это не число, то отдаем “It must be a number”<br>

#### * Создайте функцию, которая принимает строку и возвращает true, если строка является палиндромом (читается одинаково вперед и назад), в противном случае false.


## Lesson 7. 
### Домашнее задание:
#### 1. Создать массив объектов, где объект имеет следующую структуру: 
id: Something unique<br>
title: String,<br>
year: Number, <br>
actors: [String, String, String],<br>
description: String,<br>
details: {<br>
   genre: String,<br>
   reviews: [{ username: String, content: String, score: Number }]<br>
}<br>
Минимум будет 3 объекта в массиве.

#### 2. Пробежаться циклом по массиву. 
#### 3. На каждой итерации в консоль выводится строка:

The 1997 film “Escape from Shawshank”, which tells the story of “Over the course of several years, two convicts form a friendship, seeking consolation and, eventually,
redemption through basic compassion.” This movie starred DiCaprio, van Damme and etc. It was rated by 23 users, with a total rating of 9. Register to watch this drama.

#### 4. Создать функцию, которая будет принимать в себя массив с фильмами и год, а отдавать она должна массив только с теми фильмами, которые подходят.

  For example, getMovieByYear(movies, 2019) -> [{ …, year: 2019 }, { …, year: 2020 }]

  то же самое, но поиск по заголовку.
#### UPD: как вы заметили в строке, которую нужно вывести в консоль есть такая часть " It was rated by 23 users, with a total rating of 9. " соответственно, эта инфа должна браться из свойства reviews чтобы было так: если я добавлю в массив reviews еще элементы, то у меня и должна в зависимости от этого меняться строка и средний рейтинг.

#### ATTENTION: доделываем баги в предыдущих домашках тоже.


## Lesson 6. 
### Домашнее задание:
#### 1. Верстка страницы signup + фиксы по предыдущей (все должно лежать в репозитории HBO).
  https://www.figma.com/file/rvBRnugexZGgjSv7vqvqNN/HBO?node-id=0-1&t=wLgx7uB4GotR541q-0 
#### 2. Все, что написано на картинке + инфу из объекта occupation выводим в html (создаем новый репозиторий JavaScript).
