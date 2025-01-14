document.addEventListener('DOMContentLoaded', () => {
    // Configuración del carrusel vertical de texto
    const verticalCarousel = document.querySelector('.vertical-carousel');
    const vitems = verticalCarousel.innerHTML; // Almacena el contenido original

    // Duplica el contenido para crear un bucle continuo
    verticalCarousel.innerHTML += vitems + vitems;

    // Ajusta la duración de la animación según la cantidad de contenido duplicado
    const totalItems = verticalCarousel.children.length;
    const animationDuration = totalItems * 1; // Velocidad más lenta
    verticalCarousel.style.animationDuration = `${animationDuration}s`;

    // Configuración del carrusel horizontal de imágenes
    const carousel = document.querySelector('.carousel');
    let position = 0;
    const speed = 1; // Velocidad de desplazamiento
    let isHovering = false;
    let velocity = speed;
    let textVelocity = 1; // Velocidad inicial del carrusel de texto
    const carouselWidth = carousel.scrollWidth;

    // Duplica el contenido para un efecto de loop infinito
    carousel.innerHTML += carousel.innerHTML;

    // Variable de exageración para controlar la magnitud de las variaciones
    const exaggerate = 0; // Ajusta este valor para aumentar o disminuir la variación

    // Lazy load usando Intersection Observer
    const observerOptions = {
        root: document.querySelector('.carousel-container'),
        rootMargin: '0px',
        threshold: 0.1
    };

    const loadImage = (entry) => {
        const img = entry.target.querySelector('.carousel-image');
        img.src = img.dataset.src;
        img.onload = () => {
            img.style.opacity = '1'; // Mostrar imagen suavemente

            // Aplica un tamaño aleatorio a la imagen
            const randomScale = 1 + exaggerate * (Math.random() * 0.2 - 0.1); // Genera un número entre 0.9 y 1.1
            const randomY = exaggerate * (Math.random() * 80 - 40); // Genera un número entre -40px y 40px
            const randomX = exaggerate * (Math.random() * 30 - 15); // Genera un número entre -15px y 15px
            img.style.transform = `scale(${randomScale}) translateY(${randomY}px) translateX(${randomX}px)`;
        };
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry);
                observer.unobserve(entry.target); // Dejar de observar después de cargar
            }
        });
    }, observerOptions);

    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => {
        observer.observe(item);

        // Detener el movimiento cuando el ratón está sobre una imagen con desaceleración
        item.addEventListener('mouseenter', () => {
            isHovering = true;
        });

        // Reanudar el movimiento cuando el ratón sale de la imagen
        item.addEventListener('mouseleave', () => {
            isHovering = false;
            velocity = speed; // Reinicia la velocidad
            textVelocity = 1; // Reinicia la velocidad del texto
            verticalCarousel.style.animationPlayState = 'running'; // Reanudar el carrusel de texto
        });
    });

    // Función para mover el carrusel horizontal y vertical automáticamente con bucle infinito
    function moveCarousel() {
        if (!isHovering) {
            position -= velocity;

            // Crear un efecto de bucle infinito
            if (position <= -carouselWidth) {
                position = 0;
                carousel.style.transform = `translateX(0px)`;
            } else {
                carousel.style.transform = `translateX(${position}px)`;
            }

            // Mover el carrusel de texto si no está en pausa
            const currentOffset = parseFloat(verticalCarousel.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
            verticalCarousel.style.transform = `translateY(${currentOffset + textVelocity}px)`;
        } else {
            // Desacelera suavemente el carrusel de imágenes
            if (velocity > 0.1) {
                velocity *= 0.95;
                position -= velocity;
                carousel.style.transform = `translateX(${position}px)`;
            } else {
                velocity = 0;
            }

            // Desacelera suavemente el carrusel de texto
            if (textVelocity > 0.1) {
                textVelocity *= 0.9;
                const currentOffset = parseFloat(verticalCarousel.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
                verticalCarousel.style.transform = `translateY(${currentOffset + textVelocity}px)`;
            } else {
                textVelocity = 0;
                verticalCarousel.style.animationPlayState = 'paused'; // Pausar la animación cuando la velocidad sea mínima
            }
        }

        requestAnimationFrame(moveCarousel);
    }

    moveCarousel();
});
