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

