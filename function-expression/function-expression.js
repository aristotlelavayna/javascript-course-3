// function expression = function without a name (anonymous function). avoid polluting the global scope with names. write it, then forget about it.

// example 1
/* const greeting = function () {
    console.log("Hello");
}

greeting(); */


// example 2
let count = 0;

document.getElementById("increaseButton").onclick = function () {
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function () {
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}