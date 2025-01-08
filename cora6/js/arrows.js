document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const arrowUp = document.getElementById("arrow-up");
    const arrowDown = document.getElementById("arrow-down");

    let currentSectionIndex = 0;

    const updateArrows = () => {
        // Usamos opacidad y pointer-events para manejar visibilidad con transiciones suaves
        if (currentSectionIndex === 0) {
            arrowUp.classList.add("hidden");
        } else {
            arrowUp.classList.remove("hidden");
        }

        if (currentSectionIndex === sections.length - 1) {
            arrowDown.classList.add("hidden");
        } else {
            arrowDown.classList.remove("hidden");
        }
    };

    const scrollToSection = (index) => {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: "smooth" });
            currentSectionIndex = index; // Actualizar índice actual
            updateArrows();
        }
    };

    // Manejar el clic en las flechas
    arrowUp.addEventListener("click", () => scrollToSection(currentSectionIndex - 1));
    arrowDown.addEventListener("click", () => scrollToSection(currentSectionIndex + 1));

    // Observar las secciones visibles
    const observerOptions = {
        root: null, // Viewport actual
        threshold: 0.5, // Al menos el 50% de la sección debe ser visible
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                currentSectionIndex = Array.from(sections).indexOf(entry.target);
                updateArrows(); // Actualizar flechas según la visibilidad
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar cada sección
    sections.forEach((section) => observer.observe(section));

    // Inicializar flechas
    updateArrows();
});
