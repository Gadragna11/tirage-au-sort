document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const startButton = document.getElementById('start-button');
    const resultSection = document.getElementById('result-section');
    const inputSection = document.getElementById('input-section');
    const namesDisplay = document.getElementById('names-display');
  
    // Liste de noms constants
    const names = ['Litzie', 'Marie-Christine', 'Laura', 'Géraldine', 'Marie', 'Élie', 'Maxime', 'Alexandre', 'Jonathan', 'Vanessa'];
  
    startButton.addEventListener('click', () => {
      const userName = nameInput.value.trim();
      if (!userName) {
        alert('Veuillez entrer un nom !');
        return;
      }
  
      inputSection.style.display = 'none';
      resultSection.style.display = 'block';
  
      let currentIndex = 0;
      const interval = setInterval(() => {
        namesDisplay.textContent = names[currentIndex];
        currentIndex = (currentIndex + 1) % names.length;
      }, 100); // Définit la vitesse de défilement
  
      setTimeout(() => {
        clearInterval(interval);
        namesDisplay.textContent = 'Guillaume'; // Résultat final prédéterminé
      }, 3000); // Durée totale du défilement (en millisecondes)
    });
  });
