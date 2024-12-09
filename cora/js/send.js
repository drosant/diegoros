// Seleccionar el formulario, el botón de envío y el mensaje de éxito
const form = document.querySelector('form');
const submitButton = document.querySelector('.submit-btn');
const successMessage = document.querySelector('.success-message');

// Agregar un evento 'submit' al formulario
form.addEventListener('submit', function (event) {
    // Prevenir el comportamiento por defecto del formulario (refrescar la página)
    event.preventDefault();
    
    // Deshabilitar el botón de envío
    submitButton.disabled = true;
    
    // Cambiar el estilo del botón para que se vea deshabilitado
    submitButton.style.opacity = '0.15'; // Cambiar la opacidad a 0.5
    submitButton.style.cursor = 'not-allowed'; // Cambiar el cursor a no permitido
    
    // Mostrar el mensaje de éxito
    successMessage.style.display = 'block';
});
