////////////////////// TYPE CONVERSION LESSON////////////////////////////
/* let age = window.prompt('how old are you?');

console.log(typeof age);
age = Number(age);
age += 1;

console.log('happy birthday! you are', age, 'years old'); */

/* let x;
let y;
let z;

x = Number('3.14');
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */
///////////////////// END OF TYPE CONVERSION LESSON /////////////////////


////////////////// CONST LESSON /////////////////////////////////////////
//const naming convention should be all upper case.
/* const PI = 3.14159
let radius;
let circumference;

radius = window.prompt('enter the radius of a circle');
radius = Number(radius);

circumference = 2 * PI * radius;
console.log('the circumference is:', circumference) */;
/////////////// END OF CONST LESSON /////////////////////////////////////


//////////////////// MATH METHODS LESSON ////////////////////////////////
/* let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x, 2); //to the power of 2
x = Math.sqrt(x); //square root
x = Math.abs(x); //absolute value
maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);
x = Math.PI; // built in constant of math

console.log(x); */
///////////////////////// END OF MATH METHODS LESSON ////////////////////


//////////////////////////// STRING SLICING /////////////////////////////
// slice() extracts a section of a string and returns it as a new string without modifying th original string.

/* let fullName = "aristotle lavayna";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName); */
///////////////////////// END OF STRING SLICING /////////////////////////


////////////////////////// IF STATEMENT /////////////////////////////////
/* let age = 21;

if (age >= 18) {
    console.log('you are an adult!');
} else if (age < 0) {
    console.log('you havent been born yet');
} else if (age >= 65) {
    console.log('you are a senior citizen!');
}
else {
    console.log('you are a child!');
}

let online = true;

if (online) {
    console.log('you are online!');
} else {
    console.log('you are offline!');
} */
///////////////////////// END OF IF STATEMENT ////////////////////////// 