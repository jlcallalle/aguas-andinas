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
    
    /* if ($('.page-detalle').length) {
        MyApp.evento();
    } */

    /* $(".link").click(function(e){
        e.preventDefault();
    }); */
});