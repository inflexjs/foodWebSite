'use strict';

try {
	console.log(gun);
} catch(error) {
	console.log('Not ok...');
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
} finally {
	console.log('Выполнилось в любом случае');
}

console.log('working');