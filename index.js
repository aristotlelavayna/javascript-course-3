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


////////////////////// SWITCH  STATEMENT LESSON /////////////////////////
//switch is a statement that examines a value for a match against many case clauses. more efficient than many "else if" statements.

/* let rating = "F";

switch (rating) {
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did ok!");
        break;
    case "D":
        console.log("You passed ... barely!");
        break;
    case "F":
        console.log("You FAILED!");
        break;
    default:
        console.log("is not a letter grade");
        break;
}

let grade = 60;
switch (true) {
    case grade >= 90:
        console.log("You did great");
        break;
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 60:
        console.log("You passed ... barely!");
        break;    
    default:
        console.log("You FAILED!");
        break;
} */
/////////////////// END OF SWITCH STATEMENT LESSON //////////////////////


//////////////////////// && || OPERATORS LESSON /////////////////////////
// && both conditions must be true.
// || either condtion can be true.

// && OPERATOR
/* let temp = 15;
let sunny = false; // boolean value

if (temp > 0 && temp < 30 && sunny) {
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
}

// || OPERATOR
let temperature = 15

if (temperature <= 0 || temperature >= 30) {
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
} */
////////////////// END OF && || OPERATORS LESSON ///////////////////////


////////////////////// ! NOT LOGICAL OPERATOR ///////////////////////////
// typically used to reverse a condition's boolean value.
// true -> false, false -> true

/* let temp = 15;
let sunny = true;

if (!(temp > 0)) {
    console.log("It's cold outside");
} else {
    console.log("It's warm outside");
}

if (!sunny) {
    console.log("It's cloudy outside");
} else {
    console.log("It's sunny outside");
} */
//////////////////// END OF ! NOT LOGICAL OPERATOR //////////////////////


///////////////////////// WHILE LOOPS LESSON ////////////////////////////
//repeat some code while some condition is true potentially infinite.

/* let userName = "";

while (userName == "" || userName == null) {
    userName = window.prompt("Enter your name.");
}

alert(`Hello ${userName}!`) //changed from console.log */
////////////////////// END OF WHILE LOOPS LESSON ////////////////////////


//////////////////////// DO WHILE LOOPS LESSON //////////////////////////
// do something, then check the condition, repeat if condition is true.

/* let userName;

 do {
    userName = window.prompt("Enter your name.");
} while (userName == "")

console.log("Hello", userName); */
///////////////////// END OF DO WHILE LOOPS LESSON //////////////////////


/////////////////////////// FOR LOOPS LESSON ////////////////////////////
// for loop = repeat some code a certain amount of time.

/* for (let i = 1; i <= 10; i+=1) {
    console.log(i);
}

// countdown loop
for (let i = 10; i > 0; i-=1) {
    console.log(i);
}
console.log("HAPPY NEW YEAR!"); */
/////////////////////// END OF FOR LOOPS LESSON /////////////////////////


///////////////// BREAK AND CONTINUE STATEMENTS LESSON //////////////////
// break = breaks out of a loop entirely.
// continue = skips an iteration of a loop.

/* for (let i = 1; i <= 20; i+=1) {
    if (i == 13) {
        break; // or continue;
    }
    console.log(i);
} */
////////////// END OF BREAK AND CONTINUE STATEMENTS LESSON //////////////


////////////////////////// FUNCTIONS LESSON /////////////////////////////
// function = define code once and use it many times. to perform some code, call the function name.
/* startProgram();

function startProgram() {
    let userName = "Aris";
    let age = 41;

    happyBirthday(userName, age);
}

function happyBirthday(userName, age) {
    console.log("happy birthday to you!");
    console.log("happy birthday to you!");
    console.log("happy birthday dear", userName);
    console.log("happy birthday to you!");
    console.log("you are", age, "years old!");
} */
//////////////////////// END OF FUNCTION LESSON /////////////////////////


/////////////////////// RETURN STATEMENT LESSON /////////////////////////
//return = returns a value back to the place where you invoked a function.

/* let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

alert(`The area is ${area}`); //changed from console.log
//console.log("The area is:", area);

function getArea(width, height) {
    return width * height;
} */
/////////////////// END OF RETURN STATEMENT LESSON //////////////////////


////////////////////// TERNARY OPERATOR  LESSON /////////////////////////
// ternary operator = shortcut for an 'if/else statement'
// Takes 3 operands: 
// 1. a condition with ?
// 2. expression if True :
// 3. expression if False

// condition ? exprIfTrue : exprIfFalse

/* let adult = checkAge(21);
console.log(adult);

function checkAge(age) {
    return age >= 18 ? true : false;
}

//example 2
checkWinner(false);

function checkWinner(win) {
    win ? console.log('YOU WIN!') : console.log('YOU LOSE!');
} */
//////////////////// END OF TERNARY OPERATOR LESSON /////////////////////