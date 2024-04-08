$("#FORM_CONTACT").validate({
    rules: {
        email:{
            required: true,
            email: true
        },
        problem:{
            required: true,
        },
        subject:{
            required: true,
            minlength: 1,
            maxlength: 200
        }
    },
    messages: {
        email:{
            required: "INTRODUCE UN EMAIL",
            email: "INTRODUCE UNA DIRRECCIÓN VALIDA DE CORREO ELECTRONICO"
        },
        problem:{
            required: "INTRODUCE UN PROBLEMA"
        },
        subject:{
            required: "INTRODUCE UN ASUNTO",
            minlength: "El asunto debe tener minimo 1 caracter",
            maxlength: "El asunto debe tener maximo 200 caracter"
        }
    }
})

$("#but-Validar").click(function () {
    $("#FORM_CONTACT").valid();
})
