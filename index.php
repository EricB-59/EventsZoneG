<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>EventsZoneG</title>
    <link rel="icon" type="image/x-icon" href="images/Others/Logo-EventzoneG.png">

    <link rel="stylesheet" href="js/slick-1.8.1/slick/slick.css">
    <link rel="stylesheet" href="js/slick-1.8.1/slick/slick-theme.css"> 
    <link rel="stylesheet" href="css/index.css">

    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="js/dist/jquery.validate.min.js"></script>
    <script src="js/dist/additional-methods.js"></script>
    <script src="js/slick-1.8.1/slick/slick.js"></script>
    <script src="js/index.js" defer></script>

    <script src="https://cdn.lordicon.com/lordicon.js" defer></script>
</head>
<body>
    <div id="black_screen"></div>
    <!-- HEADER -->
    <header>
        <div class="header-container">
            <nav>
                <div class="containermenu">
                    <div>
                        <div class="menu"></div>
                        <div class="menu"></div>
                        <div class="menu"></div>
                    </div>
                    <p>MENÚ</p>
                </div>
            </nav>
            <div id="tituloHeader">
                <h1>EventsZoneG</h1>
            </div>
            <img class="logo" src="images/INDEX-IMGs/LOGO-final.svg" alt="Logo">
            <img class="hexagonos" src="images/Others/Hexagonos.svg" alt="hex">
            <div class="apartadouser">
            <?php
            require_once "./php/dataBaseManagement.php";
            
            $i = 0;
            if($i == 0){
                echo '
                    <div class="descripcion_login">
                        <div id="descripcion_login_div">
                            <p class="descripcion_links">REGISTRAR CUENTA</p>
                            <p class="descripcion_links">|</p>
                            <p class="descripcion_links">LOGIN</p>
                        </div>
                    </div>
                    ';
            } else {
                echo '
                    <div class="apartadouser">
                        <div class="fotouser"></div>
                        <div class="descripcion_user">
                            <div>
                                <p>NOMBRE USUARIO</p>
                                <img src="images/INDEX-IMGs/FlechaMenuUsuario.svg" alt="flecha" id="IMG-FLECHA-MENU">
                            </div>
                            <div class="boton_perfil">
                                <p>PERFIL FORO</p>
                            </div>
                        </div>
                    </div>
                    ';
            }
            ?>
            </div>
        </div>
        <hr>
        <div class="header-nav">
            <div class="menusecciones">
                <div class="seccion inicio">INICIO
                    <img src="images/Others/house.svg" alt="inicio">
                </div>
                <div class="seccion eventos">EVENTOS</div>
                <div class="seccion noticias">NOTICIAS</div>
                <div class="seccion foro">FORO</div>
                <div class="seccion contacto">CONTACTO</div>
            </div>
            <div class="redes">
                <a href="#" target="_blank">
                    <div> <img src="images/Others/Instagram.svg" alt="I">
                        <p>INSTAGRAM</p>
                    </div>
                </a>
                <a href="#" target="_blank">
                    <div> <img src="images/Others/Facebook.svg" alt="F">
                        <p>FACEBOOK</p>
                    </div>
                </a>
            </div>
        </div>
    </header>
    <!-- /HEADER -->

    <!-- MENU | MAIN PAGE -->
    <div class="container-menu">
        <h1>MENU</h1>
        <div class="container-menu-enlaces">
            <a href="esdeveniments.html">EVENTOS</a>
            <a href="noticias.html">NOTICIAS</a>
            <a href="#">FORO</a>
            <a href="form.html">CONTACTO</a>
        </div>
    </div>
    <!-- /MENU | MAIN PAGE -->

    <!-- SUB MENU-->
    <div class="container-submenu">
        <button id="button_ajustarc">Ajustar cuenta</button>
        <button id="button_closes">Cerrar sesión</button>
    </div>
    <!-- /SUB MENU-->

    <!-- AJUSTAR CUENTA | MAIN PAGE -->
    <div class="container-ajustar">
        <h1>AJUSTAR CUENTA</h1>
        <div class="foto-ajustarcuenta">
            <div class="foto">
                <div class="circulo-camara">
                    <img src="images/Others/camaraPerfil.svg" alt="cámara">
                </div>
            </div>
        </div>
        <form action="#" method="POST" id="FORM-AJUSTARCUENTA">
            <label class="name-user"> NUEVO NOMBRE USUARIO <br>
                <img class="icono-nameuser" src="images/Others/lapiz.svg" alt="icono">
                <input class="input_nameuser" type="text" placeholder="NOMBRE USUARIO" name="nombreUsuario">
            </label>
            <div class="div-correo">
                <img src="images/Others/correo.svg" alt="icono">
                <input type="email" placeholder="CORREO ELECTRÓNICO" name="correoElectronico"><br>
            </div>
            <div class="div-password">
                <img src="images/Others/password.svg" alt="icono">
                <input type="password" placeholder="CONTRASEÑA" name="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"><br>
            </div>
            <p class="regla">La contraseña debe tener al menos 5 caracteres.</p>
            <div class="div-password">
                <img src="images/Others/password.svg" alt="icono">
                <input type="password" placeholder="CONTRASEÑA" name="repeatPassword" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"><br>
            </div>
            <div class="containerEnviar">
                <input class="boton-enviar" type="submit" value="CONFIRMAR CAMBIOS">
            </div>
        </form>
    </div>
    <!-- /AJUSTAR CUENTA | MAIN PAGE -->
    <!-- REGISTRAR CUENTA | MAIN PAGE -->
    <div class="container-registrar">
        <h1>REGISTRAR CUENTA</h1>
        <button id="close_register_button_register"><img src="images/INDEX-IMGs/image 50.svg" alt="closeScreen"></button>
        <div class="foto-ajustarcuenta">
            <div class="foto">
                <div class="circulo-camara">
                    <img src="images/Others/camaraPerfil.svg" alt="cámara">
                </div>
            </div>
        </div>
        <form action="#" method="POST" id="FORM-REGISTRARCUENTA">
            <label class="name-user"> NUEVO NOMBRE USUARIO <br>
                <img class="icono-nameuser" src="images/Others/lapiz.svg" alt="icono">
                <input class="input_nameuser" type="text" placeholder="NOMBRE USUARIO" name="nombreUsuario">
            </label>
            <div class="div-correo">
                <img src="images/Others/correo.svg" alt="icono">
                <input type="email" placeholder="CORREO ELECTRÓNICO" name="correoElectronico"><br>
            </div>
            <div class="div-password">
                <img src="images/Others/password.svg" alt="icono">
                <input type="password" placeholder="CONTRASEÑA" name="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"><br>
            </div>
            <p class="regla">La contraseña debe tener al menos 5 caracteres.</p>
            <div class="div-password">
                <img src="images/Others/password.svg" alt="icono">
                <input type="password" placeholder="CONTRASEÑA" name="repeatPassword" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"><br>
            </div>
            <div class="containerEnviar">
                <input class="boton-enviar" type="submit" value="CONFIRMAR CAMBIOS">
            </div>
        </form>
    </div>
    <!-- /REGISTRAR CUENTA | MAIN PAGE -->
    <!-- LOGIN | MAIN PAGE -->
    <div class="container-login">
        <h1>LOGIN</h1>
        <button id="close_register_button_login"><img src="images/INDEX-IMGs/image 50.svg" alt="closeScreen"></button>
        <form action="#" method="POST" id="FORM-LOGINCUENTA">
            <label class="name-user">NOMBRE USUARIO<br>
                <img class="icono-nameuser" src="images/Others/lapiz.svg" alt="icono">
                <input class="input_nameuser" type="text" placeholder="NOMBRE USUARIO" name="nombreUsuario">
            </label>
            <div class="div-password">
                <img src="images/Others/password.svg" alt="icono">
                <input type="password" placeholder="CONTRASEÑA" name="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"><br>
            </div>
            <div class="containerEnviar">
                <input class="boton-enviar" type="submit" value="CONFIRMAR CAMBIOS">
            </div>
        </form>
    </div>
    <!-- /LOGIN | MAIN PAGE -->

    <!-- TEXT-PRESENTATION | MAIN PAGE -->
    <div class="centrar-container-presentacion">
        <div class="container-presentacion">
            <div class="presentacion">
                <h1>EVENTZONEG</h1>
                <h1>EVENTZONEG</h1>
                <h1>EVENTZONEG</h1>
                <div class="texto-presentacion">
                    <p>Aquí encontrarás todo lo que necesitas para mantenerte al día con tus 
                        juegos favoritos. Sumérgete en un mundo lleno de información, noticias 
                        actualizadas y una comunidad vibrante.
                    </p>
                    <button id="UNIRSE-BUTTON"><img src="images/INDEX-IMGs/Vector4.svg" alt=""><p>UNIRSE</p></button>
                </div>
            </div>
            <div class="div-video">
                <video src="images/INDEX-IMGs/Video-overwatch.mp4" autoplay loop muted></video>
            </div>
            <div class="linea-gif"></div>
        </div>
    </div>
    <div class="div-titulo">
        <h1 class="titulo-novedades">NOVEDADES</h1>
    </div>
    <!-- /TEXT-PRESENTATION | MAIN PAGE -->

    <!-- NOTICIAS-EVENTOS-NOVEDADES | MAIN PAGE -->
    <div class="slider-novedades">
        <div class="container-novedad novedad-derecha">
            <div class="novedad">
                <div class="circulo">
                    <div class="circulo-gradient"> <!-- CIRCULOS -->
                        <div class="circulo-entremedio">
                            <div class="circulo-inferior">
                                <lord-icon src="https://cdn.lordicon.com/ijahpotn.json" trigger="loop" delay="2000"
                                    colors="primary:#ffffff" style="width:60px;height:60px">
                                </lord-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Noticias</h1>
                <p>Non tenetur quia ab dolores quis At iusto doloribus? Et quia atque nam quia dignissimos et enim sunt.
                </p>
            </div>
        </div>
        <div class="container-novedad novedad-centrar">
            <div class="novedad">
                <div class="circulo">
                    <div class="circulo-gradient"> <!-- CIRCULOS -->
                        <div class="circulo-entremedio">
                            <div class="circulo-inferior">
                                <lord-icon src="https://cdn.lordicon.com/abfverha.json" trigger="loop" delay="2000"
                                    colors="primary:#ffffff" style="width:60px;height:60px">
                                </lord-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Eventos</h1>
                <p>Non tenetur quia ab dolores quis At iusto doloribus? Et quia atque nam quia dignissimos et enim sunt.
                </p>
            </div>
        </div>
        <div class="container-novedad novedad-izquierda">
            <div class="novedad">
                <div class="circulo">
                    <div class="circulo-gradient"> <!-- CIRCULOS -->
                        <div class="circulo-entremedio">
                            <div class="circulo-inferior">
                                <lord-icon src="https://cdn.lordicon.com/fdxqrdfe.json" trigger="loop" delay="2000"
                                    colors="primary:#ffffff" style="width:60px;height:60px">
                                </lord-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Foro</h1>
                <p>Non tenetur quia ab dolores quis At iusto doloribus? Et quia atque nam quia dignissimos et enim sunt.
                </p>
            </div>
        </div>
    </div>
    <!-- /NOTICIAS-EVENTOS-NOVEDADES | MAIN PAGE -->

    <!-- ARTICULO DE EVENTOS | MAIN PAGE -->
    <!-- /ARTICULO DE EVENTOS | MAIN PAGE -->

    <!-- COOKIES -->
    <div class="container-cookies">
        <div class="mensaje-cookies">
            <div class="imagenGalleta">
                <img src="/images/INDEX-IMGs/AceptarGalleta.PNG" alt="Aceptar Cookies">
            </div>
            <div class="cookies">
                <p> Este sitio web utiliza cookies para mejorar tu experiencia.
                    Por favor acepta el uso de cookies para poder iniciar la sesión.</p>
                <div class="cookies_button">
                    <button class="aceptar-cookies">Aceptar Cookies</button>
                    <button class="rechazar-cookies">Rechazar Cookies</button>
                </div>
            </div>
        </div>
        <div class="login-registro">
            <!-- Formulario donde se metera el login-->
            <p>Formulario Login</p>
        </div>
        <button class="mensaje-rechazo-cookies">Mostrar uso de las cookies</button>
    </div>
    <!-- /COOKIES -->
    <button id="LOGIN-BUTTON">LOGIN</button>

</body>
</html>