const checklabel = document.getElementById("checklabel");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const checkresult = document.getElementById("checkresult");
const radioresult = document.getElementById("radioresult");

submit.onclick = function () {
    if (checklabel.checked) {
        checkresult.textContent = "You have subscribed";
    }
    else {
        checkresult.textContent = "You have not subscribed";
    }
    if (visa.checked) {
        radioresult.textContent = "You have selected Visa";
    }
    else if (mastercard.checked) {
        radioresult.textContent = "You have selected MasterCard";
    }
    else if (paypal.checked) {
        radioresult.textContent = "You have selected PayPal";
    }
    else {
        radioresult.textContent = "You have not selected any payment method";
    }
}