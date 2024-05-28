$("#VALIDAR-AJAX").on('click', function() {
    let email = $("#email-verificacion").val();
    let nameUser = $(".input_nameuser").val();
    let password = $("#pass").val();
    let repeatPassword = $("#passRepeat").val();

    $.ajax({
      url: "./verificaciones_ajax/ajustar_cuenta.php",
      type: "POST",
      data: {   
                nombreUsuarioAjustar: nameUser,
                correoElectronicoAjustar: email,
                password: password,
                repeatPassword: repeatPassword
            },
      dataType: 'json',
      success: function(respuesta){
        if (respuesta == true) {
          $(".contenedor-toast").html(`
                <div>
                    <p>ACTUALIZADO CORRECTAMENTE</p>
                </div>
          `);
        } else {
          $(".contenedor-toast").html(`
                <div>
                    <p>NO SE PUEDE ACTUALIZAR</p>
                </div>
          `);
        }
      }
    });
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
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
      },
      repeatPassword:{
          required: true,
          minlength: 5,
          maxlength: 200,
          equalTo: "#pass",
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
      }
  },
  messages: {
    nombreUsuarioRegistro: {
        required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario es obligatorio. </p></div>",
        minlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario debe tener al menos 5 caracteres. </p></div>",
        maxlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El nombre de usuario no debe exceder los 16 caracteres. </p></div>"
    },
    correoElectronico:{
        required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> El correo electrónico es obligatorio. </div>",
        email: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> Por favor, introduce una dirección de correo electrónico válida. </p></div>"
    },
    password:{
        required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña es obligatoria. </div>",
        minlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña debe tener al menos 5 caracteres. </p></div>",
        maxlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña no debe exceder los 20 caracteres. </p></div>",
        pattern: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña debe incluir al menos un número, una letra mayúscula y una letra minúscula. </p></div>"
    },
    repeatPassword:{
        required: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La confirmación de la contraseña es obligatoria. </div>",
        minlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La confirmación de la contraseña debe tener al menos 5 caracteres. </p></div>",
        maxlength: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La confirmación de la contraseña no debe exceder los 20 caracteres. </p></div>",
        equalTo: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> Las contraseñas no coinciden. </div>",
        pattern: "<div class=error-validate><p> <span class=\"material-symbols-outlined\">error</span> La contraseña debe tener al menos un número, una letra mayúscula y una letra minúscula. </p></div>"
    }
}
});
