<?php
$nombreUsuario = $_POST['nombreUsuario'];
if (strlen($nombreUsuario) <= 4) {
    header("Location: ../index.php");
}

$correoElectronico = $_POST['correoElectronico'];
if (strlen($correoElectronico) <= 4) {
    header("Location: ../index.php");
}

$password = $_POST['password'];
if (strlen($password) <= 4) {
    header("Location: ../index.php");
}
$repeatPassword = $_POST['repeatPassword'];

if (!($password === $repeatPassword)) {
    header("Location: ../index.php");
} else {
    require_once "dataBaseManagement.php";
    if (registerUser($nombreUsuario , $correoElectronico, $password)) {
        // REGISTRO COMPLETO
        // ABRIR LOGIN
        session_start();
        
        header("Location: ../index.php");
    }else {
        // ERROR DURANTE EL REGISTRO
        header("Location: ../index.php");
    }
}
?>