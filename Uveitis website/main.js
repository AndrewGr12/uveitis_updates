function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

// Close menu and immediately navigate when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('#mobileMenu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('mobileMenu');
            menu.classList.remove('open');
            // No preventDefault, no delay — default navigation happens immediately
        });
    });
});

// Add this inside a <script> tag or in your JS file
if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
    document.body.classList.add('chrome-browser');
  }