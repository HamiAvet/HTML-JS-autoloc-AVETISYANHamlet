const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    } else {
        navLinks.classList.add('active');
        menuToggle.classList.add('active');
    }
}
