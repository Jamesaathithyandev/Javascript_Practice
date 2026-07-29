const agenum = document.getElementById("agenum");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let age;


submit.onclick = function() {

    age = agenum.value;
    age = Number(age);

    if (age >= 18) {
        result.textContent = "You are eligible to vote";
    }
    else if (age === 0) {
        result.textContent = "You just born, you are not eligible to vote";
    }
    else {
        result.textContent = "You are not eligible to vote";
    }
}