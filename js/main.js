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
    // Mostrar panel clima grados
    $('.texto-clima').on('click', function(e) {
        e.preventDefault();
        $('.mostrar-clima-detalle').toggleClass('active');
    });

    // Mostrar panel estado operacional
    $('.event-clima').on('click', function(e) {
        e.preventDefault();
        $('.box-estado-clima').toggleClass('active');
    });

    // mostrar buscador
    $('.item-lupa').on('click', function(e) {
        e.preventDefault();
        $('.mostrar-busqueda').toggleClass('active');
    });

    // mapa cerrar item 
       $('.item-mapa button').on('click', function(e) {
        e.preventDefault();
        $(this).parent().addClass('hide');
    });
    

    // mapa mostrar lugares de pago
    $('.mostrar-lugares').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.box-punto-pago').toggleClass('active');
    });

    // movil nav
    $('.c-hamburger').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $("#navigation").toggleClass("active");
    });

    $(".down-submenu-mobile").on("click", function () {
        $(this).parent().toggleClass("active-submenu");
    });

   
    //  menu hover overlay 
    $( ".lista-nav li" ).hover(
        function() {
            $(this).parent().siblings().addClass('hover');
        }, function() {
            $(this).parent().siblings().removeClass('hover');
        }
    );

    // mostrar listado noticias 
     $('.listado-noticias > div').each(function(index) {
        if (index >= 8) {
            $(this).addClass('hide');
        }
    });

    $('.btn-mostrar-noticias').on('click', function(e) {
        e.preventDefault();
        $('.listado-noticias .col-12').removeClass('hide');
        $('.row-mostrar-noticias').hide();
        $(this).hide();
    });

    // footer mostrar politicas
    $('.lista-texto li').each(function(index) {
        if (index >= 4) {
            $(this).addClass('hide');
        }
    });

    $('.btn-mostrar-politicas').on('click', function(e) {
        e.preventDefault();
        $('.lista-texto li').removeClass('hide');
        $(this).hide();
    });

});
