const temperatureInput = document.getElementById("tempInput");
const farentocelcius = document.getElementById("ftoc");
const celciustofaren = document.getElementById("ctof");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");
let temp;

function convert() {
    
    if (farentocelcius.checked) {
        temp = Number(temperatureInput.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + " °C";
    }
    else if (celciustofaren.checked) {
        temp = Number(temperatureInput.value);
        temp = (temp * 9 / 5) + 32;
        result.textContent = temp.toFixed(1) + " °F";
    }
    else {
        result.textContent = "Please select a conversion type.";
    }

}
