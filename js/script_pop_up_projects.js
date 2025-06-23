document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const closeBtn = document.querySelector('.close-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalDetails = document.getElementById('modal-details');

  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('github-link')) return;
      
      // Get the title
      modalTitle.textContent = card.querySelector('h3').textContent;
      
      // Get all paragraphs and combine them for description
      const paragraphs = card.querySelectorAll('p');
      let description = '';
      paragraphs.forEach((p, index) => {
        if (index < 2) { // Take first two paragraphs
          description += p.textContent + '<br><br>';
        }
      });
      modalDescription.innerHTML = description;
      
      // Get the details
      const details = card.querySelector('.project-details');
      modalDetails.innerHTML = details ? details.innerHTML : '';
      
      // Show modal with smooth animation
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
      
      // Add a small delay to ensure smooth animation
      setTimeout(() => {
        modal.style.display = 'flex';
      }, 10);
    });
  });

  function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }, 300); // Wait for animation to complete
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});