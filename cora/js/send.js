// Seleccionar el formulario, el botón de envío y el mensaje de éxito
const form = document.querySelector('form');
const submitButton = document.querySelector('.submit-btn');
const successMessage = document.querySelector('.success-message');

// Función simulada para realizar una acción que puede salir bien o mal
async function performAction() {
    return new Promise((resolve, reject) => {
        // Simulación de una acción asíncrona con resultado aleatorio
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5; // 50% éxito, 50% fallo
            if (isSuccess) {
                resolve();
            } else {
                reject();
            }
        }, 1000); // Simula un retraso de 1 segundo
    });
}

// Agregar un evento 'submit' al formulario
form.addEventListener('submit', async function (event) {
    // Prevenir el comportamiento por defecto del formulario (refrescar la página)
    event.preventDefault();

    // Deshabilitar el botón de envío
    submitButton.disabled = true;
    submitButton.style.opacity = '0.15';
    submitButton.style.cursor = 'not-allowed';

    try {
        // Realizar la acción simulada
        await performAction();

        // Si la acción tiene éxito, mostrar el mensaje de éxito
        successMessage.textContent = '¡Gracias por contactar con nosotros! Nos pondremos en contacto contigo lo antes posible.';
        successMessage.style.display = 'block';
        successMessage.style.color = '#8dceb2';
    } catch {
        // Si la acción falla, mostrar el mensaje de error
        successMessage.textContent = 'Ha habido un error. Por favor, inténtalo de nuevo o escríbenos a info@coratravelstudio.com';
        successMessage.style.display = 'block';
        submitButton.disabled = false; // Habilitar de nuevo el botón si hay error
        submitButton.style.opacity = '1';
        submitButton.style.cursor = 'pointer';
        successMessage.style.color = '#f7aaaa';
    }
});
