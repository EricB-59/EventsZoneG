<?php
    session_unset();
    session_destroy();
    header("Location: ../main.html");
    exit;
?>