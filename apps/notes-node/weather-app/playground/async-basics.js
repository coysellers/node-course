console.log('Starting App');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Second set timeout works');
}, 0);

console.log('Finishing Up');