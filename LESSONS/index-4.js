//////////////////////// ERROR HANDLING LESSON //////////////////////////
// error = object with a description of something that went wrong.
// throw = executes a user defined error.

/* try {
    let x = window.prompt("Enter a number");
    x = Number(x);

    if (isNaN(x)) throw alert("That wasn't a number!"); //alert was added
    if(x == "") throw alert("That was empty!");

    alert(`${x} is a number`); // changed from console.log
} catch (error) {
    console.log(error);
}
finally {
    alert("This always executes"); // changed from console.logpip
} */
//////////////////// END OF ERROR HANDLING LESSON ///////////////////////


//////////////////////// setInterval() LESSON ///////////////////////////
// setinterval() = invokes a function repeatedly after a number of milliseconds asynchronous function (doesn't pause execution)

/* let count = 0;
let max = window.prompt("Count up to what number?");
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp() {
    count+=1;
    console.log(count);
    if (count >= max) {
        clearInterval(myTimer);
    }
} */
////////////////////// END OF setInterval LESSON ////////////////////////


/////////////////////////// console.time() //////////////////////////////
// console.time() = starts a timer you can use to track how long an operation takes. gives each timer a unique name.

/* //start
console.time("Response time");

alert("CLICK THE OK BUTTON!");

//end
console.timeEnd("Response time"); */

////////////////////// END OF console.time() LESSON /////////////////////