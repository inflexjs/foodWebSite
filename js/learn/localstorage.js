'use strict';

// localStorage.setItem('secretKey', 'aMg81Na0xl_@#'); устанавливает ключ:значение

// console.log(localStorage.getItem('secretKey')); получает ключ:значение

// localStorage.removeItem('secretKey'); удаляет ключ:значение

// localStorage.setItem('secretKey2', 'aMg81228Na0xl_@#');

// localStorage.clear(); очищает все ключ:значение

const facebook = document.querySelector("#fb");

if (localStorage.getItem('facebook')) {
	facebook.textContent = "YouTube";
}

facebook.addEventListener("click", (e) => {
	e.preventDefault();

	if (localStorage.getItem('facebook')) {
		facebook.textContent = "YouTube";
	} else {
		localStorage.setItem('facebook', 'YouTube');
	}
});