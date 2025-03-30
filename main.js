document.addEventListener("DOMContentLoaded", function () {
    // Ajout de l'overlay noir
    const blackOverlay = document.createElement("div");
    blackOverlay.id = "black-overlay";
    document.body.appendChild(blackOverlay);

    // Initialisation de Swiper
    const swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        speed: 800,
        mousewheel: {
            invert: false,
            releaseOnEdges: true,
            sensitivity: 1.2,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Gestion du clic pour zoom + effet de profondeur + fondu noir
    const slides = document.querySelectorAll(".swiper-slide");

    slides.forEach((slide, index) => {
        slide.addEventListener("click", function () {
            // Désactive les autres clics
            slides.forEach(s => s.style.pointerEvents = "none");

            // Effet de profondeur : les autres projets reculent
            slides.forEach((s) => {
                if (s !== slide) {
                    s.style.transition = "transform 0.7s ease-in-out, opacity 0.7s ease-in-out";
                    s.style.transform = "scale(0.8) translateY(50px) perspective(800px) rotateX(15deg)";
                    s.style.opacity = "0.5";
                }
            });

            // Effet de zoom vers l’utilisateur
            this.style.transition = "transform 0.7s ease-in-out";
            this.style.transform = "scale(1.5) translateY(-20px)";

            // Ajout du fondu en noir
            setTimeout(() => {
                blackOverlay.style.opacity = "1"; // Le noir apparaît
            }, 500);

            // Redirection après le fondu
            setTimeout(() => {
                window.location.href = `projet${index + 1}.html`;
            }, 1200);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Création de l'overlay noir initial
    const blackOverlay = document.createElement("div");
    blackOverlay.id = "black-overlay";
    blackOverlay.style.opacity = "1"; // Commence complètement noir
    document.body.appendChild(blackOverlay);

    // Animation de disparition de l'overlay
    setTimeout(() => {
        blackOverlay.style.transition = "opacity 0.7s ease-in-out";
        blackOverlay.style.opacity = "0";
        
        // Suppression de l'overlay après l'animation (optionnel)
        setTimeout(() => {
            document.body.removeChild(blackOverlay);
        }, 700);
    }, 100); // Petit délai pour s'assurer que le DOM est prêt

});

document.addEventListener('DOMContentLoaded', function() {
    // Animation plus lente du titre (3s au total)
    const titleWords = document.querySelectorAll('.title-word');
    titleWords.forEach((word, index) => {
      setTimeout(() => {
        word.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
        word.style.opacity = '1';
        word.style.transform = 'translateY(0)';
      }, index * 250); // Délai entre chaque mot augmenté
    });
  
    // Animation des paragraphes avec des délais plus longs
    const lines = document.querySelectorAll('.animated-line');
    
    lines.forEach((line, lineIndex) => {
      // Apparition de la ligne complète d'abord
      setTimeout(() => {
        line.style.transition = 'opacity 1s ease, transform 1s ease';
        line.style.opacity = '1';
        line.style.transform = 'translateY(0)';
        
      }, 1000 + lineIndex * 1000); // Délai initial augmenté
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector(".custom-cursor");
    
    // Suivre la souris
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    // Agrandir le curseur sur les éléments cliquables
    const clickableElements = document.querySelectorAll(
        "a, button, .swiper-slide, [onclick], [role='button'], [data-clickable]"
    );

    clickableElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });
        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });
    });
});