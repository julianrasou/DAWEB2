<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contraseña</title>
</head>
<body>
    <h3>Contraseña generada: </h3>
    <?php
    include 'funcion.php';
    $min = $_POST["min"];
    $max = $_POST["max"];
    $tipo = $_POST["tipo"];

    echo "<p>".generarContraseña($min, $max, $tipo)."</p>";
    ?>

    
</body>
</html>