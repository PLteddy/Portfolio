document.addEventListener('DOMContentLoaded', async () => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const langToggle = document.getElementById('lang-toggle');

  // Charger les préférences de l'utilisateur depuis localStorage
  let isDarkMode = localStorage.getItem('darkMode') === 'true';
  let isFrench = localStorage.getItem('language') !== 'en'; // Par défaut français

  // Charger les traductions
  const translations = await fetch('translations.json').then(res => res.json());

  function updateTranslations() {
    const lang = isFrench ? 'fr' : 'en';
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
  }

  // Appliquer le mode sombre si activé
  function applyDarkMode() {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  }

  // Appliquer la langue sauvegardée
  function applyLanguage() {
    langToggle.textContent = isFrench ? 'EN' : 'FR';
    updateTranslations();
  }

  // Basculer le mode sombre
  darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode); // Sauvegarder la préférence
    applyDarkMode();
  });

  // Basculer la langue
  langToggle.addEventListener('click', () => {
    isFrench = !isFrench;
    localStorage.setItem('language', isFrench ? 'fr' : 'en'); // Sauvegarder la préférence
    applyLanguage();
  });

  // Appliquer les paramètres au chargement
  applyDarkMode();
  applyLanguage();


  // Effet de pause sur les lignes défilantes (skills)
  const scrollLines = document.querySelectorAll(".scroll-line, .scroll-line2");
  scrollLines.forEach((line) => {
    line.addEventListener("mouseover", () => {
      line.style.animationPlayState = "paused";
    });

    line.addEventListener("mouseout", () => {
      line.style.animationPlayState = "running";
    });
  });

  // Gestion du slider (projets)
  const slider = document.querySelector('.slider_projects'); // Juste .slider_projects
  function activate(e) {
    const items = document.querySelectorAll('.item_projects'); // Recalcule les items à chaque clic
    if (e.target.matches('.next')) {
      slider.append(items[0]); // Déplace le premier élément à la fin
    } else if (e.target.matches('.prev')) {
      slider.prepend(items[items.length - 1]); // Déplace le dernier élément au début
    }
  }
  document.addEventListener('click', activate, false);
});



  document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll(".filters a");
    const cards = document.querySelectorAll(".grid .card");

    filters.forEach(filter => {
      filter.addEventListener("click", (e) => {
        e.preventDefault();

        const filterCategory = filter.getAttribute("data-filter");

        cards.forEach(card => {
          const cardCategories = card.getAttribute("data-category");

          if (filterCategory === "all" || cardCategories.includes(filterCategory)) {
            card.style.display = "block"; // Afficher la carte
          } else {
            card.style.display = "none"; // Masquer la carte
          }
        });

        // Active le filtre sélectionné
        filters.forEach(f => f.classList.remove("active"));
        filter.classList.add("active");
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.item_projects');
    const prevBtn = document.querySelector('.btn.prev');
    const nextBtn = document.querySelector('.btn.next');
    let currentSlide = 0;
    let interval;
  
    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    function startAutoSlide() {
      interval = setInterval(nextSlide, 25000);
    }
  
    function resetAutoSlide() {
      clearInterval(interval);
      startAutoSlide();
    }
  
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetAutoSlide();
    });
  
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetAutoSlide();
    });
  
    // Initialize
    showSlide(currentSlide);
    startAutoSlide();
  });
  


  // Fonction pour ouvrir le lightbox
  function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Met à jour l'image dans le lightbox
    lightboxImg.src = imageSrc;

    // Affiche le lightbox
    lightbox.style.display = 'flex';
  }

  // Fonction pour fermer le lightbox
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  }

