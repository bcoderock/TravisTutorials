//Type Cohersion
let x;

x = 5 +'5';//You get 55 coz its a string and integer CONCATINATION

y= 5 + Number('5');

z = 5 + null ;

a = Number(null);

b = Number(true);

c= Number(false);



console.log(x, typeof x); 
console.log(y, typeof y);
console.log(z, typeof z);
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);


