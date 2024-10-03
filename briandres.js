document.addEventListener("DOMContentLoaded", () => {
    // Función para obtener el año actual y mostrarlo en el footer
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    document.querySelector("#current-year").textContent = getCurrentYear();
});


function openNav() {
    var menu = document.getElementById("mobile-menu");
    menu.style.display = "block"; // Mostrar el menú
    menu.style.width = "100%"; // Ajusta esto según el ancho que quieras darle al menú
    document.body.style.overflow = "hidden"; // Detiene el scroll del cuerpo cuando el menú está abierto
}

function closeNav() {
    var menu = document.getElementById("mobile-menu");
    menu.style.display = "none"; // Oculta el menú nuevamente
    menu.style.width = "0%"; // Reinicia el ancho del menú
    document.body.style.overflow = ""; // Restablece el scroll del cuerpo
}

window.addEventListener("pageshow", function(event) {
    if (event.persisted || window.performance && window.performance.navigation.type === 2) {
        closeNav(); // Asegúrate de que el menú móvil esté cerrado al regresar
    }
});


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
