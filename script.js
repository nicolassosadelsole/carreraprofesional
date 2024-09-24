// JS para ocultar secciones y mostrar solo la que se selecciona
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Ocultar todas las secciones
      document.querySelectorAll('main section').forEach(section => {
          section.style.display = 'none';
      });
      
      // Mostrar la sección correspondiente
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
          targetSection.style.display = 'block';
      }
  });
});

// Mostrar solo la primera sección por defecto (Resumen)
document.querySelectorAll('main section').forEach(section => {
  section.style.display = 'none';
});
document.querySelector('#resumen').style.display = 'block';
