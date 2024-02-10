
var elementos = document.querySelectorAll(".texto1, .texto2, .parrafo-con-margen1, .texto3, .parrafo-con-margen2, .textoHorario, .parrafo-con-margen3, .texto4, .texto5, .texto6, .texto7, .texto8, .textoFotos, .parrafo-con-margen4, .parrafo-con-margen5, .parrafo-con-margen6");

window.addEventListener("scroll", animacionScroll);

function animacionScroll() {
  elementos.forEach(function (elemento) {
    if (isElementInViewport(elemento)) {
      elemento.classList.add("mostrar");
    } else {
      elemento.classList.remove("mostrar");
    }
  });
}

function isElementInViewport(elemento) {
  var rect = elemento.getBoundingClientRect();
  return (
    rect.bottom > 0 && // Parte inferior del elemento por encima del borde superior de la ventana
    rect.top < window.innerHeight // Parte superior del elemento por debajo del borde inferior de la ventana
  );
}