
function toggleMenu() {
    
    var menuMovil = document.querySelector('.menu-movil');
    
    
    menuMovil.classList.toggle('mostrar');
}


var hamburguesa = document.querySelector('.hamburguesa');
hamburguesa.onclick = toggleMenu;
