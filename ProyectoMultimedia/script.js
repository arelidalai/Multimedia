// Función para crear bolitas
function crearBolitas() {
    const numeroBolitas = 100; // Número de bolitas a crear
    for (let i = 0; i < numeroBolitas; i++) {
        const bolita = document.createElement("div");
        bolita.classList.add("bolita");
        
        // Tamaño y posición inicial aleatorios
        const tamaño = Math.random() * 80 + 20; // Tamaño entre 20px y 100px
        const posX = Math.random() * window.innerWidth;
        const retraso = Math.random() * -20 + "s";
        const duracion = Math.random() * 20 + 10 + "s"; // Duración entre 10s y 30s

        bolita.style.width = tamaño + "px";
        bolita.style.height = tamaño + "px";
        bolita.style.left = posX + "px";
        bolita.style.animationDelay = retraso;
        bolita.style.animationDuration = duracion;

        document.body.appendChild(bolita);
    }
}

// Llamar a la función al cargar la página
crearBolitas();