document.addEventListener('DOMContentLoaded', function () {
    const transitionDuration = 500; // Duración de la transición en milisegundos

    const links = document.querySelectorAll('a'); // Seleccionamos todos los enlaces de la página
    const body = document.querySelector('body'); // Seleccionamos el cuerpo de la página
    
    // Función que maneja el fade out y luego el fade in
    function fadeOutAndIn(event) {
        // Evitar la transición si el enlace pertenece a la lista de países
        if (event.currentTarget.closest('.countries')) {
            return; // No hacemos nada
        }

        event.preventDefault(); // Evitar la navegación instantánea
        const targetUrl = event.currentTarget.href; // Capturamos la URL del enlace principal

        // Iniciar fade out: reducimos la opacidad del body
        body.style.opacity = 0;

        // Esperar el tiempo de transición antes de redirigir
        setTimeout(function () {
            // Redirigir a la nueva URL
            window.location.href = targetUrl;
        }, transitionDuration); // Usamos la variable de duración aquí
    }

    // Añadimos el evento a todos los enlaces
    links.forEach(link => {
        link.addEventListener('click', fadeOutAndIn);
    });

    // Cuando la nueva página carga, hacemos un fade in
    window.onload = function() {
        body.style.opacity = 1; // Recuperar opacidad gradualmente
    };
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        // Si la página viene del caché, recarga la página.
        window.location.reload();
    }
});
