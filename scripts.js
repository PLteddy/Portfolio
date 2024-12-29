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
  
    aboutTitle.textContent = translations[lang].apropos; // Titre "À PROPOS"
    aboutText.textContent = translations[lang].text_about; // Texte descriptif
    cvButton.textContent = translations[lang].cv_button; // Texte du bouton
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


  // Skilss
  const scrollLines = document.querySelectorAll(".scroll-line");

scrollLines.forEach((line) => {
  line.addEventListener("mouseover", () => {
    line.style.animationPlayState = "paused";
  });

  line.addEventListener("mouseout", () => {
    line.style.animationPlayState = "running";
  });
});

});
