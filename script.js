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
      
      // Actualizar el hash en la URL sin recargar la página
      history.pushState(null, null, this.getAttribute('href'));
  });
});

// Mostrar solo la primera sección por defecto (Resumen) o la sección del hash en la URL
function showSectionFromHash() {
    const hash = window.location.hash || '#resumen'; // Si no hay hash, mostrar la sección "Resumen"
    const targetSection = document.querySelector(hash);

    if (targetSection) {
        // Ocultar todas las secciones
        document.querySelectorAll('main section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Mostrar la sección correspondiente
        targetSection.style.display = 'block';
    }
}

// Mostrar la sección correcta al cargar la página
window.addEventListener('load', showSectionFromHash);

// Mostrar la sección correcta al cambiar el hash (navegar entre secciones)
window.addEventListener('hashchange', showSectionFromHash);
