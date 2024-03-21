<?php
$emailTo = $_POST['emailTo'];
$to = '';

switch ($emailTo) {
    case '1':
        $to = 'seguimientos@logisticalosa.com.ar';
        break;
    case '2':
        $to = 'reclamos@logisticalosa.com.ar';
        break;
    case '3':
        $to = 'comercial@logisticalosa.com.ar';
        break;
    case '4':
        $to = 'administracion@logisticalosa.com.ar';
        break;
    case '5':
        $to = 'cobranzas@logisticalosa.com.ar';
        break;
}
$subject = 'Consulta desde el sitio web'; // Aquí puedes poner el asunto del correo
$message = $_POST['texto']; // Aquí recogemos el texto que el usuario ha introducido en el formulario
$headers = 'From: ' . $_POST['email']; // Aquí recogemos el correo del usuario que ha rellenado el formulario

if (mail($to, $subject, $message, $headers)) {
    echo 'Correo enviado correctamente';
} else {
    echo 'Hubo un error al enviar el correo';
}

?>
