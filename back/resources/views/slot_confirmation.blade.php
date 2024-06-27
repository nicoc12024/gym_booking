<!DOCTYPE html>
<html>
<head>
    <title>Confirmación de Reserva - Gym Booker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        h1 {
            font-size: 20px;
        }
        p {
            font-size: 14px;
        }
        .signature {
            margin-top: 20px;
        }
        .ps {
            margin-top: 40px;
            font-style: italic;
            font-size: 12px;
            color: #7f8c8d;
        }
        .footer {
            background-color: #e2e8f0; 
            padding: 24px;
            text-align: center;
            margin-top: 40px;
        }
        .footer-icons a {
            color: #7f8c8d; 
            margin: 0 10px;
            text-decoration: none;
        }
        .footer-icons a:hover {
            color: #2c3e50; 
        }
    </style>
</head>
<body>
    <h1>Hola {{ $user->name }}, tu reserva en Gym Booker está confirmada</h1>
    <p>Gracias por reservar con nosotros. Aquí están los detalles de tu reserva:</p>
    <p><strong>Fecha:</strong> {{ $slot_date }}</p>
    <p><strong>Hora:</strong> {{ $slot_time }}</p>
    <p>Estamos felices de tenerte aquí. Nuestra plataforma te ayudará a gestionar tus reservas de gimnasio de manera fácil y eficiente.</p>
    <p>Si necesitas ayuda en cualquier momento, no dudes en ponerte en contacto con nuestro equipo de soporte. Estamos aquí para asistirte en todo lo que necesites.</p>
    <p class="signature">Un saludo,</p>
    <p class="signature">El equipo de Gym Booker</p>
    <p class="ps">P.D. No olvides seguirnos en nuestras redes sociales para estar al tanto de las últimas novedades y promociones exclusivas para nuestros miembros.</p>

    <div class="footer">
        <div class="footer-icons">
            <a href="https://www.facebook.com" target="_blank">
                <img src="https://img.icons8.com/ios-filled/50/7f8c8d/facebook-new.png" alt="Facebook" style="width: 16px; height: 16px;">
            </a>
            <a href="https://www.instagram.com" target="_blank">
                <img src="https://img.icons8.com/ios-filled/50/7f8c8d/instagram-new.png" alt="Instagram" style="width: 16px; height: 16px;">
            </a>
            <a href="https://www.twitter.com" target="_blank">
                <img src="https://img.icons8.com/ios-filled/50/7f8c8d/twitter.png" alt="Twitter" style="width: 16px; height: 16px;">
            </a>
        </div>
        <p style="font-size: 12px;">© 2024 Gym Booker. Todos los derechos reservados.</p>
    </div>
</body>
</html>
