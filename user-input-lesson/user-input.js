
// easy way with window promt
let username = window.prompt("what's your name?");
console.log(username);

// difficult way html textbox
    document.getElementById('myButton').onclick = function () {
    username = document.getElementById('myText').value;
    console.log(username);
    document.getElementById('myLabel').innerHTML = 'hello ' + username;
}
