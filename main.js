    // Seleccionamos todos los elementos que queremos animar incluyendo la imagen de 'Nuestro Equipo'
    var elementos = document.querySelectorAll(".texto1, .texto2, .parrafo-con-margen1, .texto3, .parrafo-con-margen2, .texto-equipo, .descripcion-equipo");
  
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
