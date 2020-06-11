/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {

    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

	start() {
		do {
			this.count = +prompt('Сколько фильмов вы посмотрели?', '');
		} while (this.count == '' || this.count == null || isNaN(this.count))
	},

	rememberMyFilms() {

		const numberOfQuestions = 2;
		let countOfAnswers = 0;

		do {
			
			const   lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
					ratingFilm = prompt('На сколько оцените его?', '');
			
			if (lastFilm == null || ratingFilm == null)
				continue;
			if (lastFilm.length == 0 || ratingFilm.length == 0)
				continue;
			if (lastFilm.length > 50)
				continue;
					
			this.movies[lastFilm] = ratingFilm;
			countOfAnswers++;
			
		} while (countOfAnswers < numberOfQuestions)
	},

	detectPersonalLevel() {
		if (this.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (this.count <= 30) {
			console.log('Вы классический зритель');
		} else if (this.count > 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		};
	},

	showMyDB() {
		/* 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
		false - выводит в консоль главный объект программы */
		if (!this.privat) {
			console.log('main object: ', this);
		} else {
			console.log('this is private information!');
		}
	},

	writeYourGenres() {
		
		/* 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
		"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
		genres */
		
		/*24_3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
		Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
		при помощи метода forEach вывести в консоль сообщения в таком виде:
		"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
		
		const numberOfQuestions = 3;
		let countOfAnswers = 1;

		do {
			const genre = prompt(`Ваш любимый жанр под номером ${countOfAnswers}`, '');
			if ((genre == null) || (genre == '')) continue;
			this.genres[countOfAnswers-1] = genre;
			countOfAnswers++;
		} while (countOfAnswers <= numberOfQuestions)
			
		this.genres.forEach(function(item, index, arr) {
			console.log(`Любимый жанр #${index+1} - это ${item}`);
		});
		
	},

	toggleVisibleMyDB() {
		/*2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
		переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.*/
		this.privat = !this.privat;
	},

};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();

//personalMovieDB.showMyDB();
//personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB();

//console.log('personalMovieDB: ', personalMovieDB);















