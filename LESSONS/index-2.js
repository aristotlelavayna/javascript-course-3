/////////////////////////// ARRAYS LESSON ///////////////////////////////
// array = a variable that can store multiple values.

/* let fruits = ["apple", "orange", "banana"];

fruits.push("lemon"); // add an element.
fruits.pop(); // removes last element.
fruits.unshift("mango"); // add element to beginning.
fruits.shift(); // removes element from beginning.

let length = fruits.length;
let index = fruits.indexOf("banana");

console.log(index); */
////////////////////////// END OF ARRAYS LESSON /////////////////////////


////////////////////// LOOP THROUGH AN ARRAY LESSON /////////////////////
/* let prices = [5, 10, 15, 20, 25]; */

// standard for loop
/* for (let i = 0; i < prices.length; i+=1) {
    console.log(prices[i]);
} */

// reverse for loop
/* for (let i = prices.length - 1; i >= 0; i-=1) {
    console.log(prices[i]);
} */

// for up statement
/* for (let price of prices) {
    console.log(price);
} */
///////////////// END OF LOOP THROUGH AN ARRAY LESSON //////////////////


////////////////// SORT AN ARRAY OF STRINGS LESSON //////////////////////
/* let fruits = ["banana", "apple", "orange", "mango"];

fruits = fruits.sort();
fruits = fruits.sort().reverse(); // reverse method

for (let fruit of fruits) {
    console.log(fruit);
} */
/////////////// END OF SORT AN ARRAY OF STRINGS LESSON //////////////////


////////////////////////// 2D ARRAYS LESSON /////////////////////////////
/* let fruits =        ["apples", "oranges", "bananas"];
let vegetables =    ["carrots", "onions", "potatoes"];
let meats =         ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

groceryList[2][2] = "steak" // how to change a certain index
// first [] is the row. second [] is the column.

for (let list of groceryList) {
    for (let food of list) {
        console.log(food);
    }
} */
////////////////////// END OF 2D ARRAYS LESSON //////////////////////////


////////////////////// SPREAD OPERATOR LESSON ///////////////////////////
//spread operator ... = allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected (unpacks the elements)

/* let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
let maximum = Math.max(...numbers);
console.log(maximum);

let class1 = ["spongebob", "patrick", "sandy"];
let class2 = ["squidward", "mr.krabs", "plankton"];

class1.push(...class2);

console.log(...class1); */ // or console.log(class1);
///////////////////// END OF SPREAD OPERATOR LESSON /////////////////////


//////////////////////// REST PARAMETERS LESSON /////////////////////////
/* let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number
    }
    return total
} */
//////////////////// END OF REST PARAMETERS LESSON //////////////////////


/////////////////////// array.forEach() LESSON //////////////////////////
/* let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
}

//console.log(students[0]);

function print(element) {
    console.log(element);
} */
///////////////////// END OF array.forEach() LESSON /////////////////////


////////////////////////// array.map() LESSON ///////////////////////////
// array.map() = executes a provided callback function once for each array element AND createss a new array.

/* let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

//squares.forEach(print);
cubes.forEach(print);

function square(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

function print(element) {
    console.log(element);
} */
////////////////////// END OF array.map() LESSON ////////////////////////


/////////////////////// array.filter() LESSON ///////////////////////////
// array.filter() = creates a new array with all elements that pass the test provided by a function.

/* let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element) {
    return element >= 18;
}

function print(element) {
    console.log(element);
} */
//////////////////// END OF array.filter() LESSON ///////////////////////


//////////////////////// array.reduce() LESSON //////////////////////////
// array.reduce() = reduces an array to a single value. (to sum up the array of values).

/* let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log(`The total is $${total}`);

function checkOut(total, element) {
    return total + element;
} */
//////////////////// END OF array.reduce() LESSON ///////////////////////


////////////////// SORT AN ARRAY OF NUMBERS LESSON //////////////////////
// sort array descending or ascending order.

/* let grades = [100, 50, 90, 60, 80, 70];

//grades = grades.sort(descendingSort);
grades = grades.sort(ascendingSort);

grades.forEach(print);

function descendingSort(x, y) { // descending order
    return y - x;
}

function ascendingSort(x, y) {  // ascending order
    return x - y;
}

function print(element) {
    console.log(element);
} */
////////////// END OF SORT AN ARRAY OF NUMBERS LESSON ///////////////////


//////////////// ARROW FUNCTION EXPRESSIONS LESSON //////////////////////
// arrow => function = compact alternative to a traditional function expression.

            // EXAMPLE 1
/* const greeting = function (userName) {
    console.log(`Hello ${userName}`);
}
greeting("Aristotle"); */

    // EXAMPLE 1 ARROW FUNCTION
/* const greeting = userName => console.log(`Hello ${userName}`);

greeting("Aristotle"); */

            // EXAMPLE 2
/* const percent = function (x, y) {
    return x / y * 100
}
console.log(`${percent(75, 100)}%`); */

    // EXAMPLE 2 ARROW FUNCTION
/* const percent = (x, y) => x / y * 100

console.log(`${percent(45, 50)}%`); */

            // EXAMPLE 3
/* let grades = [100, 50, 90, 60, 80, 70];

grades.sort(descending);
grades.forEach(print);

function descending(x, y) {
    return y - x; 
}

function print(element) {
    console.log(element);
} */

    // EXAMPLE 3 ARROW FUNCTION
/* let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);

grades.forEach((element) => console.log(element)); */

/////////////// END OF ARROW FUNCTION EXPRESSIONS LESSON ////////////////