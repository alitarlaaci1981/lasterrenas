document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById('toggle-button');
    const travelDirections = document.getElementById('travel-directions');

    toggleButton.addEventListener('click', function() {
      if (travelDirections.style.display === 'none') {
        travelDirections.style.display = 'block';
        toggleButton.textContent = 'Hide Travel Directions';
      } else {
        travelDirections.style.display = 'none';
        toggleButton.textContent = 'Show Travel Directions';
      }
    });
  });

  $(document).ready(function () {
    $('.photo-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});


document.getElementById('scrollToTop').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  });
});


document.getElementById('stickyHomeButton').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

