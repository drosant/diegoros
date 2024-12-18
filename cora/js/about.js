document.addEventListener("DOMContentLoaded", function () {
    // Ruta base de las imágenes
    const imageFolder = "images/about/carousel/";
    
    // Lista de imágenes disponibles (según tu captura)
    const images = ["viaje-baile.jpg", "viaje-safari.jpg", "viaje-paz.jpeg"];
    
    // Tiempo de permanencia en milisegundos
    const displayTime = 6500; // 5 segundos

    // Selecciona el contenedor de la imagen
    const imageContainer = document.querySelector(".down .image-container");

    // Índice para controlar qué imagen está cargada
    let currentIndex = 0;

    // Aplica estilo al contenedor para las transiciones
    imageContainer.style.position = "relative";
    imageContainer.style.overflow = "hidden";
    imageContainer.style.transition = "opacity 2s";
    imageContainer.style.opacity = 1;

    // Función para cambiar la imagen
    function changeImage() {
        // Inicia la transición de opacidad a 0
        imageContainer.style.opacity = 0;

        // Espera a que la opacidad termine de disminuir
        setTimeout(() => {
            // Cambia la imagen mostrada
            imageContainer.innerHTML = `<img src="${imageFolder}${images[currentIndex]}" alt="Descripción de la imagen">`;

            // Cambia al siguiente índice, vuelve al inicio si es el último
            currentIndex = (currentIndex + 1) % images.length;

            // Restaura la opacidad para hacer visible la nueva imagen
            imageContainer.style.opacity = 1;
        }, 2000); // La duración de la transición (1 segundo)
    }

    // Inicializa la primera imagen
    changeImage();

    // Cambia la imagen según el tiempo definido
    setInterval(changeImage, displayTime);
});
