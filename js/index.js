// DESPLEGABLE DE SUBMENU
$("#IMG-FLECHA-MENU").click(function(){
    let estadoActualSubMenu = $(".container-submenu").css("display");
    let estadoActualAjustarCuenta = $(".container-ajustar").css("display");

    if (estadoActualSubMenu === "none") {
        if (estadoActualAjustarCuenta !== "none") {
            $(".container-ajustar").slideUp();
            $(".container-ajustar").css("display", "none");
        }
        $(".container-submenu").slideDown();
        $(".container-submenu").css("display", "block");
    }else{
        $(".container-submenu").slideUp();
        $(".container-submenu").css("display", "none");
    }
});


// DESPLEGABLE DE AJUSTAR CUENTA
$("#button_ajustarc").click(function(){
    let estadoActual = $(".container-ajustar").css("display");
    if (estadoActual === "none") {
        $(".container-submenu").slideUp();
        $(".container-submenu").css("display", "none");

        $(".container-ajustar").slideDown();
        $(".container-ajustar").css("display", "block");
    }else{
        $(".container-ajustar").slideUp();
        $(".container-ajustar").css("display", "none");
    }
});

// DESPLEGABLE DE REGISTRAR
$("#UNIRSE-BUTTON").click(function(){
    let estadoActual = $(".container-registrar").css("display");
    if (estadoActual === "none") {
        $("#black_screen").css("display", "inline-block");
        $(".container-registrar").fadeIn();
        $(".container-registrar").css("display", "inline-block");
    }else{
        $(".container-registrar").fadeOut();
        $(".container-registrar").css("display", "none");
    }
});
$("#close_register_button_register").click(function(){
    let estadoActual = $(".container-registrar").css("display");
    if (estadoActual === "none") {
        $("#black_screen").css("display", "inline-block");
        $(".container-registrar").fadeIn();
        $(".container-registrar").css("display", "inline-block");
    }else{
        $("#black_screen").css("display", "none");
        $(".container-registrar").fadeOut();
        $(".container-registrar").css("display", "none");
    }
});

// DESPLEGABLE DE MENU
$(".containermenu").click(function(){
    let estadoActual = $(".container-menu").css("display");
    if (estadoActual === "none") {
        $(".container-menu").slideDown();
        $(".container-menu").css("display", "inline-block");
    }else{
        $(".container-menu").slideUp();
        $(".container-menu").css("display", "none");
    }
});

// DESPLEGABLE DE LOGIN
$("#LOGIN-BUTTON").click(function(){
    let estadoActual = $(".container-login").css("display");
    if (estadoActual === "none") {
        $("#black_screen").css("display", "inline-block");
        $(".container-login").fadeIn();
        $(".container-login").css("display", "inline-block");
    }else{
        $(".container-login").fadeOut();
        $(".container-login").css("display", "none");
    }
});
$("#close_register_button_login").click(function(){
    let estadoActual = $(".container-login").css("display");
    if (estadoActual === "none") {
        $("#black_screen").css("display", "inline-block");
        $(".container-login").fadeIn();
        $(".container-login").css("display", "inline-block");
    }else{
        $("#black_screen").css("display", "none");
        $(".container-login").fadeOut();
        $(".container-login").css("display", "none");
    }
});

// VALIDATE AJUSTAR CUENTA
$("#FORM-AJUSTARCUENTA").validate({
    rules: {
        nombreUsuario:{
            required: true,
            minlength: 5,
            maxlength: 16
        },
        correoElectronico:{
            required: true,
            email: true
        },
        password:{
            required: true,
            minlength: 5,
            maxlength: 20,
        },
        repeatPassword:{
            required: true,
            minlength: 5,
            maxlength: 200,
            equalTo: '[name="password"]'
        }
    },
    messages: {
        nombreUsuario: {
            required: "<div class=ERROR-VALIDATE>INTRODUCE UN NOMBRE</div>",
            minlength: "<div class=ERROR-VALIDATE>El nombre debe tener minimo 5 caracter</div>",
            maxlength: "<div class=ERROR-VALIDATE>El nombre debe tener maximo 16 caracter</div>"
        },
        correoElectronico:{
            required: "<div class=ERROR-VALIDATE>INTRODUCE UN EMAIL</div>",
            email: "<div class=ERROR-VALIDATE>INTRODUCE UNA DIRRECCIÓN VALIDA DE CORREO ELECTRONICO</div>"
        },
        password:{
            required: "<div class=ERROR-VALIDATE>INTRODUCE UNA CONTRASEÑA</div>",
            minlength: "<div class=ERROR-VALIDATE>La contraseña debe tener mínimo 5 carácter</div>",
            maxlength: "<div class=ERROR-VALIDATE>La contraseña debe tener máximo 20 carácter</div>",
            pattern: "<div class=ERROR-VALIDATE>La contraseña debe tener mínimo un número, una mayúscula y una minúscula</div>"
        },
        repeatPassword:{
            required: "<div class=ERROR-VALIDATE>INTRODUCE UNA CONTRASEÑA</div>",
            minlength: "<div class=ERROR-VALIDATE>La contraseña debe tener mínimo 5 carácter</div>",
            maxlength: "<div class=ERROR-VALIDATE>La contraseña debe tener máximo 20 carácter</div>",
            equalTo: "<div class=ERROR-VALIDATE>LA CONTRASEÑA NO COINCIDE</div>",
            pattern: "<div class=ERROR-VALIDATE>La contraseña debe tener mínimo un número, una mayúscula y una minúscula</div>"
        }
    }
});

