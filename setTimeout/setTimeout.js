// setTimeout() = invokes a function after a number of milliseconds. Asynchronous function (doesn't pause execution).

// example 1
/* let timer1 = setTimeout(firstMessage, 3000);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage() {
    alert(`Buy this course for $500!`);
}
function secondMessage() {
    alert(`This is not a scam!`);
}
function thirdMessage() {
    alert(`DO IT!`);
}

document.getElementById("myButton").onclick = function () {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying! <3`);
} */

// example 2
let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price) {
    alert(`Buy this ${item} for $${price}!`);
}
function secondMessage() {
    alert(`This is not a scam!`);
}
function thirdMessage() {
    alert(`DO IT!`);
}

document.getElementById("myButton").onclick = function () {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying! <3`);
}