/*// Ajoute le son de sabre laser au mouvement de souris
document.addEventListener("DOMContentLoaded", () => {
  const sabre = new Audio('audio/Lightsaber.mp3');
  let canPlay = true;
  sabre.volume = 0.3; // Ajuste le volume du son

  window.addEventListener('mousemove', () => {
    if (canPlay) {
      sabre.currentTime = 2;
      sabre.play();
      canPlay = false;
      console.log("Son de sabre laser joué");
      setTimeout(() => { canPlay = true; }, 80); // évite le spam
    }
  });
});*/