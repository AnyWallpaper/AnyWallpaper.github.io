// ==========================
// ADSTERRA AD MANAGER (PRO FIX)
// ==========================

// 1. Social Bar (Pop-up Notification Type)
function loadSocialBar() {
    const script = document.createElement('script');
    script.src = "https://pl29387755.profitablecpmratenetwork.com/85/1d/79/851d794572b70be8caaaedcfe7d6f862.js";
    script.async = true;
    document.body.appendChild(script);
}

// 2. Native Banner Injector (Article ke niche wala)
function injectNativeAds() {
    const adSpots = document.querySelectorAll('.ad-native-placeholder');
    adSpots.forEach(spot => {
        // Container for Adsterra
        spot.innerHTML = `<div id="container-f25d9f151c824f266821e4ffe1b0b40b"></div>`;
        
        // Adsterra Native Script
        const script = document.createElement('script');
        script.async = true;
        script.dataset.cfasync = "false";
        script.src = "https://pl29336581.profitablecpmratenetwork.com/f25d9f151c824f266821e4ffe1b0b40b/invoke.js";
        spot.appendChild(script);
    });
}

// 3. Normal Banner 728x90 (Download ke niche ya Footer ke pass)
function injectNormalBanner() {
    const bannerSpots = document.querySelectorAll('.ad-banner-placeholder');
    bannerSpots.forEach(spot => {
        // Adsterra configuration object
        const confScript = document.createElement('script');
        confScript.innerHTML = `
            atOptions = {
                'key' : 'a49c519d5f75e2513650ce959bbf9d65',
                'format' : 'iframe',
                'height' : 90,
                'width' : 728,
                'params' : {}
            };
        `;
        spot.appendChild(confScript);

        // Adsterra invoke script
        const script = document.createElement('script');
        script.src = "https://www.highperformanceformat.com/a49c519d5f75e2513650ce959bbf9d65/invoke.js";
        spot.appendChild(script);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // 1.5 second ka delay taaki teri website aur video pehle load ho jaye (User experience ke liye best)
    setTimeout(() => {
        loadSocialBar();
        injectNativeAds();
        injectNormalBanner();
    }, 1500);
});