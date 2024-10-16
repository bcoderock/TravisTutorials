//Strings

let x;
let y;//initialization
var a;

const name = 'Bernice';//Set a variable
const name2 ='Jason';

const age = 30 ;
const age2 = 34;

x ='My name is ' + name +' I am ' + age +' years old.';//Concatination

//Template Literals using backTicks `
y =`My name is ${name2} and I am ${age2} years`;//Remember to use the backticks

//String Properties and Methods
 let s ='Hello World'
 
 z = s.length;
 
 //Access value by key
 z = s[3];

 a = s._proto_;

 a = s.toUpperCase();
 a = s.toLowerCase();

 a = s.charAt(5);

 a =s.indexOf('d');

 a=s.substring(0,4);

 a= s.slice(2,5);

 s= '        Hello World';

 a= s.trim();

 a= s.replace('World','Awesome');

 a= s.includes ('He','Awesome');

 a = s.valueOf();

 a = s.trim().split(' ');
 
 console.log(x);
console.log(y);
console.log(z);
console.log(a);
