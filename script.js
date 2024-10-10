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

// Manejar el enlace "Ver nota completa"
const verNotaCompletaLink = document.querySelector('.ver-nota-completa');
if (verNotaCompletaLink) {
    verNotaCompletaLink.addEventListener('click', function(e) {
        e.preventDefault();

        // Ocultar todas las secciones
        document.querySelectorAll('main section').forEach(section => {
            section.style.display = 'none';
        });

        // Mostrar la sección de "Día del Técnico Argentino"
        const targetSection = document.querySelector('#diadeltecnicoargentino');
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        // Actualizar el hash en la URL sin recargar la página
        history.pushState(null, null, '#diadeltecnicoargentino');
    });
}

// Mostrar la sección correcta al cargar la página
window.addEventListener('load', showSectionFromHash);

// Mostrar la sección correcta al cambiar el hash (navegar entre secciones)
window.addEventListener('hashchange', showSectionFromHash);

// Cambio dinámico de la imagen meta dependiendo de la URL
window.addEventListener('load', function() {
    const metaOgImage = document.querySelector('meta[property="og:image"]');
    const metaTwitterImage = document.querySelector('meta[name="twitter:image"]');

    if (window.location.pathname === '/diadeltecnicoargentino') {
        metaOgImage.setAttribute('content', 'https://raw.githubusercontent.com/nicolassosadelsole/Imagenes-Miniatura/refs/heads/main/Dia-del-tecnico.png');
        metaTwitterImage.setAttribute('content', 'https://raw.githubusercontent.com/nicolassosadelsole/Imagenes-Miniatura/refs/heads/main/Dia-del-tecnico.png');
    } else {
        metaOgImage.setAttribute('content', 'https://raw.githubusercontent.com/nicolassosadelsole/Imagenes-Miniatura/main/portada.jpg');
        metaTwitterImage.setAttribute('content', 'https://raw.githubusercontent.com/nicolassosadelsole/Imagenes-Miniatura/main/portada.jpg');
    }
});
