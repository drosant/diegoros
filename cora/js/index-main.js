document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.querySelector(".image_container");

    const imageList = [
        "viaje-recibimiento2.webp",
        "viaje-rio.webp",
        "viaje-safari.webp",
        "viaje-safari2.webp",
        "viaje-safari3.webp",
        "viaje-safari4.webp",
        "viaje-safari5.webp",
        "viaje-salon.webp",
        "viaje-sanubari.webp",
        "viaje-selva.webp",
        "viaje-silla.webp",
        "viaje-sillas2.webp",
        "viaje-sombrilla.webp",
        "viaje-sombrilla2.webp",
        "viaje-sombrilla3.webp",
        "viaje-surf.webp",
        "viaje-surf1.webp",
        "viaje-susurro.webp",
        "viaje-terraza.webp",
        "viaje-ventana.webp",
        "viaje-ventana2.webp",
        "viaje-flor2.webp",
        "viaje-flores.webp",
        "viaje-gafas.webp",
        "viaje-granja.webp",
        "viaje-hoguera.webp",
        "viaje-invierno.webp",
        "viaje-jardin.webp",
        "viaje-korea.webp",
        "viaje-letras.webp",
        "viaje-mar.webp",
        "viaje-masaje.webp",
        "viaje-mercado.webp",
        "viaje-mercado2.webp",
        "viaje-mountain.webp",
        "viaje-mujer.webp",
        "viaje-nature.webp",
        "viaje-noche.webp",
        "viaje-nomadic.webp",
        "viaje-oceano.webp",
        "viaje-paisaje.webp",
        "viaje-palmera.webp",
        "viaje-palmeras2.webp",
        "viaje-piscina.webp",
        "viaje-piscina2.webp",
        "viaje-planta.webp",
        "viaje-playa.webp",
        "viaje-playa2.webp",
        "viaje-pool.webp",
        "viaje-postre.webp",
        "viaje-agua.webp",
        "viaje-albornoz.webp",
        "viaje-almuerzo.webp",
        "viaje-almuerzo2.webp",
        "viaje-arcos.webp",
        "viaje-asia.webp",
        "viaje-asia2.webp",
        "viaje-avion.webp",
        "viaje-banco.webp",
        "viaje-bar.webp",
        "viaje-calle.webp",
        "viaje-cama.webp",
        "viaje-camarero.webp",
        "viaje-canoa.webp",
        "viaje-cascada.webp",
        "viaje-chicas.webp",
        "viaje-cielo.webp",
        "viaje-cocina2.webp",
        "viaje-coco.webp",
        "viaje-corazon.webp",
        "viaje-ducha.webp",
        "viaje-dunas.webp",
        "viaje-dunas2.webp",
        "viaje-elefante.webp",
        "viaje-escultura.webp",
        "viaje-flor.webp",
        "velero-viaje.webp"
    ];
    
  
    // Configuraciones para diferentes anchos de pantalla
    const screenSettings = {
        "4k": {
            initialDelay: 1000,
            imageFadeInTime: 1000,
            imageHoldTime: 7500,
            imageInterval: 1500,
            minInitialSize: 240,
            maxInitialSize: 420,
            leftInit: 8,
            rightInit: 92,
            topInit: 37,
            bottomInit: 65,
            initXOffset: 0,
            initYOffset: 0,
        },
        "1440px": {
            initialDelay: 1000,
            imageFadeInTime: 1000,
            imageHoldTime: 6000,
            imageInterval: 1500,
            minInitialSize: 220,
            maxInitialSize: 350,
            leftInit: 8,
            rightInit: 92,
            topInit: 37,
            bottomInit: 65,
            initXOffset: 0,
            initYOffset: 0,
        },
        "1024px": {
            initialDelay: 1000,
            imageFadeInTime: 1000,
            imageHoldTime: 6000,
            imageInterval: 1500,
            minInitialSize: 200,
            maxInitialSize: 320,
            leftInit: 8,
            rightInit: 92,
            topInit: 35,
            bottomInit: 65,
            initXOffset: 0,
            initYOffset: 0,
        },
        "768px": {
            initialDelay: 200,
            imageFadeInTime: 1000,
            imageHoldTime: 4500,
            imageInterval: 1500,
            minInitialSize: 170,
            maxInitialSize: 270,
            leftInit: 17,
            rightInit: 83,
            topInit: 38,
            bottomInit: 65,
            initXOffset: 0,
            initYOffset: 0,
        },
        "425px": {
            initialDelay: 200,
            imageFadeInTime: 1000,
            imageHoldTime: 4500,
            imageInterval: 1500,
            minInitialSize: 105,
            maxInitialSize: 200,
            leftInit: 17,
            rightInit: 83,
            topInit: 33,
            bottomInit: 67,
            initXOffset: 0,
            initYOffset: 0,
        }
    };

    let currentSettings = screenSettings["1440px"]; // Configuración por defecto

    // Detectar tamaño de pantalla y ajustar configuración
    function updateSettings() {
        if (window.matchMedia("(min-width: 2560px)").matches) {
            currentSettings = screenSettings["4k"];
            console.log("4k Activated");
        } else if (window.matchMedia("(min-width: 1440px)").matches) {
            currentSettings = screenSettings["1440px"];
            console.log("1440px Activated");
        } else if (window.matchMedia("(min-width: 1024px)").matches) {
            currentSettings = screenSettings["1024px"];
            console.log("1024px Activated");
        } else if (window.matchMedia("(min-width: 768px)").matches) {
            currentSettings = screenSettings["768px"];
            console.log("768px Activated");
        } else if (window.matchMedia("(min-width: 425px)").matches) {
            currentSettings = screenSettings["425px"];
            console.log("425px Activated");
        }
    }

    updateSettings(); // Inicializa configuración al cargar la página

    window.addEventListener("resize", updateSettings); // Actualiza configuración al redimensionar la pantalla

    function preloadImage(src, callback) {
        const img = new Image();
        img.src = `images/index/${src}`;
        img.onload = () => {
            callback(img);
        };
    }

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

    let currentImageIndex = Math.floor(Math.random() * imageList.length); // Imagen inicial aleatoria

    function createAndShowImage() {
        const currentImage = imageList[currentImageIndex];

        preloadImage(currentImage, (loadedImage) => {
            loadedImage.alt = "Image";
            const {
                minInitialSize,
                maxInitialSize,
                leftInit,
                rightInit,
                topInit,
                bottomInit,
                initXOffset,
                initYOffset,
                imageFadeInTime,
                imageHoldTime
            } = currentSettings;

            loadedImage.style.width = `${getRandomInRange(minInitialSize, maxInitialSize)}px`;
            loadedImage.style.opacity = "0";
            loadedImage.style.transition = `opacity ${imageFadeInTime / 1000}s ease-in-out`;
            loadedImage.style.position = "absolute";
            loadedImage.style.zIndex = "1";

            const randomLeft = getPositionWithOffset(leftInit, rightInit, initXOffset);
            const randomTop = getPositionWithOffset(topInit, bottomInit, initYOffset);
            loadedImage.style.left = `${randomLeft}%`;
            loadedImage.style.top = `${randomTop}%`;

            imageContainer.appendChild(loadedImage);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    loadedImage.style.opacity = "1";
                });
            });

            setTimeout(() => {
                loadedImage.style.opacity = "0";
                setTimeout(() => {
                    loadedImage.remove();
                }, imageFadeInTime);
            }, imageHoldTime);
        });

        currentImageIndex = (currentImageIndex + 1) % imageList.length;
    }

    setTimeout(() => {
        createAndShowImage();
        setInterval(() => {
            createAndShowImage();
        }, currentSettings.imageInterval);
    }, currentSettings.initialDelay);

    const wordSettings = [
        { selector: '.word.dream', initDelayTime: 1300 },
        { selector: '.word.design', initDelayTime: 2300 },
        { selector: '.word.live', initDelayTime: 3500 }
    ];

    function animateWords(words) {
        words.forEach(({ selector, initDelayTime }) => {
            const word = document.querySelector(selector);
            if (word) {
                setTimeout(() => {
                    word.style.opacity = '1';
                }, initDelayTime);
            }
        });
    }

    window.addEventListener('load', () => {
        animateWords(wordSettings);
    });
});
