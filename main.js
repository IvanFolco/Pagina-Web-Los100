// Definir la función toggleMenu
function toggleMenu() {
    // Selecciona el menú móvil
    var menuMovil = document.querySelector('.menu-movil');
    
    // Alternar la clase 'mostrar' para desplegar o esconder el menú
    menuMovil.classList.toggle('mostrar');
}

// Añadir el evento onclick al botón hamburguesa directamente desde el JavaScript
var hamburguesa = document.querySelector('.hamburguesa');
hamburguesa.onclick = toggleMenu;
