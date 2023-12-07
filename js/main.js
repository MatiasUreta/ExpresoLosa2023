/*MODO CLARO Y OSCURO */
function setTheme(theme) {
    var body = document.body;

    // Elimina las clases de tema existentes
    body.classList.remove('theme-light', 'theme-dark');

    if (theme === 'auto') {
        // Detecta la preferencia del sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = 'dark';
        } else {
            theme = 'light';
        }
    }

    // Agrega la nueva clase de tema
    if (theme === 'light') {
        body.classList.add('theme-light');
    } else if (theme === 'dark') {
        body.classList.add('theme-dark');
    }
}

/*MENU LATERAL*/
function toggleSidebar() {
    var sidebar = document.querySelector(".menuLateral");
    sidebar.classList.toggle("expanded");
}



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
    // Obtén todos los elementos con la clase 'scale-in-ver-center'
    const elements = document.querySelectorAll('.scale-in-ver-center');
    elements.forEach(function (element) {
        if (isInViewport(element)) {
            // Si el elemento está en el viewport, agrega la clase 'animate'
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
