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
            required: "<div class=ERROR-VALIDATE>INTRODUCE UN EMAIL</div>",
            email: "<div class=ERROR-VALIDATE>INTRODUCE UNA DIRRECCIÓN VALIDA DE CORREO ELECTRONICO</div>"
        },
        problem:{
            required: "<div class=ERROR-VALIDATE>INTRODUCE UN PROBLEMA</div>"
        },
        subject:{
            required: "<div class=ERROR-VALIDATE>INTRODUCE UN ASUNTO</div>",
            minlength: "<div class=ERROR-VALIDATE>El asunto debe tener minimo 1 caracter</div>",
            maxlength: "<div class=ERROR-VALIDATE>El asunto debe tener maximo 200 caracter</div>"
        }
    }
})

$("#but-Validar").click(function () {
    $("#FORM_CONTACT").valid();
})
