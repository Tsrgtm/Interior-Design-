const navigationMenu = document.querySelector('.navigation ul');
const blackOverlay = document.querySelector('.overlay');
const body = document.querySelector('body');

function offcanvas() {
    if (navigationMenu.style.right === '0px') {
        navigationMenu.style.right = '-70vw'; // Hide the menu
        blackOverlay.style.display = 'none'; // Hide the overlay
        body.style.overflow = 'auto'; // Enable scrolling
    } else {
        navigationMenu.style.right = '0px'; // Show the menu
        blackOverlay.style.display = 'flex'; // Show the overlay
        body.style.overflow = 'hidden'; // Disable scrolling
    }
};