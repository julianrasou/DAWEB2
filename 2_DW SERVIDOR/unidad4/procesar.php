<?php

echo '<br>$_REQUEST';
print_r($_REQUEST);
echo '<br>$_POST';
print_r($_POST);
echo '<br>$_GET';
print_r($_GET);echo '<br>';


echo '<br>Su nombre es '.$_REQUEST["tNombre"].'<br/>';
echo 'Su nombre es '.$_POST["tNombre"].'<br/>';
echo 'Su nombre es '.$_POST["tApellido"].'<br/>';
echo 'Su sexo es '.$_POST["rSexo"].'<br>';

$nombre = mb_strtoupper($_POST["tNombre"]);


