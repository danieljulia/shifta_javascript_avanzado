<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $emailTo = htmlspecialchars($_POST['email_to']);

    // Validar los datos del formulario
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Configurar el email
        $subject = "Shifta - FrontEnd: Nuevo mensaje de $name";
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $emailBody = "Nombre: $name\nEmail: $email\nMensaje:\n$message";

        // Enviar el email
        if (mail($emailTo, $subject, $emailBody, $headers)) {
            //echo "Mensaje enviado con éxito.";
            header("Location: {$_SERVER['HTTP_REFERER']}");
        } else {
            echo "Hubo un error al enviar el mensaje.";
        }

        // Guardar los datos en un archivo XML
        $xmlFile = 'contact_data.xml';

        // Crear un nuevo documento XML si no existe
        if (!file_exists($xmlFile)) {
            $xml = new SimpleXMLElement('<contacts></contacts>');
        } else {
            $xml = simplexml_load_file($xmlFile);
        }

        // Añadir los datos al documento XML
        $contact = $xml->addChild('contact');
        $contact->addChild('name', $name);
        $contact->addChild('email', $email);
        $contact->addChild('message', $message);
        $contact->addChild('date', date('Y-m-d H:i:s'));

        // Guardar el archivo XML
        $xml->asXML($xmlFile);
    } else {
        // echo "Por favor, rellene todos los campos del formulario.";
        // Go to the previous page
        header("Location: {$_SERVER['HTTP_REFERER']}");
    }
}
