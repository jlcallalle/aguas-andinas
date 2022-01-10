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
    console.log('ready.. movil');    
    MyApp.toggeMenu();

    // Mostrar panel estado operacional
     $('.box-state').on('click', function(e) {
        e.preventDefault();
        $('.box-estado-operacional').toggleClass('active');
    });

     $('.box-notification').on('click', function(e) {
        e.preventDefault();
        $('.box-lista-notifica').toggleClass('active');
    });

    $('.btn-retorna').on('click', function(e) {
        e.preventDefault();
        $('.box-slider-map').addClass('open');
    });

    $('.btn-retorna-return').on('click', function(e) {
        e.preventDefault();
        $('.box-slider-map').removeClass('open');
    });




    // Mostrar panel clima grados
    $('.texto-clima').on('click', function(e) {
        e.preventDefault();
        $('.mostrar-clima-detalle').toggleClass('active');
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
        /* $(this).find('i').toggleClass('fa-chevron-up', 'fa-chevron-down'); */
        /* 
        $(this).find('i').removeClass('fa-chevron-down');
        $(this).find('i').addClass('fa-chevron-up'); 
        */
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

     // show hide input password
    $('[data-toggle="password"]').each(function () {
        var input = $(this);
        var eye_btn = $(this).parent().find('.input-group-addon');
        eye_btn.addClass('input-password-hide');
        eye_btn.on('click', function (event) {
            event.preventDefault(); 
            if (eye_btn.hasClass('input-password-hide')) {
                eye_btn.removeClass('input-password-hide').addClass('input-password-show');
                eye_btn.find('.togglePassword').removeClass('fa-eye-slash').addClass('fa-eye')
                 input.attr('type', 'text');
            } else {
                console.log('b');
                eye_btn.removeClass('input-password-show').addClass('input-password-hide');
                eye_btn.find('.togglePassword').removeClass('fa-eye').addClass('fa-eye-slash')
                input.attr('type', 'password');
            }
        });
    });

    // active carrousel pago
    $('.slider-pago li').on('click', function(e) {
        $('.slider-pago li').removeClass('active');;
        $(this).addClass('active');;
    });


});
