
(function () {
	var thisBrowser = navigator.userAgent.toLowerCase();
	var html = $("html");

	if(
		thisBrowser.indexOf("ipod") > -1 || 
		thisBrowser.indexOf("iphone") > -1 || 
		thisBrowser.indexOf("ipad") > -1 ||
		thisBrowser.indexOf("android") > -1 || 
		thisBrowser.indexOf("windows phone") > -1
	) {
		html.addClass("mob_mode");
	}
	else{
		html.addClass("pc");
	}
})();


/* 디바이스설정 - OS, Version, Browser */
function setDevices(){
	var cls = 'dv_';
	var browserDevice = function(){ return browser.mobile == true ? 'mobile' : 'pc' }
	var clsBrowser = ''
		+ cls + browser.name
		+ ' ' + cls + browser.name + browser.version
		+ ' ' + cls + browser.os
		+ ' ' + cls + browser.os + Math.floor(browser.osVersion)
		+ ' ' + cls + browserDevice();
	$body.addClass(clsBrowser);
}

// touch device check
const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

/* ========================================================================
 * gnb hover
 * ======================================================================== */

$(function () {
    var $header = $('#header');

    initialize();
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

    /* 패밀리 사이트 */
    var $select = $('#institution_select');
    var $label = $('label[for="institution_select"]');

    $select.change(function() {
      var selectText = $select.children('option:selected').text();
      $label.text(selectText);
    });

    $select.change(function() {
      var selectedValue = $select.val();
      if(selectedValue != '') {
        window.open(selectedValue, '_blank');
      }
    });

    /* 맨위로 가기 */
    $(window).scroll(function() {
      const $btnTop = $('.btn_top');
      if ($(this).scrollTop() > 500) {
        $btnTop.addClass('show');
      } else {
        $btnTop.removeClass('show');
      }
    });
    
    $('.btn_top').click(function() {
      $('html, body').animate({scrollTop: 0}, 680);
    });

});



document.addEventListener('DOMContentLoaded', () => {
  ui.init();
  ui.tabs();
  ui.dropDownTab();
  ui.accordion();
  ui.allMenu();
  ui.dropdown();
});