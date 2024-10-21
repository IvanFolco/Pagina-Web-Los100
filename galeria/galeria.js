// Seleccionar el modal
var modal = document.getElementById("modal");

// Seleccionar la imagen dentro del modal
var modalImg = document.getElementById("imagen-ampliada");

// Seleccionar todas las imágenes de la galería
var imagenes = document.querySelectorAll('.imagen-galeria');

// Seleccionar el botón de cerrar
var cerrar = document.getElementsByClassName("cerrar")[0];

// Abrir el modal cuando se haga clic en una imagen
imagenes.forEach(function(imagen) {
    imagen.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }
});

// Cerrar el modal cuando se haga clic en el botón de cerrar
cerrar.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal haciendo clic fuera de la imagen ampliada
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
