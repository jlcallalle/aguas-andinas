// Main

var MyApp = {
    toggeMenu : function () {
        $('.button-nav--toggle').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
        });
    },
}

$(function () {
    console.log('ready..');    
    MyApp.toggeMenu();

    $('.carousel').carousel({
        interval: 2000
    })

    $('.texto-clima').on('click', function(e) {
        e.preventDefault();
        $('.mostrar-clima-detalle').toggleClass('active');
    });

    $('.item-lupa').on('click', function(e) {
        e.preventDefault();
        $('.mostrar-busqueda').toggleClass('active');
    });

  

    $('.btn-mostrar-noticias').on('click', function(e) {
        e.preventDefault();
    });

    $('.c-hamburger').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $("#navigation").toggleClass("active");
    });

    $(".down-submenu-mobile").on("click", function () {
        $(this).parent().toggleClass("active-submenu");
    });

    $('.mostrar-lugares').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.box-punto-pago').toggleClass('active');
    });

    /* if ($('.page-detalle').length) {
        MyApp.evento();
    } */

});
