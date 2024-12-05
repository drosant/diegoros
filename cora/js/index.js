// Arrays de imágenes disponibles
const horizontalImages = [
    "images/index/horizontal/viaje-acantilado.jpg",
    "images/index/horizontal/viaje-arena.jpg",
    "images/index/horizontal/viaje-atardecer.jpg",
    "images/index/horizontal/viaje-canoa.jpg",
    "images/index/horizontal/viaje-catarata.jpg",
    "images/index/horizontal/viaje-duna.jpg",
    "images/index/horizontal/viaje-fiordos.jpg",
    "images/index/horizontal/viaje-hotel.jpg",
    "images/index/horizontal/viaje-medellin.jpg",
    "images/index/horizontal/viaje-playa.jpg",
    "images/index/horizontal/viaje-surf.jpg",
    "images/index/horizontal/viaje-toldo.jpg"
];

const verticalImages = [
    "images/index/vertical/viaje-agua.jpg",
    "images/index/vertical/viaje-aguila.jpg",
    "images/index/vertical/viaje-alcoba.jpg",
    "images/index/vertical/viaje-arbol.jpg",
    "images/index/vertical/viaje-bahia.jpg",
    "images/index/vertical/viaje-ballena.jpg",
    "images/index/vertical/viaje-bruma.jpg",
    "images/index/vertical/viaje-caballo.jpg",
    "images/index/vertical/viaje-carpa.jpg",
    "images/index/vertical/viaje-cesped.jpg",
    "images/index/vertical/viaje-cielo.jpg",
    "images/index/vertical/viaje-ciudad.jpg",
    "images/index/vertical/viaje-colgante.jpg",
    "images/index/vertical/viaje-cueva.jpg",
    "images/index/vertical/viaje-cupula.jpg",
    "images/index/vertical/viaje-elefante.jpg",
    "images/index/vertical/viaje-escalada.jpg",
    "images/index/vertical/viaje-escalera.jpg",
    "images/index/vertical/viaje-espuma.jpg",
    "images/index/vertical/viaje-fachada.jpg",
    "images/index/vertical/viaje-fuente.jpg",
    "images/index/vertical/viaje-hielo.jpg",
    "images/index/vertical/viaje-hoja.jpg",
    "images/index/vertical/viaje-india.jpg",
    "images/index/vertical/viaje-isla.jpg",
    "images/index/vertical/viaje-ladera.jpg",
    "images/index/vertical/viaje-mar.jpg",
    "images/index/vertical/viaje-mediopunto.jpg",
    "images/index/vertical/viaje-mexico.jpg",
    "images/index/vertical/viaje-montana.jpg",
    "images/index/vertical/viaje-mujer.jpg",
    "images/index/vertical/viaje-natural.jpg",
    "images/index/vertical/viaje-nubes.jpg",
    "images/index/vertical/viaje-ola.jpg",
    "images/index/vertical/viaje-palmeras.jpg",
    "images/index/vertical/viaje-piedra.jpg",
    "images/index/vertical/viaje-piscina.jpg",
    "images/index/vertical/viaje-playa.jpg",
    "images/index/vertical/viaje-primavera.jpg",
    "images/index/vertical/viaje-rapido.jpg",
    "images/index/vertical/viaje-salto.jpg",
    "images/index/vertical/viaje-selva.jpg",
    "images/index/vertical/viaje-sol.jpg",
    "images/index/vertical/viaje-sombrillas.jpg",
    "images/index/vertical/viaje-tienda.jpg",
    "images/index/vertical/viaje-tumbonas.jpg",
    "images/index/vertical/viaje-valle.jpg",
    "images/index/vertical/viaje-verde.jpg",
    "images/index/vertical/viaje-vigo.jpg"
];

// Parámetros iniciales
const initialDelay = 0.5; // Tiempo antes de cargar la primera imagen
const fadeInTime = 0.8; // Duración de la transición de fade-in
const fadeOutTime = 0.8; // Duración de la transición de fade-out
const holdTime = 5; // Tiempo que la imagen permanece visible antes de desaparecer
const overlapTime = 0; // Tiempo en segundos de solapamiento entre fade-out y fade-in

// Función para seleccionar una imagen aleatoria de un array
function getRandomImage(images) {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
}

// Función para mostrar una imagen con transición
function showImage(container, imageUrl) {
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

// Función para manejar el ciclo con solapamiento
function startCycle() {
    const container1 = document.getElementById("img-container-1");
    const container2 = document.getElementById("img-container-2");
    const container3 = document.getElementById("img-container-3");
    const container4 = document.getElementById("img-container-4");

    // Paso 1: Imagen en container 1
    const image1 = getRandomImage(horizontalImages);
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


