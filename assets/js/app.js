// ==========================
// GLOBAL CONFIGURATION
// ==========================
const API_BASE = "https://anywallpaper-tracker.aryanmewadastudios.workers.dev";

// Helper function API call karne ke liye
async function fetchAPI(endpoint, method = "GET") {
    try {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            method: method,
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.json();
    } catch (error) {
        console.error(`API Error on ${endpoint}:`, error);
        return null;
    }
}
// ==========================
// MOCK DATABASE LOADER (wallpapers.json)
// ==========================

let wallpapersDatabase = [];

// Ye function JSON file ko fetch karega
async function loadWallpapersDB() {
    try {
        // Root level se wallpapers.json uthana
        const response = await fetch('/wallpapers.json');
        if (!response.ok) throw new Error("Database file not found!");
        
        wallpapersDatabase = await response.json();
        console.log("Database Loaded successfully!", wallpapersDatabase);
        return wallpapersDatabase;
    } catch (error) {
        console.error("Error loading wallpapers.json:", error);
        return [];
    }
}