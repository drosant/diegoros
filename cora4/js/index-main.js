document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.querySelector(".image_container");

    const imageList = [
        "canoa-viaje.jpg",
        "casa-viaje.jpg",
        "duna-playa.jpg",
        "flores-viaje.jpg",
        "fruta-viaje.jpg",
        "jirafa-viaje.jpg",
        "korea-viaje.jpg",
        "pajaros-viaje.jpg",
        "palmeras-negro.jpg",
        "palmeras-viaje.jpg",
        "pared-viaje.jpg",
        "pinos-viaje.jpg",
        "piscina-viaje.jpg",
        "pueblo-viaje.jpg",
        "selva-viaje.jpg",
        "velero-viaje.jpg"
    ];

    const initialDelay = 5000; // Tiempo inicial en milisegundos (3 segundos)
    const imageFadeInTime = 1000; // Duración del fade-in en milisegundos (1 segundo)
    const imageHoldTime = 4500; // Tiempo que la imagen se mantiene visible (5 segundos)
    const imageInterval = 1500; // Intervalo entre imágenes en milisegundos (2 segundos)

    const minInitialSize = 280; // Tamaño mínimo en px
    const maxInitialSize = 350; // Tamaño máximo en px

    const leftInit = 20;
    const rightInit = 80;
    const topInit = 45;
    const bottomInit = 60;

    const initXOffset = 0;
    const initYOffset = 0;

    let currentImageIndex = Math.floor(Math.random() * imageList.length); // Imagen inicial aleatoria

    function getRandomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function getPositionWithOffset(min, max, offset) {
        const basePosition = (min + max) / 2;
        const offsetPosition = basePosition + (offset * (max - min)) / 100;
        const range = (max - min) / 2;

        const finalMin = Math.max(min, offsetPosition - range);
        const finalMax = Math.min(max, offsetPosition + range);

        return getRandomInRange(finalMin, finalMax);
    }

    function createAndShowImage() {
        const img = document.createElement("img");
        const currentImage = imageList[currentImageIndex]; // Obtener la imagen actual
        img.src = `images/index/${currentImage}`;
        img.alt = "Image";
        img.style.width = `${getRandomInRange(minInitialSize, maxInitialSize)}px`;
        img.style.opacity = "0"; // Inicialmente invisible
        img.style.transition = `opacity ${imageFadeInTime / 1000}s ease-in-out`;
        img.style.position = "absolute";
        img.style.zIndex = "1";

        const randomLeft = getPositionWithOffset(leftInit, rightInit, initXOffset);
        const randomTop = getPositionWithOffset(topInit, bottomInit, initYOffset);
        img.style.left = `${randomLeft}%`;
        img.style.top = `${randomTop}%`;

        // Añadir la imagen al contenedor
        imageContainer.appendChild(img);

        // Forzar al navegador a procesar el estado inicial antes de aplicar el fade-in
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                img.style.opacity = "1"; // Cambiar a opacidad visible
            });
        });

        setTimeout(() => {
            img.style.opacity = "0"; // Desaparece con fade-out
            setTimeout(() => {
                img.remove(); // Elimina la imagen del DOM después de fade-out
            }, imageFadeInTime);
        }, imageHoldTime);

        // Actualizar el índice de la imagen para la próxima
        currentImageIndex = (currentImageIndex + 1) % imageList.length;
    }

    // Primer imagen después del delay inicial
    setTimeout(() => {
        createAndShowImage();

        // Generar nuevas imágenes en intervalos definidos
        setInterval(() => {
            createAndShowImage();
        }, imageInterval);
    }, initialDelay);
});

// Configuración para cada palabra
const wordSettings = [
    { selector: '.word.dream', initDelayTime: 1300 }, // Dream
    { selector: '.word.design', initDelayTime: 3500 }, // Design
    { selector: '.word.live', initDelayTime: 2300 } // Live
];

// Función para iniciar la animación de cada palabra
function animateWords(words) {
    words.forEach(({ selector, initDelayTime }) => {
        const word = document.querySelector(selector);
        if (word) {
            // Mostrar la palabra (fade in)
            setTimeout(() => {
                word.style.opacity = '1'; // Iniciar transición de aparición
            }, initDelayTime); // Retardo inicial para la palabra
        }
    });
}

// Esperar a que la página cargue
window.addEventListener('load', () => {
    animateWords(wordSettings);
});





