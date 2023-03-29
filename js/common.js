/* ========================================================================
 * gnb hover
 * ======================================================================== */

$(document).ready(function () {
    var $header = $('#header');
    var $body = $('body');

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

	/* SELECT */
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




  if($(".vod_card").length > 0){
		$(".pager p").text("1/"+ $(".vod_card").length);
	}else{
		$(".pager p").text("0/0");	
	}
  $(".vod_list").slick({
    touchMove: true,
    infinite: false,
    dots: false,
    slidesPerRow: 4,
    rows: 1,
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
			{
			  breakpoint: 980,
			  settings: {
			  slidesPerRow: 3,
			  rows: 1,
				centerMode: false
			  }
			},
			{
			 breakpoint: 740,
			  settings: {
				slidesPerRow: 1,
				rows: 1,
				dots: false,
				centerMode: true,
			  }
			}
		  ]
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".pager p").text((nextSlide+1)+ "/"+ slick.slideCount);	
	});
	$(".page_bar_per").animate({
			"width": (( 1 / 4 ) * 100)+"%"
		 },300);
	$(".vod_list").on('afterChange',function(){
	  var curIdx = $(".vod_list .slick-center").attr("data-slick-index");
	  curIdx = parseInt(curIdx);
		 $(".page_bar_per").animate({
			"width": ( ((curIdx + 1) / 4 ) * 100)+"%"
		 },300);
	});

  

});



