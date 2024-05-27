$("#VALIDAR-AJAX").on('click', function() {
    let email = $("#email-verificacion").val();
    let nameUser = $(".input_nameuser").val();
    let password = $("#pass").val();
    let repeatPassword = $("#passRepeat").val();

    $.ajax({
      url: "./verificaciones_ajax/ajustar_cuenta.php",
      type: "POST",
      data: {   
                nombreUsuarioRegistro: nameUser,
                correoElectronico: email,
                password: password,
                repeatPassword: repeatPassword
            },
      dataType: 'json',
      success: function(respuesta){
        if (respuesta == true) {
          $(".contenedor-toast").html(`
            <div class="toast-email">
                <div class="contenedor-icono">
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
                <div>
                    <span>Error en el email</span>
                    <p>Este correo electrónico ya está en uso.</p>
                </div>
            </div>
          `);
          //Deshabilitamos el botón de envío del formulario.
          $('#FORM-REGISTRARCUENTA input[type="submit"]').prop('disabled', true);
        } else {
          $(".contenedor-toast").text('');
          //Habilitamos el botón de envío del formulario.
          $('#FORM-REGISTRARCUENTA input[type="submit"]').prop('disabled', false);
        }
      }
    });
});