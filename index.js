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
////////////////////// END OF USER INPUT LESSON /////////////////////////


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


////////////// HYPOTENUSE CALCULATOR PRACTICE PROGRAM ///////////////////
/* let a;
let b;
let c; */

/* a = window.prompt('Enter side A');
a = Number(a);

b = window.prompt('Enter side B');
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log('Side C:', c); */

// advance version of the hypotenuse calculator //
/* document.getElementById('submitButton').onclick = function () {
    a = document.getElementById('aTextBox').value;
    a = Number(a);

    b = document.getElementById('bTextBox').value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById('cLabel').innerHTML = 'Side C: ' + c;
} */
//////////// END OF HYPOTENUSE CALCULATOR PRACTICE PROGRAM //////////////


/////////////////////////// COUNTER PROGRAM /////////////////////////////
/* let count = 0;

document.getElementById('decreaseBtn').onclick = function () {
    count-=1;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('resetBtn').onclick = function () {
    count=0;
    document.getElementById('countLabel').innerHTML = count;
}

document.getElementById('increaseBtn').onclick = function () {
    count+=1;
    document.getElementById('countLabel').innerHTML = count;
} */
//////////////////////// END OF COUNTER PROGRAM //////////////////////// 