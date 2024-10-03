document.addEventListener("DOMContentLoaded", () => {
    // Función para obtener el año actual y mostrarlo en el footer
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    document.querySelector("#current-year").textContent = getCurrentYear();
});

// Funciones para abrir y cerrar el menú de navegación móvil
function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
    document.body.style.overflow = "hidden";  // Bloquear scroll en el body
}

function closeNav() {
    if (event) event.preventDefault();
    document.getElementById("mobile-menu").style.width = "0%";
    document.body.style.overflow = "auto";  // Restaurar scroll en el body
}


// Efecto de desaparición del texto al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar el texto que quieres hacer desaparecer al hacer scroll
    const textElement = document.getElementById('text');
    
    window.addEventListener('scroll', () => {
        // Obtener la posición del scroll y el tamaño de la ventana
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;

        // Controlar la opacidad y el desplazamiento en función del scroll
        let opacityValue = 1 - (scrollPosition / (windowHeight / 2));  // Reduce la opacidad
        let translateYValue = scrollPosition / 2;  // Desplaza el texto hacia abajo

        // Aplicar los cambios de opacidad y posición
        textElement.style.opacity = Math.max(opacityValue, 0);  // Nunca menos de 0
        textElement.style.transform = `translateY(${translateYValue}px)`;
    });
});
