document.addEventListener('DOMContentLoaded', async () => {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const langToggle = document.getElementById('lang-toggle');
  const description = document.getElementById('description');
  const navLinks = document.querySelectorAll('nav ul li a'); // Les liens du menu
  let isDarkMode = false;
  let isFrench = true;

  // Charger les traductions depuis le fichier JSON
  const translations = await fetch('translations.json').then(res => res.json());

  function updateTranslations() {
    const lang = isFrench ? 'fr' : 'en';

    // Traduction de la description principale
    description.innerHTML = translations[lang].description;

    // Traduction des liens de navigation
    document.querySelector('a[href="#about"]').textContent = translations[lang].about;
    document.querySelector('a[href="#projects"]').textContent = translations[lang].projects;

    // Traduction de la section "À PROPOS"
    const aboutTitle = document.querySelector('.about h1');
    const aboutText = document.querySelector('.about p');
    const cvButton = document.querySelector('.button-container .btn');

    if (aboutTitle) aboutTitle.textContent = translations[lang].apropos; // Titre "À PROPOS"
    if (aboutText) aboutText.textContent = translations[lang].text_about; // Texte descriptif
    if (cvButton) cvButton.textContent = translations[lang].cv_button; // Texte du bouton

    // Traduction de la section "SKILLS"
    const skillsTitle = document.querySelector('.skills h1');
    if (skillsTitle) skillsTitle.textContent = translations[lang].skillsTitle; // Titre "SKILLS"

    // Traduction des éléments avec attribut data-key
    document.querySelectorAll('[data-key]').forEach(element => {
      const key = element.getAttribute('data-key');
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
  }

  // Basculer le mode sombre
  darkModeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
  });

  // Basculer la langue
  langToggle.addEventListener('click', () => {
    isFrench = !isFrench;
    langToggle.textContent = isFrench ? 'EN' : 'FR';
    updateTranslations(); // Appliquer les traductions mises à jour
  });

  // Initialisation (appliquer la langue par défaut)
  updateTranslations();

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
