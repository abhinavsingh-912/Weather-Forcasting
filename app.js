// ==========================================
// app.js
// Main JavaScript File
// ==========================================

// HTML Elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const weatherCard = document.getElementById("weatherCard");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const weatherIcon = document.getElementById("weatherIcon");

const forecastContainer = document.getElementById("forecastContainer");

// ===============================
// Search Weather
// ===============================
async function searchWeather(city) {

    if (!city) return;

    loading.classList.remove("hidden");
    error.classList.add("hidden");
    weatherCard.classList.add("hidden");
    forecastContainer.innerHTML = "";

    try {

        const weather = await getCurrentWeather(city);
        const forecast = await getForecast(city);

        displayCurrentWeather(weather);
        displayForecast(forecast);

        saveLastCity(city);
        saveSearchHistory(city);

        weatherCard.classList.remove("hidden");

    } catch (err) {

        console.error(err);

        error.textContent = "City not found!";
        error.classList.remove("hidden");

    } finally {

        loading.classList.add("hidden");

    }

}

// ===============================
// Display Current Weather
// ===============================
function displayCurrentWeather(data) {

    cityName.textContent = `${data.name}, ${data.sys.country}`;

    temperature.textContent =
        `${Math.round(data.main.temp)}°C`;

    description.textContent =
        data.weather[0].description;

    humidity.textContent =
        `${data.main.humidity}%`;

    wind.textContent =
        `${data.wind.speed} m/s`;

    feelsLike.textContent =
        `${Math.round(data.main.feels_like)}°C`;

    weatherIcon.src =
        getWeatherIcon(data.weather[0].icon);

}

// ===============================
// Display Forecast
// ===============================
function displayForecast(data) {

    forecastContainer.innerHTML = "";

    const dailyForecast =
        data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

    dailyForecast.forEach(day => {

        const date = new Date(day.dt_txt);

        const card = document.createElement("div");

        card.className = "forecast-card";

        card.innerHTML = `
            <h4>${date.toLocaleDateString("en-US", {
                weekday: "short"
            })}</h4>

            <img src="${getWeatherIcon(day.weather[0].icon)}">

            <p>${Math.round(day.main.temp)}°C</p>

            <p>${day.weather[0].main}</p>
        `;

        forecastContainer.appendChild(card);

    });

}

// ===============================
// Button Click
// ===============================
searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    searchWeather(city);

});

// ===============================
// Enter Key
// ===============================
cityInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        searchWeather(cityInput.value.trim());

    }

});

// ===============================
// Load Last City
// ===============================
window.addEventListener("load", () => {

    if(isStorageAvailable()){

        const lastCity = getLastCity();

        if(lastCity){

            cityInput.value = lastCity;

            searchWeather(lastCity);

        }

    }

});

// ===============================
// Current Location (Bonus)
// ===============================
if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(async(position)=>{

        if(getLastCity()) return;

        try{

            const weather =
                await getWeatherByLocation(
                    position.coords.latitude,
                    position.coords.longitude
                );

            const forecast =
                await getForecastByLocation(
                    position.coords.latitude,
                    position.coords.longitude
                );

            displayCurrentWeather(weather);

            displayForecast(forecast);

            weatherCard.classList.remove("hidden");

        }catch(err){

            console.log(err);

        }

    });

}