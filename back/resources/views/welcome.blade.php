<!DOCTYPE html>
<html>
<head>
    <title>Bienvenido a Gym Booker</title>
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
            background-color: #e2e8f0; /* bg-gray-200 */
            padding: 24px; /* py-24 */
            text-align: center;
            margin-top: 40px;
        }
        .footer-icons a {
            color: #7f8c8d; /* gray-400 */
            margin: 0 10px;
            text-decoration: none;
        }
        .footer-icons a:hover {
            color: #2c3e50; /* darken the icon on hover */
        }
    </style>
</head>
<body>
    <h1>Bienvenido {{ $user->nombre }} a Gym Booker</h1>
    <p>Estamos felices de tenerte aquí. Empezá a bookear y organizar tu vida con nosotros. Nuestra plataforma te ayudará a gestionar tus reservas de gimnasio de manera fácil y eficiente.</p>
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
