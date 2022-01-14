'use strict';

// Создание регулярного выражения
// new RegExp('pattern', 'flags'); - устарело
// /pattern/f - актуально

// const ans = prompt('Введите');

// const reg = /\d/ig;
// flags i - вне зависимости от регистра(search), g - найти несколько вхождений(match), m - многострочный режим с переносом.

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("Password");
// console.log(pass.replace(/\./g, "*")); ., /, ^, & etc.
// console.log('12-34-56'.replace(/-/g, ':'));
// console.log(reg.test(ans));

// \d - цифры , \w - буквы , \s - пробелы

const str = "My name is R2D2";

console.log(str.match(/\W/ig));