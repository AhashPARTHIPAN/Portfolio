// Texte à afficher dans l'effet de typewriting
const text = "Bonjour, je m'appelle Ahash PARTHIPAN";
let index = 0;
const typingSpeed = 100; // Vitesse de frappe

function typeEffect() {
    const element = document.querySelector(".welcome-section h1");

    // Écrit le texte caractère par caractère
    if (index < text.length) {
        element.textContent += text.charAt(index); // Ajoute le caractère suivant au texte affiché
        index++;
        setTimeout(typeEffect, typingSpeed); // Appelle récursivement la fonction avec un délai
    }
    else {
        setTimeout(() => element.textContent += ". ", 1000);
    }
}

// Exécute l'effet de texte tapé une seule fois
typeEffect();

// Fonction pour détecter si un élément est dans la vue
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Appliquer l'effet d'apparition lors du défilement
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
});
