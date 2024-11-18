// Selecciona todas las secciones que deseas observar
const sections = document.querySelectorAll("section");
const main = document.querySelector("main");

window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            // Cambia el degradado según el color de fondo de la sección visible
            const backgroundColor = window.getComputedStyle(section).backgroundColor;
            main.style.setProperty("--fade-color", backgroundColor);
        }
    });
});
