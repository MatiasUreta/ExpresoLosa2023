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



//MODAL
/*$(document).ready(function () {
    // Verifica si la cookie 'mostrarModal' existe
    if (document.cookie.split(';').some((item) => item.trim().startsWith('mostrarModal='))) {
        // No muestra el modal si la cookie existe
    } else {
        // Muestra el modal si la cookie no existe
        $('#myModal').modal('show');
        // Crea la cookie 'mostrarModal' para que el modal no se muestre de nuevo
        document.cookie = "mostrarModal=1";
    }
});*/

/*formulario*/
/*const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.post('/submit-form', (req, res) => {
    let mailOptions = {
        from: req.body.email, // dirección de correo del remitente
        to: '', // dirección de correo del destinatario
        subject: 'Nueva consulta', // Línea de asunto
        text: req.body.texto // cuerpo de texto plano
    };

    switch(req.body.opciones) {
        case 'seguimientos':
            mailOptions.to = 'seguimientos@logisticalosa.com.ar';
            break;
        case 'reclamos':
            mailOptions.to = 'reclamos@logisticalosa.com.ar';
            break;
        case 'presupuestos':
            mailOptions.to = 'comercial@logisticalosa.com.ar';
            break;
        case 'facturacion':
            mailOptions.to = 'administracion@logisticalosa.com.ar';
            break;
        case 'cobranzas':
            mailOptions.to = 'cobranzas@logisticalosa.com.ar';
            break;
        default:
            // manejar caso por defecto
    }

    // crear objeto de transporte reutilizable usando SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tuCorreo@gmail.com',
            pass: 'tuContraseña'
        }
    });

    // enviar correo con objeto de transporte definido
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Mensaje enviado: %s', info.messageId);   
    });
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));*/