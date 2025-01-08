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
  
    // Configuraciones para diferentes anchos de pantalla
    const screenSettings = {
        "4k": {
            initialDelay: 5000,
            imageFadeInTime: 1000,
            imageHoldTime: 7500,
            imageInterval: 1500,
            minInitialSize: 300,
            maxInitialSize: 540,
            leftInit: 8,
            rightInit: 92,
            topInit: 35,
            bottomInit: 65,
            initXOffset: 0,
            initYOffset: 0,
        },
        "1440px": {
            initialDelay: 5000,
            imageFadeInTime: 1000,
            imageHoldTime: 6000,
            imageInterval: 1500,
            minInitialSize: 255,
            maxInitialSize: 500,
            leftInit: 8,
            rightInit: 92,
            topInit: 35,
            bottomInit: 65,
            initXOffset: 0,
            initYOffset: 0,
        },
        "1024px": {
            initialDelay: 5000,
            imageFadeInTime: 1000,
            imageHoldTime: 6000,
            imageInterval: 1500,
            minInitialSize: 255,
            maxInitialSize: 450,
            leftInit: 8,
            rightInit: 92,
            topInit: 35,
            bottomInit: 65,
            initXOffset: 0,
            initYOffset: 0,
        },
        "768px": {
            initialDelay: 5000,
            imageFadeInTime: 1000,
            imageHoldTime: 4500,
            imageInterval: 1500,
            minInitialSize: 200,
            maxInitialSize: 270,
            leftInit: 8,
            rightInit: 92,
            topInit: 38,
            bottomInit: 65,
            initXOffset: 0,
            initYOffset: 0,
        },
        "425px": {
            initialDelay: 5000,
            imageFadeInTime: 1000,
            imageHoldTime: 4500,
            imageInterval: 1500,
            minInitialSize: 130,
            maxInitialSize: 250,
            leftInit: 8,
            rightInit: 92,
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
