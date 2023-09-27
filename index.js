const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "986fb6134f63c6b7c39365a6ec8afa10";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL
        +city+`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    var temperature = Math.floor(data.main.temp)+"°C";

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = temperature;
    document.querySelector(".descr").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = Math.floor(data.wind.speed)+" km/h";

    switch(data.weather[0].main){
        case "Clear": 
            weatherIcon.src = "./images/clear.png";
        break;
        case "Clouds": 
            weatherIcon.src = "./images/clouds.png";
        break;
        case "Windy": 
            weatherIcon.src = "./images/windy.png";
        break;
        case "Rain": 
            weatherIcon.src = "./images/rainy.png";
        break;
        case "Drizzle": 
            weatherIcon.src = "./images/rainy.png";
        break;
        case "Lightning": 
            weatherIcon.src = "./images/lightning.png";
        break;
        case "Mist": 
            weatherIcon.src = "./images/mist.png";
        break;
        case "Snow": 
            weatherIcon.src = "./images/snow.png";
        break;
    }

    document.querySelector(".weather").style.display= "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
