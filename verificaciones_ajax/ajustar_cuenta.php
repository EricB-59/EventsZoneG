<?php
$valido = true;
//-----------------------------------------------------------------------------------
require "../bbdd.php";

$name = $_POST['nombreUsuarioRegistro'];
if ($name) {
    $valido = false;
}

$email = $_POST['correoElectronico'];
if ($email) {
    $valido = false;
}

$password = $_POST['password'];
if ($password) {
    $valido = false;
}

$repeatPassword = $_POST['repeatPassword'];
if ($repeatPassword) {
    $valido = false;
}

if ($valido) {
    $conexion = conectar("localhost", "root", "", "eventzoneg");
    $select = "UPDATE eventzoneg.usuario SET nombreUsuario = '$name', correoElectronico = '$email', contraseña = '$password'";
    $resultado = mysqli_query($conexion, $select);
}

echo json_encode($valido);
?>
