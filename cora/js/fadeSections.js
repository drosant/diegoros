document.addEventListener("DOMContentLoaded", () => {
    const sectionsToAnimate = document.querySelectorAll("#section-1, #section-2, #section-3, #section-4");

    const observerOptions = {
        root: null, // Viewport actual
        threshold: 0.3, // Activar cuando al menos el 30% de la sección es visible
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Añade la clase de visibilidad gradual
                entry.target.classList.add("fade-in");
                entry.target.classList.remove("fade-out");
            } else {
                // Vuelve al estado invisible gradual
                entry.target.classList.add("fade-out");
                entry.target.classList.remove("fade-in");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionsToAnimate.forEach((section) => {
        section.classList.add("fade-out"); // Estado inicial invisible
        observer.observe(section);
    });
});
