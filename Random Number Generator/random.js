const number = document.getElementById("num");
const button = document.getElementById("btn");

let max = 6;
let min =1;
let randomNum;

btn.onclick = function () {
    randomNum = Math.floor(Math.random() * max) + min;
    number.textContent = randomNum;
}
