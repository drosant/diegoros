document.addEventListener("DOMContentLoaded", () => {

    const initialDelayCora = 1000; // Ajusta este valor en milisegundos
    const initialDelayCounter = 3000; // Ajusta este valor en milisegundos
    const textElement = document.querySelector("h1"); // Selecciona el elemento de texto
    const counter = document.querySelector("#countdown"); // Selecciona el contador

    // Añade la clase 'fade-in' inicialmente
    textElement.classList.add("fade-in");
    counter.classList.add("fade-in");

    // Aplica la clase 'visible' después del delay
    setTimeout(() => {
        textElement.classList.add("visible");
    }, initialDelayCora);
    // Aplica la clase 'visible' después del delay
    setTimeout(() => {
        counter.classList.add("visible");
    }, initialDelayCounter);


    const countdownElement = document.getElementById("countdown");
    const launchDate = new Date("2025-01-19:00:00").getTime(); // Cambia la fecha al día de lanzamiento

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = launchDate - now;

        if (timeRemaining < 0) {
            countdownElement.textContent = "¡Lanzamiento!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Actualiza la cuenta atrás cada segundo
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Llama inmediatamente para evitar el primer segundo vacío
});
