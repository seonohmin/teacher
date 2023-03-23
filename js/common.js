$(document).ready(function(){
    // var $btn_top = $("#footer .btn_top");
    // var btn_top_view = false;
    var $header = $('#header');
    var lastScrollTop = 0, delta = 5;
    var ua = window.navigator.userAgent.toLowerCase();
    var isiPad = ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend' in document;
    var is_tablet = isiPad || /Mobile|ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(ua);

    if(is_tablet){
        $('#gnb .gnb_menu > ul > li > a').on('click',function(e){
            e.preventDefault();
            if($header.hasClass('hover')){
                window.location.href=$(this).attr('href');
            }else{
                headerHoverOn();
            }
            return false;
        });
        $('#header .dimmed').on('click',function(e){
            e.preventDefault();
            headerHoverOff();
        });

    }else{
        $('#gnb .gnb_menu ul li a').on('mouseover focusin', headerHoverOn);
        $('.gnb_menu').on('mouseleave focusout', headerHoverOff);
    }
    function headerHoverOn(){
        if(window.scrollbar)scrollbar.setMomentum(0,0);
        $header.addClass('hover');

    }
    function headerHoverOff(){
        $header.removeClass('hover');
        EventDispatcher.is(Events.SCROLL_EVENT,window.scrollbar?window.scrollbar.scrollTop:$(window).scrollTop());
    }
});