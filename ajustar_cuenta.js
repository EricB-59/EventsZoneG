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