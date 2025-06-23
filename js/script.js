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
    const starWarsRect = starWars.getBoundingClientRect();

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
    } else if (starWarsRect.bottom > 0 && starWarsRect.top < window.innerHeight) {
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

  // Gère la fin de l'animation
  crawl.addEventListener('animationend', () => {
    crawl.style.visibility = 'hidden';
    crawl.style.animation = 'none';
    crawl.offsetHeight;
    setTimeout(() => {
      crawl.style.visibility = 'visible';
      crawl.style.animation = 'crawl 30s linear';
    }, 100);
  });

  const sections = document.querySelectorAll('section');
  const appearOnScroll = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        section.classList.add('visible');
      }
    });
  };

  // Ajoute la classe d'animation à chaque section au départ
  sections.forEach(section => section.classList.add('section-appear'));
  window.addEventListener('scroll', appearOnScroll);
  window.addEventListener('resize', appearOnScroll);
  appearOnScroll();

  // Responsive Navbar Toggle
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');

  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
      const expanded = navbarToggle.getAttribute('aria-expanded') === 'true';
      navbarToggle.setAttribute('aria-expanded', !expanded);
      navbarMenu.classList.toggle('open');
    });
    // Close menu when a link is clicked (mobile UX)
    navbarMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('open');
        navbarToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll for anchor links
  const navLinks = document.querySelectorAll('.navbar-menu a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 60, // offset for fixed navbar
          behavior: 'smooth'
        });
      }
    });
  });
});