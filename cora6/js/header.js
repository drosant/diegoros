const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const header = document.querySelector('header');

// Configurar transición de opacidad para el header
header.style.transition = 'background-color 1s ease'; // Transición suave de fondo

// Mostrar/ocultar menú con opacidad y cambio de fondo en el header
menuToggle.addEventListener('click', () => {
    if (navMenu.style.display === 'flex') {
        // Ocultar menú con transición
        navMenu.style.opacity = '0';
        setTimeout(() => {
            navMenu.style.display = 'none';
            header.style.backgroundColor = 'transparent'; // Fondo transparente al cerrar
        }, 1000); // Espera a que termine la transición
    } else {
        // Mostrar menú con transición
        navMenu.style.display = 'flex';
        setTimeout(() => {
            navMenu.style.opacity = '1';
        }, 0); // Inicia la transición inmediatamente
        header.style.backgroundColor = 'var(--background-color)'; // Cambia el fondo al abrir
    }
});

// Ocultar menú y restaurar fondo al hacer clic fuera del menú
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.style.opacity = '0';
        setTimeout(() => {
            navMenu.style.display = 'none';
            header.style.backgroundColor = 'transparent'; // Fondo transparente
        }, 1000); // Espera a que termine la transición
    }
});
