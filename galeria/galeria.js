var modal = document.getElementById("modal");

var modalImg = document.getElementById("imagen-ampliada");

var imagenes = document.querySelectorAll('.imagen-galeria');

var cerrar = document.getElementsByClassName("cerrar")[0];

imagenes.forEach(function(imagen) {
    imagen.onclick = function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    }
});

cerrar.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
