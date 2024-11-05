$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// JavaScript para añadir un estilo moderno al nav-item y manejar la versión móvil y escritorio

const navItems = document.querySelectorAll('.nav-item'); // Almacena los elementos seleccionados en una constante para evitar múltiples selecciones

function handleMouseEvent(event, isMouseEnter) {
    const item = event.target;
    // Detecta si el ancho de la pantalla es menor o igual a 768px (versión móvil)
    if (window.innerWidth <= 768) {
        if (isMouseEnter) {
            item.dataset.originalText = item.textContent; // Guarda el texto original
            item.style.transition = "all 0.6s ease"; // Transición más suave para cambios en la versión móvil
            item.style.opacity = "0"; // Gradualmente hace desaparecer el texto
            setTimeout(() => {
                item.innerHTML = '<span class="treble-clef">𝄞</span>'; // Cambia el texto a una llave de sol en versión móvil
                item.style.opacity = "1"; // Gradualmente hace aparecer la llave de sol
                item.style.color = "#ff4500"; // Cambia el color a un tono naranja brillante para que destaque en móvil
            }, 300); // Cambia el contenido después de que la opacidad sea cero
        } else {
            item.style.transition = "all 0.6s ease"; // Transición más suave para restaurar el texto
            item.style.opacity = "0"; // Gradualmente hace desaparecer la llave de sol
            setTimeout(() => {
                item.textContent = item.dataset.originalText; // Restaura el texto original
                delete item.dataset.originalText; // Limpia el dataset para evitar almacenamiento innecesario
                item.style.opacity = "1"; // Gradualmente hace aparecer el texto original
                item.style.color = "#ffffff"; // Vuelve al color original blanco
            }, 300); // Cambia el contenido después de que la opacidad sea cero
        }
    } else {
        // Comportamiento para la versión de escritorio
        if (isMouseEnter) {
            item.dataset.originalText = item.textContent; // Guarda el texto original
            item.style.transition = "transform 0.5s ease, text-shadow 0.5s ease, color 0.5s ease"; // Transición suave para propiedades específicas
            item.style.transform = "scale(1.15) rotate(2deg)"; // Agranda ligeramente el texto y lo inclina para darle un efecto moderno
            item.style.textShadow = "0 4px 15px rgba(0, 136, 255, 0.7)"; // Añade un resplandor azul moderno
            item.style.color = "#0088ff"; // Cambia el color del texto a un azul brillante
        } else {
            item.textContent = item.dataset.originalText; // Restaura el texto original
            delete item.dataset.originalText; // Limpia el dataset para evitar almacenamiento innecesario
            item.style.transform = "scale(1.0) rotate(0deg)"; // Vuelve el texto a su tamaño y orientación original
            item.style.textShadow = "none"; // Elimina la sombra del texto
            item.style.color = "#ffffff"; // Vuelve al color original blanco
        }
    }
}

navItems.forEach(item => {
    item.addEventListener('mouseenter', (event) => handleMouseEvent(event, true));
    item.addEventListener('mouseleave', (event) => handleMouseEvent(event, false));
});


