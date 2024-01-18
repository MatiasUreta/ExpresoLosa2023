

/*ANIMACIONES*/
// Función para detectar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Escucha el evento de scroll
window.addEventListener('scroll', function (event) {
    const elements = document.querySelectorAll('.scale-in-ver-center');
    elements.forEach(function (element) {
      if (isInViewport(element)) {
        element.classList.add('animate');
      }
    });
  }, false);
  


/*ANIMACIONES DE FOCUS*/
// Función para detectar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Escucha el evento de scroll
window.addEventListener('scroll', function (event) {
    // Obtén todos los elementos con la clase 'focus-in-expand'
    const elements = document.querySelectorAll('.focus-in-expand');
    elements.forEach(function (element) {
        if (isInViewport(element)) {
            // Si el elemento está en el viewport, agrega la clase 'animate'
            element.classList.add('animate');
        }
    });
}, false);


//ANIMACION PARA EL LOGO
$(document).ready(function () {
    $(window).scroll(function () {
        $('.roll-in-top').each(function () {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                // El elemento está en la vista, agrega la clase de animación
                $(this).addClass('roll-in-top');
            } else {
                // El elemento no está en la vista, remueve la clase de animación
                $(this).removeClass('roll-in-top');
            }
        });
    });
});
