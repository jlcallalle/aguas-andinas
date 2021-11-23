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
    /* if ($('.page-detalle').length) {
        MyApp.evento();
    } */

    /* $(".link").click(function(e){
        e.preventDefault();
    }); */
});