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