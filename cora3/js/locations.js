// Seleccionamos todos los enlaces de países y los contenedores de imágenes
const countries = document.querySelectorAll('.countries a');
const imageContainer = document.querySelector('.image-container img');
const imageContainerV1 = document.querySelector('.image-container-v1 img');
const imageContainerV2 = document.querySelector('.image-container-v2 img');

// Variable para guardar el último elemento hovereado
let lastHoveredCountry = null;

// Función para manejar el hover y mostrar imágenes
function handleHover(country) {
    const images = country.getAttribute('data-country').split(',');
    const isHorizontal = country.classList.contains('horizontal');

    // Remover la clase hover de todos
    countries.forEach(c => c.classList.remove('hover'));

    // Añadir la clase hover al elemento actual
    country.classList.add('hover');

    if (isHorizontal) {
        imageContainer.src = `images/locations/horizontal/${images[0]}.webp`;
        document.querySelector('.image-container').style.display = 'block';
        document.querySelector('.image-container-v1').style.display = 'none';
        document.querySelector('.image-container-v2').style.display = 'none';
    } else {
        imageContainerV1.src = `images/locations/vertical/${images[0]}.webp`;
        imageContainerV2.src = `images/locations/vertical/${images[1]}.webp`;
        document.querySelector('.image-container').style.display = 'none';
        document.querySelector('.image-container-v1').style.display = 'block';
        document.querySelector('.image-container-v2').style.display = 'block';
    }

    // Guardar este país como el último hovereado
    lastHoveredCountry = country;
}

// Función para precargar imágenes
function preloadImages() {
    const imageUrls = [];

    countries.forEach(country => {
        const images = country.getAttribute('data-country').split(',');
        const isHorizontal = country.classList.contains('horizontal');

        if (isHorizontal) {
            imageUrls.push(`images/locations/horizontal/${images[0]}.webp`);
        } else {
            imageUrls.push(`images/locations/vertical/${images[0]}.webp`);
            imageUrls.push(`images/locations/vertical/${images[1]}.webp`);
        }
    });

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Iteramos sobre cada enlace para añadir eventos
countries.forEach(country => {
    country.addEventListener('mouseenter', () => handleHover(country));
});

// Lógica inicial para seleccionar el primer elemento
if (countries.length > 0) {
    handleHover(countries[0]);
}

// Precargar todas las imágenes al cargar la página
preloadImages();

// Deshabilitar el clic en los enlaces
countries.forEach(country => {
    country.addEventListener('click', event => {
        event.preventDefault(); // Evita que el enlace sea clicable
        console.log('Click prevenido para:', country.textContent);
    });
});

