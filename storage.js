// ==========================================
// storage.js
// Local Storage Utility Functions
// ==========================================

// Storage Keys
const LAST_CITY_KEY = "weather_last_city";
const SEARCH_HISTORY_KEY = "weather_search_history";

// ===============================
// Save Last Searched City
// ===============================
function saveLastCity(city) {

    if (!city) return;

    localStorage.setItem(LAST_CITY_KEY, city);

}

// ===============================
// Get Last Searched City
// ===============================
function getLastCity() {

    return localStorage.getItem(LAST_CITY_KEY);

}

// ===============================
// Save Search History
// ===============================
function saveSearchHistory(city) {

    if (!city) return;

    let history = getSearchHistory();

    // Remove duplicate city
    history = history.filter(item => item.toLowerCase() !== city.toLowerCase());

    // Add latest city
    history.unshift(city);

    // Keep only last 10 searches
    if (history.length > 10) {
        history = history.slice(0, 10);
    }

    localStorage.setItem(
        SEARCH_HISTORY_KEY,
        JSON.stringify(history)
    );

}

// ===============================
// Get Search History
// ===============================
function getSearchHistory() {

    const history = localStorage.getItem(SEARCH_HISTORY_KEY);

    return history ? JSON.parse(history) : [];

}

// ===============================
// Remove Search History
// ===============================
function clearSearchHistory() {

    localStorage.removeItem(SEARCH_HISTORY_KEY);

}

// ===============================
// Remove Last City
// ===============================
function clearLastCity() {

    localStorage.removeItem(LAST_CITY_KEY);

}

// ===============================
// Clear All Weather Storage
// ===============================
function clearWeatherStorage() {

    localStorage.removeItem(LAST_CITY_KEY);
    localStorage.removeItem(SEARCH_HISTORY_KEY);

}

// ===============================
// Check Browser Support
// ===============================
function isStorageAvailable() {

    try {

        const testKey = "__storage_test__";

        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);

        return true;

    } catch (error) {

        console.error("Local Storage is not supported.");
        return false;

    }

}