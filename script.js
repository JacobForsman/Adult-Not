let input1 = document.getElementById('nameinput');
let input2 = document.getElementById('ageinput');
let form = document.getElementById('form');
let p = document.getElementById('result');

form.addEventListener('submit', onButtonClicked)

function onButtonClicked(event) {
    let age = parseInt(ageinput.value);
    event.preventDefault();
    if (age >= 18) {
        p.innerHTML = "Hello " + nameinput.value + " you are an adult!";
    } else if (age < 18) {
        p.innerHTML = "Hello " + nameinput.value + " you are not an adult!"
    }
}