var cookiesAceptadas = localStorage.getItem('cookiesAceptadas');
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