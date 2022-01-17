'use strict';

console.log(1);

setTimeout(() => {
	console.log('timeout 2s');
}, 2000);

setTimeout(() => {
	console.log('timeout 4s');
}, 4000);

console.log(2);