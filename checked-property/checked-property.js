
document.getElementById('myButton').onclick = function () {
    
    const myCheckBox = document.getElementById('myCheckBox');
    const visaBtn = document.getElementById('visaBtn');
    const mastercardBtn = document.getElementById('mastercardBtn');
    const paypalBtn = document.getElementById('paypalBtn');
    
    // changed the console.log into alert.
    // if statement for the subscribe button.
    if (myCheckBox.checked) {
        alert('You are subscribed!');
    } else {
        alert('You are NOT subscribed!');
    }

    // if statement for the radio buttons.
    if (visaBtn.checked) {
        alert('You are paying with a Visa!');
    } else if (mastercardBtn.checked) {
        alert('You are paying with a MasterCard!');
    } else if (paypalBtn.checked) {
        alert('You are paying with a PayPal!');
    } else {
        alert('You must select a payment type!');
    }
}