// VALIDATE REGISTRAR CUENTA
$("#FORM-REGISTRARCUENTA").validate({
    rules: {
        nombreUsuario:{
            required: true,
            minlength: 5,
            maxlength: 16
        },
        correoElectronico:{
            required: true,
            email: true
        },
        password:{
            required: true,
            minlength: 5,
            maxlength: 20,
        },
        repeatPassword:{
            required: true,
            minlength: 5,
            maxlength: 200,
            equalTo: '[name="password"]'
        }
    },
    messages: {
        nombreUsuario: {
            required: "<div class=ERROR-VALIDATE>INTRODUCE UN NOMBRE</div>",
            minlength: "<div class=ERROR-VALIDATE>El nombre debe tener minimo 5 caracter</div>",
            maxlength: "<div class=ERROR-VALIDATE>El nombre debe tener maximo 16 caracter</div>"
        },
        correoElectronico:{
            required: "<div class=ERROR-VALIDATE>INTRODUCE UN EMAIL</div>",
            email: "<div class=ERROR-VALIDATE>INTRODUCE UNA DIRRECCIÓN VALIDA DE CORREO ELECTRONICO</div>"
        },
        password:{
            required: "<div class=ERROR-VALIDATE>INTRODUCE UNA CONTRASEÑA</div>",
            minlength: "<div class=ERROR-VALIDATE>La contraseña debe tener mínimo 5 carácter</div>",
            maxlength: "<div class=ERROR-VALIDATE>La contraseña debe tener máximo 20 carácter</div>",
            pattern: "<div class=ERROR-VALIDATE>La contraseña debe tener mínimo un número, una mayúscula y una minúscula</div>"
        },
        repeatPassword:{
            required: "<div class=ERROR-VALIDATE>INTRODUCE UNA CONTRASEÑA</div>",
            minlength: "<div class=ERROR-VALIDATE>La contraseña debe tener mínimo 5 carácter</div>",
            maxlength: "<div class=ERROR-VALIDATE>La contraseña debe tener máximo 20 carácter</div>",
            equalTo: "<div class=ERROR-VALIDATE>LA CONTRASEÑA NO COINCIDE</div>",
            pattern: "<div class=ERROR-VALIDATE>La contraseña debe tener mínimo un número, una mayúscula y una minúscula</div>"
        }
    }
});

// VALIDATE LOGIN CUENTA
$("#FORM-LOGINCUENTA").validate({
    rules: {
        nombreUsuario:{
            required: true,
            minlength: 5,
            maxlength: 16
        },
        password:{
            required: true,
            minlength: 5,
            maxlength: 20,
        }
    },
    messages: {
        nombreUsuario: {
            required: "<div class=ERROR-VALIDATE>INTRODUCE UN NOMBRE</div>",
            minlength: "<div class=ERROR-VALIDATE>El nombre debe tener minimo 5 caracter</div>",
            maxlength: "<div class=ERROR-VALIDATE>El nombre debe tener maximo 16 caracter</div>"
        },
        password:{
            required: "<div class=ERROR-VALIDATE>INTRODUCE UNA CONTRASEÑA</div>",
            minlength: "<div class=ERROR-VALIDATE>La contraseña debe tener mínimo 5 carácter</div>",
            maxlength: "<div class=ERROR-VALIDATE>La contraseña debe tener máximo 20 carácter</div>",
            pattern: "<div class=ERROR-VALIDATE>La contraseña debe tener mínimo un número, una mayúscula y una minúscula</div>"
        },
    }
});

// COOKIES
let cookiesAceptadas = localStorage.getItem('cookiesAceptadas');
//$(".container-cookies").fadeIn();

$('.login-registro').hide();
$('.mensaje-rechazo-cookies').hide();

$('.aceptar-cookies').click(function(){
    localStorage.setItem('cookiesAceptadas', true);
    $('.mensaje-cookies').hide();
    $('.mensaje-rechazo-cookies').hide();
    $('.login-registro').show();
})
$('.rechazar-cookies').click(function(){
    localStorage.setItem('cookiesAceptadas',false);
    $('.mensaje-cookies').hide();
    $('.mensaje-rechazo-cookies').show();
    $('.login-registro').hide();
})
$('.mensaje-rechazo-cookies').click(function(){
    $('.mensaje-cookies').show();
    $(this).hide();
})