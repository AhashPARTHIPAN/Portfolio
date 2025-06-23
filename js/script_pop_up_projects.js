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
      modalTitle.textContent = card.querySelector('h3').textContent;
      const desc = card.querySelector('p');
      modalDescription.textContent = desc ? desc.textContent : '';
      const details = card.querySelector('.project-details');
      modalDetails.innerHTML = details ? details.innerHTML : '';
      modal.classList.add('show');
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});