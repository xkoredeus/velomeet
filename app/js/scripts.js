$(() => {
    $(window).on('load', function () {
        $('.preloader__wrp').fadeOut();
    });
});
$(() => {
    $('.js-popup__open').on('click', function openPopup () {
        $('body').addClass('menu-open');
    });
    $('.js-popup__close').on('click', function closePopup () {
        $('body').removeClass('menu-open');
    });
    $('.js-content__overlay').on('click', function overlayClick () {
        $('body').removeClass('menu-open');
    });
    $('.header__nav-link').on('click', function headerNavLinkClick (e) {
        e.preventDefault();
        const id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 900);
    });
});
$(()=> {
    $("input[type=tel]").mask("+7 (999) 999-99-99");
});
$(() => {
    $('.reviews').owlCarousel({
        items: 1,
        loop: false,
        dots: true,
        smartSpeed: 800,
        margin: 20,
        navText: ["<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M6 1L1 6L6 11' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>", "<svg width='7' height='12' viewBox='0 0 7 12' xmlns='http://www.w3.org/2000/svg'><path d='M1 11L6 6L0.999999 1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg>"],
        responsive : {
            0   : {
                nav: false,
            },
            600 : {
                nav: true,
            }
        }
    });
});