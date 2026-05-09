const siteHeader = `
  <div class="container navbar">
    <a href="/" class="logo">Any<span>Wallpaper</span></a>
    <nav class="nav-links">
      <a href="/anime/">Home</a>
      <div class="dropdown">
        <a class="dropbtn">Categories ▼</a>
        <div class="dropdown-content">
          <a href="/anime/">Anime</a>
          <a href="/nature/">Nature</a>
          <a href="/gaming/">Gaming</a>
          <a href="/space/">Space</a>
          <a href="/cyberpunk/">Cyberpunk</a>
          <a href="/fantasy/">Fantasy</a>
          <a href="/car-and-vehicle/">Vehicle</a>
          <a href="/amoled/">AMOLED</a>
        </div>
      </div>
      <a href="/info/contact/">Contact</a>
    </nav>
  </div>
`;

const siteFooter = `
  <div class="container">
    <div class="footer-grid">
      <div>
        <h3 class="logo">Any<span>Wallpaper</span></h3>
        <p>Premium 1080p animated wallpapers for PC. Lightweight and free.</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <div class="footer-links">
          <a href="/info/privacy/">Privacy Policy</a>
          <a href="/info/terms/">Terms & Conditions</a>
          <a href="/info/contact/">Contact Us</a>
        </div>
      </div>
    </div>
    <div class="copyright">© 2026 AnyWallpaper. All Rights Reserved.</div>
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
    if(document.querySelector('header')) document.querySelector('header').innerHTML = siteHeader;
    if(document.querySelector('footer')) document.querySelector('footer').innerHTML = siteFooter;
});