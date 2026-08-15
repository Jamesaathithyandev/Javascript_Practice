const weatherform = document.querySelector(".weatherform");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "2f2f67dcee254b95831e4a7f07483b65";

weatherform.addEventListener("submit", async event => {
        event.preventDefault();

        const city = cityinput.value;

        if (city) {
            try {
                const weatherdata = await getWeatherData(city);
                displayWeatherInfo(weatherdata)
            }
            catch (error) {
                console.log(error);
                displayError(error);
            }

        }
        else{
            displayError("Please Enter a Valid City");
        }
});

async function getWeatherData(city){

    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

    const response = await fetch(apiurl);

    if(!response.ok){
        throw new Error("Could not fetch Weather Data");
    }
    return await response.json();
};

function displayWeatherInfo(data){
    const {name: city, main: {temp,humidity}, weather: [{description,id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const citydisplay = document.createElement("h1");
    const tempdisplay = document.createElement("p");
    const humiditydisplay = document.createElement("p");
    const descdisplay = document.createElement("p");
    const emojidisplay = document.createElement("p");

    citydisplay.textContent = city;
    citydisplay.classList.add("h1")
    card.appendChild(citydisplay);

    tempdisplay.textContent = `${(temp - 275.15).toFixed(1)}°C`;
    tempdisplay.classList.add("p")
    card.appendChild(tempdisplay);

    humiditydisplay.textContent = humidity;
    humiditydisplay.classList.add("p")
    card.appendChild(humiditydisplay);

    descdisplay.textContent = description;
    descdisplay.classList.add("p")
    card.appendChild(descdisplay);

    emojidisplay.textContent = getWeatherEmoji(id);
    emojidisplay.classList.add("emoji")
    card.appendChild(emojidisplay);

};

function getWeatherEmoji(weatherid){
    switch(true){
    case (weatherid >= 200 && weatherid < 300):
        return "⛈️";
    case (weatherid >= 300 && weatherid < 400):
        return "🌧️";
    case (weatherid >= 500 && weatherid < 600):
        return "🌧️";
    case (weatherid >= 600 && weatherid < 700):
        return "❄️";
    case (weatherid >= 700 && weatherid < 800):
        return "🌫️";
    case (weatherid === 800):
        return "☀️";
    case (weatherid >= 801 && weatherid < 810):
        return "☁️";
    default:
        return "❓";
}

};

function displayError(message){
    const errordisplay = document.createElement("p");
    errordisplay.textContent = message;
    errordisplay.classList.add("p");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errordisplay);
};