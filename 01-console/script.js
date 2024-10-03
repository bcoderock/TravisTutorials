console.log(100);

console.log('Heloo World');
const x = 100;
console.log (20,'hello',true);
console.warn('warning!');
console.error('alert');

console.table({name:'Anto',email:'anto@gmail.com'}); 

console.group('simpler');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding : 10px ;background-color:green;color:purple';

console.log('%cHello World',styles);
