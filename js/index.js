// Selecciona todas las secciones y divisiones que quieres observar
const sections = document.querySelectorAll("section, #division, #division-final");

// Configuración del Intersection Observer
const observerOptions = {
  threshold: 0.6 // Detecta cuando el 60% de la sección es visible
};

// Callback del Intersection Observer
const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Desplaza el scroll a esa sección
      entry.target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  });
};

// Crea el Intersection Observer y aplica la configuración
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observa cada sección y división seleccionada
sections.forEach(section => observer.observe(section));
