jQuery(function ($) {
    jQuery('.show').click(function () {
        $('.header').addClass('show-menu');
        $(this).addClass('show-close');
        $('.hamburger').addClass('show-cls');
    });

    jQuery('.close').click(function () {
        $('.header').removeClass('show-menu');
        $('.hamburger').removeClass('show-cls');
    });

    jQuery('.nav-item li,.scroller').on('click', function (event) {
        var $anchor = $(this);
        jQuery('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top - jQuery('.float-panel').height()
        }, 4500);
        event.preventDefault();
    });
});