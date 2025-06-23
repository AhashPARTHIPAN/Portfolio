document.addEventListener("DOMContentLoaded", () => {
  const aboutPages = document.querySelectorAll('#about .about-container .about-page');
  const nextBtn = document.getElementById('next-about');

  // Création du bouton précédent
  let prevBtn = document.createElement('button');
  prevBtn.id = "prev-about";
  prevBtn.innerHTML = "&#8592;";
  prevBtn.setAttribute("aria-label", "Page précédente");
  prevBtn.style.marginTop = "32px";
  prevBtn.style.fontSize = "2em";
  prevBtn.style.background = "none";
  prevBtn.style.border = "none";
  prevBtn.style.color = "#feda4a";
  prevBtn.style.cursor = "pointer";
  prevBtn.style.marginRight = "24px";
  nextBtn.parentNode.insertBefore(prevBtn, nextBtn);

  let current = 0;

  function showPage(idx) {
    aboutPages.forEach((p, i) => {
      p.classList.toggle('active', i === idx);
    });
    prevBtn.style.display = (idx === 0) ? 'none' : '';
    nextBtn.style.display = (idx === aboutPages.length - 1) ? 'none' : '';
  }

  nextBtn.addEventListener('click', () => {
    if (current < aboutPages.length - 1) {
      current++;
      showPage(current);
    }
  });

  prevBtn.addEventListener('click', () => {
    if (current > 0) {
      current--;
      showPage(current);
    }
  });

  // Affiche la première page au chargement
  showPage(current);
});