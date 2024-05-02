<?php
function conn() {
    $servername = "localhost"; $username = "root"; $password = ""; $dbname = "eventszoneg";
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }
    return $conn;
}

function desconect($conn) {
    mysqli_close($conn);
}

/*
function registerUser($nameUser , $email, $password){
    $query = "INSERT INTO EventsZoneG. (nombre, telefono, sexo, edad, experiencia, especialidad) 
              VALUE ('$name','$telephone','$gender','$age','$ageExperiencie','$espec')";

    $conn = conn();
    $result = $conn->query($query);
    
    desconect($conn);
    return $result;
}
*/

?>