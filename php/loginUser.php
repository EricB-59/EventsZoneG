<?php
$nombreUsuario = $_POST['nombreUsuario'];
if (strlen($nombreUsuario) <= 4) {
    header("Location: ../index.php");
}

$password = $_POST['password'];
if (strlen($password) <= 4) {
    header("Location: ../index.php");
}

require_once "dataBaseManagement.php";
$user = loginUser($nombreUsuario, $password);
while ($fila = mysqli_fetch_array($user)) {
    if ($fila['nameUser'] == $nombreUsuario && $fila['passwordUser'] === $password) {
        session_start();
        $_SESSION['user_information'] = [$fila['typeUser'], $fila['nameUser'], $fila['passwordUser']];
    }
}
?>