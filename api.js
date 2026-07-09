// ===============================
// Weather API Configuration
// ===============================

const API_KEY = "3e87802043aaaa54c5e5a18dc23a8818";

const CURRENT_WEATHER_URL =
    "https://api.openweathermap.org/data/2.5/weather";

const FORECAST_URL =
    "https://api.openweathermap.org/data/2.5/forecast";


// ===============================
// Get Current Weather
// ===============================

async function getCurrentWeather(city) {

    try {

        const response = await fetch(
            `${CURRENT_WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        throw error;
    }

}


// ===============================
// Get 5-Day Forecast
// ===============================

async function getForecast(city) {

    try {

        const response = await fetch(
            `${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("Forecast not available");
        }

        return await response.json();

    } catch (error) {

        console.error(error);

        throw error;
    }

}


// ===============================
// Weather Icon URL
// ===============================

function getWeatherIcon(iconCode) {

    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

}


// ===============================
// Get Weather by Coordinates
// (Bonus Feature)
// ===============================

async function getWeatherByLocation(lat, lon) {

    try {

        const response = await fetch(
            `${CURRENT_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {

            throw new Error("Unable to fetch location weather");

        }

        return await response.json();

    } catch (error) {

        console.error(error);

        throw error;

    }

}


// ===============================
// Get Forecast by Coordinates
// (Bonus Feature)
// ===============================

async function getForecastByLocation(lat, lon) {

    try {

        const response = await fetch(
            `${FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {

            throw new Error("Unable to fetch forecast");

        }

        return await response.json();

    } catch (error) {

        console.error(error);

        throw error;

    }

}