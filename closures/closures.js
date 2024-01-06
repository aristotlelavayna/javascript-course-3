// closure = a function with preserved and private data. gives you access to an outer function's scope from an inner function.

document.getElementById("loginButton").onclick = login();

userInbox = 420.69; // <= this is an example if someone hacked your code.

function login() {
    let userName = "Aristotle";
    let userInbox = 1;

    function alertUser() {
        alert(`${userName} you have ${userInbox} new messages!`);
        userInbox = 0;
    }
    return alertUser;
}
