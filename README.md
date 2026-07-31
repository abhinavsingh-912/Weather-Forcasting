# 🌦️ Weather Dashboard

A modern and responsive Weather Dashboard application built using **HTML, CSS, and JavaScript**. The application fetches real-time weather data and a 5-day weather forecast using the OpenWeatherMap API.

---

## 📌 Features

- 🔍 Search weather by city name
- 🌡️ Current weather information
- 📅 5-Day weather forecast
- 💨 Wind speed
- 💧 Humidity
- 🌡️ Feels Like temperature
- 🖼️ Weather icons
- 💾 Save last searched city using Local Storage
- 📜 Search history support
- 📱 Fully Responsive Design
- ⏳ Loading animation
- ❌ Error handling for invalid cities
- 📍 Current Location Weather (Bonus)

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Async/Await
- Local Storage
- OpenWeatherMap API

---

## 📂 Project Structure

```text
Weather-Dashboard/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── api.js
│   ├── storage.js
│   └── app.js
│
├── screenshots/
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/weather-dashboard.git
```

Open the project folder.

---

## Get API Key

1. Create a free account on OpenWeatherMap.
2. Generate an API Key.
3. Open **js/api.js**
4. Replace:

```javascript
const API_KEY = "YOUR_API_KEY";
```

with

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

---

## Run Project

Simply open

```
index.html
```

inside your browser.

No server is required.

---

## Project Workflow

User enters city

↓

JavaScript sends API request

↓

Weather API returns JSON

↓

JavaScript processes data

↓

Weather Dashboard updates UI

↓

Search saved in Local Storage

---

## Learning Outcomes

- API Integration
- JSON Parsing
- Async/Await
- Fetch API
- Local Storage
- Responsive Design
- Error Handling
- DOM Manipulation

---

## Future Improvements

- Dark/Light Theme Toggle
- Voice Search
- Air Quality Index
- Weather Maps
- Hourly Forecast
- Multiple Favorite Cities

---

## Author

**Abhinav Kumar**

B.Tech CSIT

GL Bajaj Institute of Technology and Management

---
