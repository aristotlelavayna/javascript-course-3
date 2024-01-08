// the date object is used to work with dates and times.

let date = new Date();
//let date = new Date(0); // epoch
///let date = new Date (2025, 0, 1, 2, 3, 4, 5);
//let date = new Date ("January 1, 2025 00:00:00");

/* let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds(); */

/* date.setFullYear(2025);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0); */

//date = date.toLocaleDateString();
//document.getElementById("myLabel").innerHTML = year;
//document.getElementById("myLabel").innerHTML = dayOfMonth;
//document.getElementById("myLabel").innerHTML = dayOfWeek;
//document.getElementById("myLabel").innerHTML = month;
//document.getElementById("myLabel").innerHTML = hour;
//document.getElementById("myLabel").innerHTML = minutes;
//document.getElementById("myLabel").innerHTML = seconds;
//document.getElementById("myLabel").innerHTML = ms;
//document.getElementById("myLabel").innerHTML = date;
//document.getElementById("myLabel").innerHTML = formatDate(date);
document.getElementById("myLabel").innerHTML = formatTime(date);

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "PM" : "AM"

    hours = (hours % 12) || 12;
 
    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}