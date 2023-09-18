//array destructuring, getting items 2 & 4 from array

const fruits = ['apple', 'banana', 'cherry', 'date'];
let b, d;

[ , b, , d] = fruits;
console.log("b: ", b)
console.log("d: ", d)

//destructuring an object
let n;
let age;

const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

[n, age] = [person.name, person.age]
console.log("n: ", n)
console.log("age: ", age)

