tsParticles.load("tsparticles", {
  fpsLimit: 50,
  background: {
    color: "#000000"
  },
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.3, // étoiles fixes légèrement moins lumineuses
      random: true
    },
    size: {
      value: 1.5,
      random: true
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: false,
      straight: false,
      outMode: "bounce"
    }
  },
  detectRetina: true,

  emitters: {
    direction: "bottom-right", //
    rate: {
      delay: 5, // 🌠 toutes les 2 secondes
      quantity: 1
    },
    size: {
      width: 0,
      height: 0
    },
    position: {
      x: 0, // en haut à gauche
      y: 0
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      move: {
        enable: true,
        speed: 55,
        direction: "bottom-right",
        straight: true,
        outModes: {
          default: "destroy"
        }
      },
      size: {
        value: 2.5
      },
      opacity: {
        value: 1 // ✨ très lumineuse
      },
      life: {
        duration: {
          value: 10
        },
        count: 1
      },
      shape: {
        type: "circle"
      }
    }
  }
});
