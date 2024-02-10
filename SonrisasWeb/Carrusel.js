document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.cards-section-carousel');
  let scrollAmount = 0;
  let isPaused = false; // Nuevo estado para controlar la pausa
  
  function createClones() {
    const cards = slider.querySelectorAll('.card:not(.clone)');
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      clone.classList.add('clone');
      slider.appendChild(clone);
    });
  }

  function autoScroll() {
    if (!isPaused) { // Solo se desplaza si no está pausado
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      scrollAmount++;
      if (scrollAmount >= maxScrollLeft) {
        scrollAmount = 0; // Reset scroll amount
      }
      slider.scrollLeft = scrollAmount;
    }
    requestAnimationFrame(autoScroll);
  }

  // Evento para pausar el desplazamiento automático
  slider.addEventListener('mouseover', () => {
    isPaused = true;
  });

  // Evento para reanudar el desplazamiento automático
  slider.addEventListener('mouseout', () => {
    isPaused = false;
  });

  createClones(); // Duplica las tarjetas para el efecto infinito
  autoScroll(); // Inicia el desplazamiento automático
});