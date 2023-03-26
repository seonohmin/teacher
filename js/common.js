/* ========================================================================
 * gnb hover
 * ======================================================================== */

$(document).ready(function () {
    var $header = $('#header');
    
    // 초기화 함수를 실행하여 현재 창 크기에 따라 이벤트를 설정합니다.
    initialize();
    
    // 창 크기가 변경될 때마다 초기화 함수를 실행합니다.
    $(window).on('resize', initialize);
    
    function initialize() {
      if ($(window).width() >= 980) {
        $('#gnb .gnb_menu').on('mouseover focusin', headerHoverOn);
        $('#gnb .gnb_menu').on('mouseleave focusout', headerHoverOff);
      } else {
        $('#gnb .gnb_menu').off('mouseover focusin', headerHoverOn);
        $('#gnb .gnb_menu').off('mouseleave focusout', headerHoverOff);
        $header.removeClass('hover');
      }
    }
    
    function headerHoverOn() { $header.addClass('hover'); }  
    function headerHoverOff() { $header.removeClass('hover'); }

    $('.toggle_btn').click(function() {
        $('.sitemap').toggleClass('open');
      });
      $('.sitemap_dim').click(function() {
        $('.sitemap').toggleClass('open');
      });

	$('.sitemap .bt_more').click(function(){
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).parent().removeClass('on');
			$(this).next('.sm').slideUp();
		} else {
			$('.sitemap .mm').removeClass('on');
			$('.sitemap .sm').slideUp();
			$(this).addClass('on');
			$(this).parent().addClass('on').siblings().removeClass('on');
			$(this).next('.sm').slideDown();
		}
	});


  });



