///////////////////// USER INPUT LESSON//////////////////////////////////
// easy way with window promt
/* let username = window.prompt("what's your name?");
console.log(username); */

// difficult way html textbox
/* document.getElementById('myButton').onclick = function () {
    username = document.getElementById('myText').value;
    console.log(username);
    document.getElementById('myLabel').innerHTML = 'hello ' + username;
} */
////////////////////// END OF USER INPUT LESSON

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
///////////////////// END OF TYPE CONVERSION LESSON

////////////////// CONST LESSON /////////////////////////////////////////
//const naming convention should be all upper case.
/* const PI = 3.14159
let radius;
let circumference;

radius = window.prompt('enter the radius of a circle');
radius = Number(radius);

circumference = 2 * PI * radius;
console.log('the circumference is:', circumference) */;
/////////////// END OF CONST LESSON