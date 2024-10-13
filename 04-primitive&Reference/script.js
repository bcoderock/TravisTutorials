//This value are stored  on the stalk
const name = 'Beano';
const age =  49;

//Reference values are stored in the heap

const person ={
    name:'Bradley',
    age :500
}
let newName = name;
newName='Bernice';

let newPerson=person;
newPerson.name ='Brad';

console.log(name,newName);
console.log(person,newPerson)