'use strict';

// filter - фильтрует массив

// const names = ['Ivan', 'Vitaly', 'Alexandr', 'Serafim', 'Anna', 'Rick'];

// const shortNames = names.filter(name => {
// 	return name.length < 5;
// });
// console.log(shortNames);





// map - перебирает массив

// const answers = ['iVan', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLocaleLowerCase());
// console.log(result);





// every/some - true/false [every: все; some: хотя бы 1]

// const some = [4, 'qwq', 'sadf'],
// 	every = [5, 10, 28];

// console.log(some.some(item => typeof (item) === 'number'));
// console.log(every.every(item => typeof (item) === 'number'));





// reduce - собирает массив в одно единое целое. 
// sum - изначально равно 0; currnet - текущее число по очереди из массива
// Третьим значением в reduce(1, 2, 3) можно передать начальное значение

// const arrNumbers = [4, 5, 1, 3, 6, 8],
// 	arrStrings = ['lime', 'apple', 'pineapple'];

// // 0 ---> 4
// // 4 ---> 5
// // 9 ---> 1
// // 10 ---> 3
// // 13 ---> 6
// // 19 ---> 8
// // 27

// const newNumbers = arrNumbers.reduce((sum, current) => sum + current, 3);
// const newStrings = arrStrings.reduce((sum, current) => `${sum}, ${current}`);

// console.log(newNumbers);
// console.log(newStrings);





// entries - помогает найти нужный ключ по подходящему значению

// const obj = {
// 	ivan: 'persone',
// 	ann: 'persone',
// 	dog: 'animal',
// 	cat: 'animal',
// };

// const newObj = Object.entries(obj)
// 	.filter(item => item[1] === 'persone')
// 	.map(item => item[0]);

// console.log(newObj);