console.log('Start app');

setTimeout(() => {
	console.log('Inside callback');
}, 2000);

setTimeout(() => {
	console.log('second timeout');
}, 0);

console.log('Finishing up');