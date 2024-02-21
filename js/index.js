$(document).ready(function(){
    $("#button-AjustarCuenta").click(function(){
        let estadoActual = $("#ajustarCuenta_ALL").css("display");
        if (estadoActual === "none") {
            $("#ajustarCuenta_ALL").css("display", "inline-block");
        }else{
            $("#ajustarCuenta_ALL").css("display", "none");
        }
    });
});