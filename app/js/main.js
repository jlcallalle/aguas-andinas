// Main

var MyApp = {
    menuNav : function () {
        $('.c-hamburger').on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('is-active');
            $("#navigation").toggleClass("active");
        });

        $(".down-submenu-mobile").on("click", function () {
            $(this).parent().toggleClass("active-submenu");
        });
    },
    toggeEstado : function () {
        // Header - Mostrar panel estado operacional
        $('.box-state').on('click', function(e) {
            e.preventDefault();
            $('.box-estado-operacional').toggleClass('active');
        });
    },
    toggeNotificaciones : function () {
        // Header - Mostrar panel notificaciones
        $('.box-notification').on('click', function(e) {
            e.preventDefault();
            $('.box-lista-notifica').toggleClass('active');
        });
    },
    mostrarPanelMapa : function () {
        //mostrar y ocultar  panel mapa
        $('.btn-retorna').on('click', function(e) {
            e.preventDefault();
            $('.box-slider-map').addClass('open');
        });

        $('.btn-retorna-return').on('click', function(e) {
            e.preventDefault();
            $('.box-slider-map').removeClass('open');
        });
    },
    mostrarPassword : function () {
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
    },
    activeClassPago : function () {
        // active tipo pago
        $('.slider-pago li').on('click', function(e) {
            $('.slider-pago li').removeClass('active');;
            $(this).addClass('active');;
        });
    },
}

$(function () {
    console.log('ready template movil...');    
    MyApp.menuNav();
    MyApp.toggeEstado();
    MyApp.toggeNotificaciones();
    MyApp.mostrarPanelMapa();
    MyApp.mostrarPassword();
    MyApp.activeClassPago();
});
