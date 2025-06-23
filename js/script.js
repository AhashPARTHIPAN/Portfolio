document.addEventListener("DOMContentLoaded", () => {
  const crawl = document.querySelector('.crawl');
  crawl.addEventListener('animationend', () => {
    crawl.style.visibility = 'hidden';
    crawl.style.animation = 'none';
    crawl.offsetHeight;
    setTimeout(() => {
      crawl.style.visibility = 'visible';
      crawl.style.animation = 'crawl 30s linear';
    }, 100);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const starWars = document.querySelector('.star-wars');
  const projects = document.getElementById('projects');
  const crawl = document.querySelector('.crawl');
  let crawlReset = false;

  function updateCrawlVisibility() {
    const starWarsRect = starWars.getBoundingClientRect();
    // Si la section Star Wars n'est pas visible à l'écran, on cache le texte
    if (starWarsRect.bottom <= 0 || starWarsRect.top >= window.innerHeight) {
      crawl.style.visibility = 'hidden';
    } else {
      crawl.style.visibility = 'visible';
    }
  }

  window.addEventListener('scroll', () => {
    const projectsTop = projects.getBoundingClientRect().top;

    if (projectsTop < window.innerHeight) {
      // Applique le fade d'abord
      if (!starWars.classList.contains('fade')) {
        starWars.classList.add('fade');
        // Après la transition d'opacité (800ms), fige le crawl tout en haut
        setTimeout(() => {
          crawl.style.animation = 'none';
          crawl.style.top = '-5250px';
          crawlReset = true;
        }, 800);
      }
    } else {
      // Section Star Wars visible : retire le fade et remet le crawl au début
      starWars.classList.remove('fade');
      if (crawlReset) {
        crawl.style.animation = 'none';
        crawl.style.top = '1000px';
        crawl.offsetHeight;
        crawl.style.animation = 'crawl 30s linear';
        crawlReset = false;
      }
    }
    updateCrawlVisibility();
  });

  // Vérifie aussi au chargement et au redimensionnement
  updateCrawlVisibility();
  window.addEventListener('resize', updateCrawlVisibility);
});

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById('navbar-logo');
  if (logo) {
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Applique la classe d'animation à chaque section
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-fade-in');
  });
  // Applique la classe d'animation à chaque projet
  document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('section-fade-in');
  });

  function revealSectionsOnScroll() {
    document.querySelectorAll('.section-fade-in').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80 && rect.bottom > 40) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', revealSectionsOnScroll);
  window.addEventListener('resize', revealSectionsOnScroll);
  revealSectionsOnScroll();
});


document.addEventListener("DOMContentLoaded", () => {
  // Applique la classe d'animation à chaque section
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('section-fade-in');
  });
  // Applique la classe d'animation à chaque projet (gauche/droite en alternance)
  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.classList.add(i % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
  });

  function revealSectionsOnScroll() {
    // Sections
    document.querySelectorAll('.section-fade-in').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80 && rect.bottom > 40) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
    // Projets
    document.querySelectorAll('.project-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80 && rect.bottom > 40) {
        card.classList.add('visible');
      } else {
        card.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', revealSectionsOnScroll);
  window.addEventListener('resize', revealSectionsOnScroll);
  revealSectionsOnScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
    // Ferme le menu quand on clique sur un lien
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => menu.classList.remove('open'));
    });
  }
});