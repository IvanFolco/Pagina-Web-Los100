// Función para alternar la visibilidad del menú hamburguesa
const hamburgerButton = document.getElementById('hamburger-button');
const navMenu = document.getElementById('nav-menu');

hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
