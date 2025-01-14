document.addEventListener("DOMContentLoaded", function () {
    // Ruta base de las imágenes
    const imageFolder = "images/about/carousel/";
    const images = ["viaje-safari.jpg", "viaje-paz.jpeg"];

    // Tiempo de permanencia en milisegundos
    const displayTime = 6500;

    // Selecciona el contenedor de la imagen
    const imageContainer = document.querySelector(".down .image-container");

    // Índice para controlar qué imagen está cargada
    let currentIndex = 0;

    // Aplica estilo inicial al contenedor
    imageContainer.style.position = "relative";
    imageContainer.style.overflow = "hidden";
    imageContainer.style.transition = "opacity 2s";
    imageContainer.style.opacity = 1;

    // Función para ajustar la altura del contenedor
    function adjustHeight() {
        const aspectRatio = 1 / 1.2; // Aspect ratio de la imagen
        const width = imageContainer.offsetWidth; // Ancho del contenedor
        imageContainer.style.height = `${width * aspectRatio}px`; // Calcula la altura
    }

    // Función para cambiar la imagen
    function changeImage() {
        imageContainer.style.opacity = 0; // Transición de opacidad a 0

        setTimeout(() => {
            // Cambia la imagen mostrada
            imageContainer.innerHTML = `<img src="${imageFolder}${images[currentIndex]}" alt="Descripción de la imagen" style="width: 100%; height: auto; object-fit: cover;">`;

            // Ajusta la altura después de cambiar la imagen
            adjustHeight();

            // Cambia al siguiente índice
            currentIndex = (currentIndex + 1) % images.length;

            // Restaura la opacidad
            imageContainer.style.opacity = 1;
        }, 2000); // Duración de la transición de opacidad
    }

    // Inicializa la primera imagen y ajusta la altura
    changeImage();

    // Cambia la imagen según el tiempo definido
    setInterval(changeImage, displayTime);

    // Ajusta la altura al cargar la página y al redimensionar la ventana
    window.addEventListener('resize', adjustHeight);
    window.addEventListener('load', adjustHeight);
});
