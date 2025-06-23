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
  });
});