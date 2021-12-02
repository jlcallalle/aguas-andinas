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

    $('.event-clima').on('click', function(e) {
        e.preventDefault();
        $('.box-estado-clima').toggleClass('active');
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

    // overlay menu list 
      $( ".lista-nav li" ).hover(
        function() {
            $(this).parent().siblings().addClass('hover');
        }, function() {
            $(this).parent().siblings().removeClass('hover');
        }
      );

      //mostrar politica footer
        // var total = $('.lista-texto li').length;
        $('.lista-texto li').each(function(index) {
            if (index >= 4) {
                $(this).addClass('hide');
            }
        });

        $('.btn-mostrar-data').on('click', function(e) {
            e.preventDefault();
            $('.lista-texto li').removeClass('hide');
            $(this).hide();
        });

        // listado noticias 
        $('.listado-noticias > div').each(function(index) {
            console.log(index);
            if (index >= 8) {
                $(this).addClass('hide');
            }
        });

        $('.btn-mostrar-noticias').on('click', function(e) {
            e.preventDefault();
            $('.listado-noticias .col-12').removeClass('hide');
            $(this).hide();
        });

});
