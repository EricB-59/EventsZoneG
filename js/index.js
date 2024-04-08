$("#button-AjustarCuenta").click(function(){
    let estadoActual = $("#ajustarCuenta_ALL").css("display");
    if (estadoActual === "none") {
        $("#ajustarCuenta_ALL").css("display", "inline-block");
    }else{
        $("#ajustarCuenta_ALL").css("display", "none");
    }
});

$("#DIV-sliderNovedades").slick({
    dots: true,
    infinity: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
});
