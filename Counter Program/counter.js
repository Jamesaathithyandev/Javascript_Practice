const decreasebtn = document.getElementById("decreasebtn");
const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("Reset");
const counter = document.getElementById("CounterLabel");
let count = 0;

decreasebtn.onclick = function () {
  count--;
  counter.textContent = count;
}

increasebtn.onclick = function () {
    count++;
    counter.textContent = count;
}

resetbtn.onclick = function () {
    count = 0;
    counter.textContent = count;
}

 