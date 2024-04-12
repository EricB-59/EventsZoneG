// DESPLEGABLE DE AJUSTAR CUENTA
$("#IMG-FLECHA-MENU").click(function(){
    let estadoActual = $(".container-ajustar").css("display");
    if (estadoActual === "none") {
        $(".container-ajustar").slideDown();
        $(".container-ajustar").css("display", "inline-block");
    }else{
        $(".container-ajustar").slideUp();
        $(".container-ajustar").css("display", "none");
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