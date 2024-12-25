// Seleccionar el formulario, el botón de envío y el mensaje de éxito
const form = document.querySelector('form');
const submitButton = document.querySelector('.submit-btn');
const successMessage = document.querySelector('.success-message');

// Función para validar y sanitizar los datos del formulario
function validateAndSanitize(formData) {
    const sanitizedData = {};
    const pattern = /[<>/"'`;()={}]/g; // Caracteres potencialmente peligrosos

    // Validar y sanitizar cada campo
    sanitizedData.fullName = formData.fullName.replace(pattern, '').trim();
    sanitizedData.email = formData.email.replace(pattern, '').trim();
    sanitizedData.phone = formData.phone.replace(pattern, '').trim();
    sanitizedData.city = formData.city.replace(pattern, '').trim();
    sanitizedData.destination = formData.destination.replace(pattern, '').trim();
    sanitizedData.message = formData.message.replace(pattern, '').trim();

    // Validar formato del email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(sanitizedData.email)) {
        throw new Error('Formato de email no válido.');
    }

    // Validar que todos los campos estén presentes
    for (const key in sanitizedData) {
        if (!sanitizedData[key]) {
            throw new Error(`El campo ${key} está vacío o contiene caracteres inválidos.`);
        }
    }

    return sanitizedData;
}

// Función simulada para realizar una acción que puede salir bien o mal
async function performAction(formData) {
    try {
        // Imprimir los datos del formulario en la consola
        console.log("Contenido del formulario:");
        console.log(`Nombre Completo: ${formData.fullName}`);
        console.log(`Email: ${formData.email}`);
        console.log(`Teléfono: ${formData.phone}`);
        console.log(`Ciudad de Residencia: ${formData.city}`);
        console.log(`Destino: ${formData.destination}`);
        console.log(`Mensaje: ${formData.message}`);
        console.log('Mensaje enviado con éxito!');
        
        // SEND MAIL
        
        return Promise.resolve();
    } catch (error) {
        // Capturar y mostrar cualquier error
        console.error("Error al realizar la acción:", error.message);
        return Promise.reject(error);
    }
}

// Agregar un evento 'submit' al formulario
form.addEventListener('submit', async function (event) {
    // Prevenir el comportamiento por defecto del formulario (refrescar la página)
    event.preventDefault();

    // Recopilar los valores del formulario
    const formData = {
        fullName: document.getElementById('full-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        destination: document.getElementById('destination').value,
        message: document.getElementById('message').value,
    };

    try {
        // Validar y sanitizar los datos del formulario
        const sanitizedData = validateAndSanitize(formData);

        // Deshabilitar el botón de envío
        submitButton.disabled = true;
        submitButton.style.opacity = '0.15';
        submitButton.style.cursor = 'not-allowed';

        // Realizar la acción simulada pasando los datos sanitizados
        await performAction(sanitizedData);

        // Si la acción tiene éxito, mostrar el mensaje de éxito
        successMessage.textContent = '¡Gracias por contactar con nosotros! Nos pondremos en contacto contigo lo antes posible.';
        successMessage.style.display = 'block';
        successMessage.style.color = '#8dceb2';
    } catch (error) {
        // Si la validación o la acción falla, mostrar el mensaje de error
        successMessage.textContent = error.message || 'Ha habido un error. Por favor, inténtalo de nuevo o escríbenos a info@coratravelstudio.com';
        successMessage.style.display = 'block';
        submitButton.disabled = false; // Habilitar de nuevo el botón si hay error
        submitButton.style.opacity = '1';
        submitButton.style.cursor = 'pointer';
        successMessage.style.color = '#f7aaaa';
    }
});

// Seleccionar el textarea
const textarea = document.getElementById('message');

// Agregar un evento 'input' para ajustar la altura dinámicamente
textarea.addEventListener('input', function () {
    // Restablecer la altura para recalcular
    this.style.height = 'auto';
    // Establecer la altura en función del scroll interno
    this.style.height = `${this.scrollHeight}px`;
});

