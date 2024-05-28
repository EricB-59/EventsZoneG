<?php
$valido = true;
//-----------------------------------------------------------------------------------
require "../bbdd.php";

$nombreUsuario = $_POST['nombreUsuarioAjustar'];
if (strlen($nombreUsuario) <= 4) {
    $valido = false;
}
$correoElectronico = $_POST['correoElectronicoAjustar'];
if (strlen($correoElectronico) <= 4) {
    $valido = false;
}
$password = $_POST['password'];
if (strlen($password) <= 4) {
    $valido = false;
}
$valido = ($password == $_POST['repeatPassword']);

if ($valido) {
    session_start();
    $nombreSession = $_SESSION['nameUser'];
    $conexion = conectar("localhost", "root", "", "eventzoneg");
    $select = "UPDATE eventzoneg.usuario SET nombreUsuario = '$nombreUsuario', correoElectronico = '$correoElectronico', contraseña = '$password' WHERE nombreUsuario ='$nombreSession'";
    $resultado = mysqli_query($conexion, $select);
}

echo json_encode($valido);
?>
