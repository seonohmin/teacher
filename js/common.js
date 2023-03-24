/* ========================================================================
 * gnb hover
 * ======================================================================== */

(() => {
    $('.gnb > ul > li').hover(
        function () {
            if ($('#header').hasClass('transparent')) {
                $('#header').removeClass('transparent');
            }
            $(this).find('.depth2').stop().slideDown('fast');
        },
        function () {
            $(this).find('.depth2').stop().slideUp('fast');
            if ($(window).scrollTop() === 0) {
                if ($('.main-visual').length || $('.sub-visual').length) {
                    $('#header').addClass('transparent');
                }
            }
        },
    );
    $('.gnb > ul > li > button').focus(function () {
        $('#header .gnb > ul > li').trigger('mouseleave');
        $(this).parents('li').trigger('mouseenter');
        $('.gnb > ul').trigger('mouseenter');
    });
    $('.gnb > ul > li:first > button').keydown(e => {
        if (e.shiftKey && (e.keyCode || e.which) === 9) {
            $('#header .gnb > ul > li').trigger('mouseleave');
            $('.gnb > ul').trigger('mouseleave');
        }
    });
    $('.gnb > ul > li:last .depth2 ul li:last > a').keydown(e => {
        if (e.keyCode === 9) {
            if (!e.shithKey) {
                $('#header .gnb > ul > li').trigger('mouseleave');
                $('.gnb > ul').trigger('mouseleave');
            }
        }
    });
    $('.gnb > ul').hover(
        () => {
            $('#dim').stop().fadeIn('fast');
        },
        () => {
            $('#dim').stop().fadeOut('fast');
        },
    );
})();
