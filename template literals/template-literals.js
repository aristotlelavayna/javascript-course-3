// template literals = delimited with (`) instead of (") or (') allows embedded variables and expression.

let userName = "Aristotle";
let items = 3;
let total = 75;
let text = `Hello ${userName}. You have ${items} items in your cart. Your total is $${total}.`;

document.getElementById("myLabel").innerHTML = text;
