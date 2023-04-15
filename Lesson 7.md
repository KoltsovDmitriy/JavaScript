#Lesson 6.
  Домашнее задание:
  ##1. Верстка страницы signup + фиксы по предыдущей (все должно лежать в репозитории HBO)
  https://www.figma.com/file/rvBRnugexZGgjSv7vqvqNN/HBO?node-id=0-1&t=wLgx7uB4GotR541q-0
  ##2. Все, что написано на картинке + инфу из объекта occupation выводим в html (создаем новый репозиторий JavaScript)
  
#Lesson 7.
  Задачи:
  ##1. Создать массив объектов, где объект имеет следующую структуру:
  id: Something unique
  title: String,
  year: Number, 
  actors: [String, String, String],
  description: String,
  details: {
     genre: String,
     reviews: [{ username: String, content: String, score: Number }]
  }
  Минимум будет 3 объекта в массиве.

  ##2. Пробежаться циклом по массиву
  ##3. На каждой итерации в консоль выводится строка:

  The 1997 film “Escape from Shawshank”, which tells the story of “Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.”
  This movie starred DiCaprio, van Damme and etc. It was rated by 23 users, with a total rating of 9. Register to watch this drama.

  ##4. Создать функцию, которая будет принимать в себя массив с фильмами и год, а отдавать она должна массив только с теми фильмами, которые подходят

  For example, getMovieByYear(movies, 2019) -> [{ …, year: 2019 }, { …, year: 2020 }]
  + то же самое, но поиск по заголовку.
  
 ##UPD: как вы заметили в строке, которую нужно вывести в консоль есть такая часть " It was rated by 23 users, with a total rating of 9. "
  соответственно, эта инфа должна браться из свойства reviews
  чтобы было так: если я добавлю в массив reviews еще элементы, то у меня и должна в зависимости от этого меняться строка и средний рейтинг


  ##ATTENTION: доделываем баги в предыдущих домашках тоже
