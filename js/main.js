(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '-1px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-100px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Experience
    $('.experience').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;

    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });
    
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', '');
    });


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });

    $(document).ready(function () {
        // Certifique-se de que todos os campos estejam limpos ao carregar a página
        $('#name').val('');
        $('#mail').val('');
        $('#mobile').val('');
        $('#service').val('Pathology Testing'); // Define o valor padrão para o select
        $('#message').val('');

        // Envio para o WhatsApp
        $('#submitBtn').on('click', function (event) {
            event.preventDefault();

            var name = $('#name').val();
            var mail = $('#mail').val();
            var mobile = $('#mobile').val();
            var service = $('#service').val();
            var message = $('#message').val();

            var whatsappNumber = '5519997921937'; // Substitua pelo número de telefone com código do país

            var url = 'https://api.whatsapp.com/send?phone=' + whatsappNumber +
                '&text=Olá, meu nome é ' + encodeURIComponent(name) +
                '. Email: ' + encodeURIComponent(mail) +
                '. Telefone: ' + encodeURIComponent(mobile) +
                '. Serviço: ' + encodeURIComponent(service) +
                '. Mensagem: ' + encodeURIComponent(message);

            window.open(url, '_blank');
        });
    });

})(jQuery);

