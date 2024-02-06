document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.cards-section-carousel');
    let scrollAmount = 0;
    
    function createClones() {
      const cards = slider.querySelectorAll('.card:not(.clone)');
      cards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.classList.add('clone');
        slider.appendChild(clone);
      });
    }
  
    function autoScroll() {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      scrollAmount++;
      if (scrollAmount >= maxScrollLeft) {
        scrollAmount = 0; // Reset scroll amount
      }
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(autoScroll);
    }
  
    createClones(); // Duplica las tarjetas para el efecto infinito
    autoScroll(); // Inicia el desplazamiento automático
  });
  
  
  


  
  
  