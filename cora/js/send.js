document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.querySelector(".submit-btn");
    const successMessage = document.querySelector(".success-message");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita el envío estándar

        // Recopilar los valores del formulario
        const formData = new FormData(form);

        /*
        // Validar email antes de enviar
        const email = formData.get("email");
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            showMessage("Formato de email no válido.", "error");
            return;
        }*/

        // Deshabilitar botón mientras se envía
        toggleSubmitButton(false);

        try {
            // Enviar los datos a Formspree
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });

            if (!response.ok) {
                throw new Error("No se pudo enviar el formulario. Inténtalo de nuevo.");
            }

            // Mostrar mensaje de éxito y resetear formulario
            showMessage("¡Gracias por contactar con nosotros! Nos pondremos en contacto contigo lo antes posible.", "success");
            form.reset();
        } catch (error) {
            // Mostrar error si algo falla
            showMessage(error.message, "error");
        } finally {
            // Habilitar el botón de nuevo
            toggleSubmitButton(true);
        }
    });

    // Función para mostrar mensajes de éxito/error
    function showMessage(text, type) {
        successMessage.textContent = text;
        successMessage.style.display = "block";
        successMessage.style.color = type === "success" ? "#819885" : "#f7aaaa";
    }

    // Función para deshabilitar/habilitar el botón de envío
    function toggleSubmitButton(enabled) {
        submitButton.disabled = !enabled;
        submitButton.style.opacity = enabled ? "1" : "0.5";
        submitButton.style.cursor = enabled ? "pointer" : "not-allowed";
    }

    // Ajustar altura del textarea dinámicamente
    document.getElementById("message").addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = `${this.scrollHeight}px`;
    });
});
