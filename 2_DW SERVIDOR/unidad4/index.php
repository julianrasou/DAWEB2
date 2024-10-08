<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form action="procesar.php" method="post">
        <p>Nombre: <input type="text" name="tNombre"/></p>
        <p>Apellido: <input type="text" name="tApellido"/></p>
        <p>Sexo:
            <input type="radio" name="rSexo" value="mujer">Mujer
            <input type="radio" name="rSexo" value="hombre">Hombre
        </p>
        <input type="submit" name="bEnviar" value="Enviar"/>

    </form>



</body>
</html>