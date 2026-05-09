// ==========================
// WALLPAPER STATS HANDLER
// ==========================

// URL se EXACT folder ka naam (slug) nikalna
function getWallpaperSlug() {
    let path = window.location.pathname;
    
    // Agar last mein index.html hai, toh use hata do
    path = path.replace(/\/index\.html$/, ''); 
    // Agar last mein extra slash (/) hai, toh use bhi hata do
    path = path.replace(/\/$/, ''); 
    
    // Ab URL ko tod kar sabse aakhri hissa le lo (Ye hamesha folder name hoga)
    const parts = path.split('/');
    return parts[parts.length - 1]; 
}

// Stats UI mein update karne ke liye
function updateStatsUI(stats) {
    if (!stats) return;
    
    const likesEl = document.getElementById("stat-likes");
    const downloadsEl = document.getElementById("stat-downloads");

    if (likesEl) likesEl.innerText = stats.likes || 0;
    if (downloadsEl) downloadsEl.innerText = stats.downloads || 0;
}

// Page load hote hi current stats lana
async function loadCurrentStats() {
    const slug = getWallpaperSlug();
    if (!slug) return;

    const stats = await fetchAPI(`/stats/${slug}`, "GET");
    updateStatsUI(stats);
    
    // Agar user ne pehle se like kiya hua hai, toh button green dikhao
    if(localStorage.getItem(`liked_${slug}`)) {
        const likeBtn = document.getElementById("like-btn");
        if(likeBtn) likeBtn.classList.add("liked");
    }
}

// Like button dabane par (Fake likes LocalStorage se rokna)
async function handleLike() {
    const slug = getWallpaperSlug();
    
    // Agar browser mein check pass hua ki isne pehle like kiya hai, toh return kar do (API hit nahi hogi)
    if(localStorage.getItem(`liked_${slug}`)) return; 

    const stats = await fetchAPI(`/like/${slug}`, "POST");
    updateStatsUI(stats);
    
    // Browser memory mein save kar do ki isne like kar diya hai
    localStorage.setItem(`liked_${slug}`, 'true'); 
    
    const likeBtn = document.getElementById("like-btn");
    if(likeBtn) likeBtn.classList.add("liked");
}

// Download button dabane par
async function handleDownload() {
    const slug = getWallpaperSlug();
    const stats = await fetchAPI(`/download/${slug}`, "POST");
    updateStatsUI(stats);
}

document.addEventListener("DOMContentLoaded", () => {
    const likeBtn = document.getElementById("like-btn");
    const downloadBtn = document.getElementById("download-btn");

    // Agar page par like/download button hai, toh hi API chalegi
    if(likeBtn || downloadBtn) {
        loadCurrentStats(); 
        
        if(likeBtn) likeBtn.addEventListener("click", handleLike);
        if(downloadBtn) downloadBtn.addEventListener("click", handleDownload);
    }
});