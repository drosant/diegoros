// Arrays de imágenes disponibles
const horizontalImages = [
    "images/index/horizontal/viaje-acantilado.webp",
    "images/index/horizontal/viaje-arena.webp",
    "images/index/horizontal/viaje-atardecer.webp",
    "images/index/horizontal/viaje-canoa.webp",
    "images/index/horizontal/viaje-catarata.webp",
    "images/index/horizontal/viaje-duna.webp",
    "images/index/horizontal/viaje-fiordos.webp",
    "images/index/horizontal/viaje-hotel.webp",
    "images/index/horizontal/viaje-medellin.webp",
    "images/index/horizontal/viaje-playa.webp",
    "images/index/horizontal/viaje-surf.webp",
    "images/index/horizontal/viaje-toldo.webp"
];

const verticalImages = [
    "images/index/vertical/viaje-agua.webp",
    "images/index/vertical/viaje-aguila.webp",
    "images/index/vertical/viaje-alcoba.webp",
    "images/index/vertical/viaje-arbol.webp",
    "images/index/vertical/viaje-bahia.webp",
    "images/index/vertical/viaje-ballena.webp",
    "images/index/vertical/viaje-bruma.webp",
    "images/index/vertical/viaje-caballo.webp",
    "images/index/vertical/viaje-carpa.webp",
    "images/index/vertical/viaje-cesped.webp",
    "images/index/vertical/viaje-cielo.webp",
    "images/index/vertical/viaje-ciudad.webp",
    "images/index/vertical/viaje-colgante.webp",
    "images/index/vertical/viaje-cueva.webp",
    "images/index/vertical/viaje-cupula.webp",
    "images/index/vertical/viaje-elefante.webp",
    "images/index/vertical/viaje-escalada.webp",
    "images/index/vertical/viaje-escalera.webp",
    "images/index/vertical/viaje-espuma.webp",
    "images/index/vertical/viaje-fachada.webp",
    "images/index/vertical/viaje-fuente.webp",
    "images/index/vertical/viaje-hielo.webp",
    "images/index/vertical/viaje-hoja.webp",
    "images/index/vertical/viaje-india.webp",
    "images/index/vertical/viaje-isla.webp",
    "images/index/vertical/viaje-ladera.webp",
    "images/index/vertical/viaje-mar.webp",
    "images/index/vertical/viaje-mediopunto.webp",
    "images/index/vertical/viaje-mexico.webp",
    "images/index/vertical/viaje-montana.webp",
    "images/index/vertical/viaje-mujer.webp",
    "images/index/vertical/viaje-natural.webp",
    "images/index/vertical/viaje-nubes.webp",
    "images/index/vertical/viaje-ola.webp",
    "images/index/vertical/viaje-palmeras.webp",
    "images/index/vertical/viaje-piedra.webp",
    "images/index/vertical/viaje-piscina.webp",
    "images/index/vertical/viaje-playa.webp",
    "images/index/vertical/viaje-primavera.webp",
    "images/index/vertical/viaje-rapido.webp",
    "images/index/vertical/viaje-salto.webp",
    "images/index/vertical/viaje-selva.webp",
    "images/index/vertical/viaje-sol.webp",
    "images/index/vertical/viaje-sombrillas.webp",
    "images/index/vertical/viaje-tienda.webp",
    "images/index/vertical/viaje-tumbonas.webp",
    "images/index/vertical/viaje-valle.webp",
    "images/index/vertical/viaje-verde.webp",
    "images/index/vertical/viaje-vigo.webp"
];

// Parámetros iniciales
const initialDelay = 1.5; // Tiempo antes de cargar la primera imagen
const fadeInTime = 1; // Duración de la transición de fade-in
const fadeOutTime = 1; // Duración de la transición de fade-out
const holdTime = 5; // Tiempo que la imagen permanece visible antes de desaparecer
const overlapTime = 0; // Tiempo en segundos de solapamiento entre fade-out y fade-in

// Función para seleccionar una imagen aleatoria de un array
function getRandomImage(images) {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
}

function preloadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url); // Resolver la promesa cuando la imagen esté cargada
    });
}

// Función para mostrar una imagen con transición
async function showImage(container, imageUrl) {
    // Esperar a que la imagen se precargue
    await preloadImage(imageUrl);

    container.style.backgroundImage = `url(${imageUrl})`;
    container.style.backgroundSize = "cover";
    container.style.backgroundPosition = "center";

    // Aplicar la clase para el fade-in
    container.classList.remove("fade-in");
    void container.offsetWidth; // Forzar reflow para reiniciar la animación
    container.classList.add("fade-in");

    // Ajustar la duración del fade-in
    container.style.setProperty("--fade-in-time", `${fadeInTime}s`);
}

// Función para ocultar una imagen con transición
function hideImage(container) {
    container.classList.remove("fade-in");
    container.style.animation = `fadeOut ${fadeOutTime}s ease-out forwards`;

    // Eliminar la imagen del DOM al final del fade-out
    setTimeout(() => {
        container.style.backgroundImage = ""; // Eliminar la imagen
        container.style.animation = ""; // Limpiar la animación
    }, fadeOutTime * 1000);
}

// Función para manejar el ciclo con solapamiento (sin cambios mayores)
function startCycle() {
    const container1 = document.getElementById("img-container-1");
    const container2 = document.getElementById("img-container-2");
    const container3 = document.getElementById("img-container-3");
    const container4 = document.getElementById("img-container-4");

    // Paso 1: Imagen en container 1
    const image1 = getRandomImage(horizontalImages);
    setTimeout(() => {
    }, 500); 
    showImage(container1, image1);

    setTimeout(() => {
        hideImage(container1);

        // Paso 2: Imagen en container 2
        setTimeout(() => {
            const image2 = getRandomImage(horizontalImages);
            showImage(container2, image2);

            setTimeout(() => {
                hideImage(container2);

                // Paso 3: Imágenes en containers 3 y 4
                setTimeout(() => {
                    const image3 = getRandomImage(verticalImages);
                    const image4 = getRandomImage(verticalImages);
                    showImage(container3, image3);
                    showImage(container4, image4);

                    setTimeout(() => {
                        hideImage(container3);
                        hideImage(container4);

                        // Reiniciar el ciclo con solapamiento
                        setTimeout(startCycle, overlapTime * 1000);
                    }, holdTime * 1000 - overlapTime * 1000);
                }, fadeInTime * 1000 - overlapTime * 1000);
            }, holdTime * 1000 - overlapTime * 1000);
        }, fadeInTime * 1000 - overlapTime * 1000);
    }, holdTime * 1000 - overlapTime * 1000);
}

// Iniciar el ciclo después de que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        startCycle();
    }, initialDelay * 1000);
});


