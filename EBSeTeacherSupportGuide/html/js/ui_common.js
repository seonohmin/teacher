/*-------------------------------------------------------------------
	분류순서
	- @Variables	: 전역변수
	- @Init			: 초기실행
	- @Settings		: 기본설정
	- @Utility		: 유틸기능
	- @Layout		: 레이아웃
	- @Components	: 컴포넌트
	- @Content		: 컨텐츠
-------------------------------------------------------------------*/
/*-------------------------------------------------------------------
	@Variables
-------------------------------------------------------------------*/
//Elements
var	$window			= null,
	$document		= null,
	$html			= null,
	$body			= null,
	$html_body		= null,
	$wrap			= null,
	$header			= null,
	$activeFocus	= null,
_;

//Devices
var isIOS			= browser.os == 'ios',
	isANDROID		= browser.os == 'android',
	isMOBILE		= browser.mobile == true,
	isPC			= browser.mobile == false,
	breakPC			= 1024,
	breakTA			= 720,
	isBreakPC		= function(){ 
		if (breakPC <= $(window).width()){
			return true;
		} else {
			return false;
		}		
	}
	isBreakTA		= function(){ 
		if (breakPC > $(window).width() && breakTA <= $(window).width()){
			return true;
		} else {
			return false;
		}
	}
	isBreakMO		= function(){ 
		if (breakTA > $(window).width()){
			return true;
		} else {
			return false;
		}
	}
_;

/* 초기실행 (설정, 재실행) */
function set_UI(){
	/* Settings */
	setElements();
	setDevices();
	setEvents();
	//setTestmode(); 2021-04-16 수정
}
function init_UI(){
	//Layout
	gnbInit();
	mnbInit();
	lnbInit();
	navStickyInit();
	familySlideInit();
	quickLectureInit();
	autoCompleteInit();
	notiLayerInit();
	startLayerInit();/* 2021-04-01 */
	adskyInit();/* 2022-03-10 수정 */
	adskymInit();/* 2022-03-10 수정 */

	//Components
	modalInit();
	datepickerInit();
	toggleInit();
	selectInit();
	tooltipInit();
	dropInit();
	dropSelectInit();
	ratingInit();
	viewOptionInit();
	tabInit();
	tabmenuScrInit();
	fileUploadInit();
	stepAccodionInit();
	qnaAccordionInit();
	qnaAccordionInit2();
	existingAccordionInit();
    shadowingAccordionInit();
	// tableFixedInit(); 개발 및 페이지에서 직접 호출
	cmpltAccordionInit();
	curriAccordionInit();
	tenAccordionInit();
	shadowTableInit();

	//Content
	allLectureSlideInit();
	adviserListSlideInit();
	fullsvAccodiInit();
	myLearningCalInit();
	roadMapListMore();
	tabSlide3Init();
	curriCulumInit();

	weeklySlideInit();/* 2021-04-14 */
	todaydatepickerInit();/* 2021-04-21 수정 */
	textbookSlideInit();/* 2021-07-22 수정 | 교재안내 */

}

/*---------------------------------------------------------------
	@Settings
---------------------------------------------------------------*/
/* 엘리먼트 설정 */
function setElements(){
	$window		= $(window);
	$document	= $(document);
	$html		= $('html');
	$body		= $('body');
	$html_body	= $('html, body');
	$wrapper	= $('.wrap');
	$header		= $('header');
	$document.off('focusin.eleEvent click.eleEvent').on('focusin.eleEvent click.eleEvent', function(e){
		$activeFocus = $(e.target);
	})
}

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

/* 윈도우 커스텀이벤트설정 - scrollEnd, resizeEnd */
function setEvents(){
	var resizeEndTime, scrollEndTime;
	//Scroll
	$window.off('scroll.customEvent').on('scroll.customEvent', function(){
		clearTimeout(scrollEndTime); scrollEndTime = setTimeout(function(){ $window.trigger('scrollEnd') }, 100);
	});
	//Resize
	$window.off('resize.customEvent').on('resize.customEvent', function(){
		clearTimeout(resizeEndTime); resizeEndTime = setTimeout(function(){ $window.trigger('resizeEnd') }, 100);
	});
}

/* TestMode */
function setTestmode(){
	var clickIdx = 0;
	var setTimeEvent = null;
	var action = function(){
		clickIdx = clickIdx + 1;
		if (clickIdx > 5){
			alert('W: '+ $window.width() + ', H: ' + $window.height() + ', ' +  browser.os + ': ' + browser.osVersion);
		}
		clearTimeout(setTimeEvent);
		setTimeEvent = setTimeout(function(){
			clickIdx = 0;
		}, 300);
	}
	$document.off('click.testMode').on('click.testMode', function(e){ action() });
}

/*---------------------------------------------------------------
	@Utilites
---------------------------------------------------------------*/
//스트링을 스크립트 코드로 변환
function getNewFunction(str){
	var callback = (new Function(str))();
	return (new Function(callback))();
}

/*---------------------------------------------------------------
	@Layout
---------------------------------------------------------------*/
/* GNB Navigation Mobile */
var mySwiperGnb = null;
var clsSwiperGnb = '.gnb_wrap .le_nav ';
function swiperGnbEvent(current){
	$(window).off('resizeEnd.mySwiperGnb').on('resizeEnd.mySwiperGnb', function(){
		if ($(window).width() < breakPC) {
			if (current > -1){ 
				mySwiperGnb.update({initialSlide: current});
			}
		}
	});
	$(document).off('click.mySwiperGnb').on('click.mySwiperGnb', clsSwiperGnb +' .swiper-slide', function(e){
		swiperGnbReset($(this).index());
	})
}
function swiperGnbReset(current){
	if (current > -1){ 
		$(clsSwiperGnb).addClass('is-swiper').find('.swiper-slide').find('>a').removeClass('on');
		$(clsSwiperGnb).addClass('is-swiper').find('.swiper-slide').eq(current).find('>a').addClass('on');
	}
}
function swiperGnbAction(idx){
	var current = idx;
	mySwiperGnb = new Swiper(clsSwiperGnb, {
		// initialSlide: current,
		slidesPerView: 'auto',
		freeMode: true,
		slideToClickedSlide: false,
		// centeredSlides: true,
		// centeredSlidesBounds: true,
		navigation: false,
		// navigation: {
		// 	nextEl: clsSwiperGnb + '.swiper-button-next',
		// 	prevEl: clsSwiperGnb + '.swiper-button-prev',
		// },
		// breakpoints: {
		// 	961 : {
		// 		centeredSlides: false,
		// 		centeredSlidesBounds: false,
		// 	},
		// }, 
	});
	if (current > -1){ 
		mySwiperGnb.update({initialSlide: current}) 
	}
	swiperGnbEvent(current);	
	swiperGnbReset(current);
}

/* GNB Navigation PC */
function gnbInit(){
	// resize: 브라우저 창 너비의 변경된 값을 width 변수에 저장
	if ($('.gnb_wrap').length){
		$(window).resize(function () {
			var width = $(window).width();
			if (width>=breakPC) {
				if (mySwiperGnb != null) {
					mySwiperGnb.destroy();
					mySwiperGnb = null;
				}
				gnbUpdate();
				gnbEvnet();
			} else {
				if (mySwiperGnb == null) {
					gnbMobile();
				}
			}
		});
		$(window).trigger("resize");
	}
}
function gnbUpdate(){
	var $depth = $('div.gnb_wrap div.le_nav ul.depth');
	var maxHei = 0;
	for (var i = 0; i < $depth.length; i++){
		if (maxHei < $depth.eq(i).outerHeight()){
			maxHei = $depth.eq(i).outerHeight();
		}
	}
	$('div.gnb_wrap').data({'active-height':maxHei});
}
function gnbEvnet(){
	var $gnb_wrap = $('div.gnb_wrap');
	var $inner = $gnb_wrap.find('.inner');
	var $bgDepth = $gnb_wrap.find('.bg_depth');
	var gapHei = 30;
	var activeHei = $gnb_wrap.data('active-height') + gapHei;
	var defaultHei = $gnb_wrap.height();
	
	/*  gnb */
	$gnb_wrap.off('mouseenter focusin').on('mouseenter focusin',function(){
		$inner.css('height', (activeHei+defaultHei)+'px');
		$bgDepth.css({'height':(activeHei)+'px','min-height': '360px'});//2021-04-25 수정 배너 높이값 고정
		$bgDepth.addClass('bg_depth_hover');
		$gnb_wrap.addClass('on');//2021-04-13 수정
	});
	$gnb_wrap.off('mouseleave').on('mouseleave',function(){
		$inner.css('height', '100%');
		$bgDepth.css({'height': 0,'min-height': 0});//2021-04-25 수정 배너 높이값 고정
		$bgDepth.removeClass('bg_depth_hover');
		$gnb_wrap.removeClass('on');//2021-04-13 수정
	});

	$document.off('click.gnbEvent focusin.gnbEvent').on('click.gnbEvent focusin.gnbEvent', function(e){
		if ($(e.target).closest('.gnb_wrap').length == 0){
			$gnb_wrap.removeClass('active');
		}
	})
}
function gnbMobile(){
	var $leNav = $('div.gnb_wrap .le_nav');
	var $leNavLinkOn = $leNav.find('>ul>li>a.on');
	var idx = $leNavLinkOn.parent().index();
	swiperGnbAction(idx);
	/*
	var $leNav = $('div.gnb_wrap .le_nav');
	var $leNavLinkOn = $leNav.find('>ul>li>a.on');
	var gapLeft = parseInt($('.gnb_wrap .inner').css('padding-left'));
	if ($leNavLinkOn.length) {
		var posX = $leNavLinkOn.parent().offset().left - gapLeft + $leNav.scrollLeft();
		console.log(posX);
		$leNav.scrollLeft(posX);
	}
	*/
}

/* LNB Navigation */
function lnbInit(){
	$('.menu_list .depth > ul').each(function(){
		$(this).prev('a').addClass('on');
	})
	$document.off('click.lnbEvent').on('click.lnbEvent', '.menu_list .depth > a', function(e){
		$(this).toggleClass('on').next().stop().slideToggle('fast');
	});
}

/* MNB Navigation */
function mnbOpen(){
	$('html').addClass('mm-opened');
	$('body').addClass('no_scroll');
	$('.dim').fadeIn(200);
	$('.dim').css({'height':$(window).height(),'width':$(window).width()});
	$('.mobile_menu').animate({'left':'0px'},300,function(){
		$(this).addClass('act');
	});
};
function mnbClose(){
	$('body').removeClass('no_scroll');
	$('.dim').fadeOut(200);
	$('.dim').hide().removeAttr('style');
	$('.mobile_menu').stop().animate({'left':'-100%'},300,function(){   
		$(this).removeClass('act');
		$('html').removeClass('mm-opened');
	});
};
function mnbInit(){
	$('header .all_menu').click(mnbOpen);
	$('.mobile_menu_close').click(mnbClose);
	$('.dim').bind('touchstart click', function() {
		mnbClose();
		return false;
	});
	
	$('.menu_area li.dep01 > div').addClass('submenu_div');
	$('.menu_area').off('click', '.dep_menu li.dep01 a.dep01').on('click', '.dep_menu li.dep01 a.dep01' , function(){
		$(this).parent().addClass('on').siblings().removeClass('on');
		gnbScrollFunc(true);
	});
	
	var gnbScrollFunc = function(flag) {		// ios bounce scroll prevent!!
		var __div = $('.menu_area').find('li.dep01.on > div');
		var _div = $('.menu_area').find('li.dep01 > div');
		__div.find('a:first').focus().blur();
		$(document).off('mousedown.ft touchstart.ft mousemove.ft touchmove.ft');
		__div.off('mousedown.ft touchstart.ft mousemove.ft touchmove.ft');
		if ( !window.navigator.userAgent.toLowerCase().match(/ipad|iphone/) ) {
			_div.stop().scrollTop(0);
			return false; // iphone, ipad인 경우만 touch event 실행
		} else {
			_div.stop().scrollTop(0);
			__div.addClass('has_scroll');
		}
		_div.off('scroll').on('scroll', function(e) {
			if ( $(this).scrollTop() <= 10 ) {
				$(this).scrollTop(10);
			} else if ( $(this).scrollTop() >= this.scrollHeight-$(this).outerHeight()-10 ) {
				$(this).scrollTop( this.scrollHeight-$(this).outerHeight()-10 );
			}
		});
	};
}

/* Nav Sticky */
function navStickyInit(){
	/* sticky bar */
	if( $("nav").offset() ){
		
		$(window).on('resize, scroll', function() {
			var navTop = $("header").offset().top + $("header").outerHeight();
			var scrTop = $(this).scrollTop();
			if(navTop <= scrTop) {
				$("nav").addClass("sticky");
			} else {
				$("nav").removeClass("sticky");
			}
		})
	}	

	/* layer modal */
	$document.off('click.layerOpen').on('click.layerOpen', '.layer_full_open', function(e){
		e.preventDefault();
		$(".layer_full").stop().fadeIn(300);
	});
	$document.off('click.layerClose').on('click.layerClose', '.layer_full .close', function(e){
		e.preventDefault();
		$(".layer_full").stop().fadeOut(300);
	});
}

/* 패밀리사이트 슬라이드 */
function familySlideInit(){
	$('.slider_family').not('.is_slicked').each(function(){
		$(this).slick({
			infinite:false,
			arrows: true,
			slidesToShow: 7,
			slidesToScroll: 1,
			speed: 600,
			focusOnChange: true,
			accessibility: true,
			responsive: [
			  {
				breakpoint: breakPC,
				settings: {
				  slidesToShow: 3
				}
			  },
			  {
				breakpoint: breakTA,
				settings: {
				  slidesToShow: 2
				}
			  }
			]
		});
	}).addClass('is_slicked');
}


/* 빠른강좌찾기 */
function quickLectureInit(){
	$document.off('click.quickLectureOpen').on('click.quickLectureOpen', '.js_quickLecture', function(e){
		quickLectureUpdate();
	});
	$document.off('click.quickLectureClose').on('click.quickLectureClose', 'div.quick_lecture button.btn_close', function(e){		
		$('#quickLecture').removeClass('on');
		$window.scrollTop(0);
		$window.off('resize.quickLectureResize');
	});	
	$document.off('click.quickLectureTop').on('click.quickLectureTop', 'div.quick_lecture button.btn_top', function(e){
		quickLectureScroll();
	});	
}
function quickLectureScroll(){
	var $quickLecture = $('#quickLecture');
	var scrT = $quickLecture.offset().top;
	$('html, body').stop().animate({'scrollTop': scrT}, 200, function(){
		$('#quickLecture').find('.quick_nav > li').eq(0).find('button').focus();
	});

}
function quickLectureUpdate(){
	var $quickLecture = $('#quickLecture');
	$quickLecture.addClass('on');
	// $quickLecture.find('.quick_body').mCustomScrollbar({ scrollInertia: 100 });

	quickLectureScroll();
	$window.off('resize.quickLectureResize').on('resize.quickLectureResize', function(){
		quickLectureScroll();
		// $quickLecture.find('.quick_lecture_body').mCustomScrollbar('update');
	})
	tabmenuScrInit();
}

/* 자동완성 */
var autoCompletesValues = [
	//임시데이터
	"보너스 대박", "수능 대박", "수능 완성", "수능 이벤트", "수능 이벤트(1)", "수능 이벤트(2)", "수능 이벤트(3)", "수능 이벤트(4)", "수능 이벤트(5)", "수능 이벤트(6)", "강의 대박", "강의 완성", "강의 이벤트", "강의 이벤트(1)", "강의 이벤트(2)", "강의 이벤트(3)", "강의 이벤트(4)", "강의 이벤트(5)", "강의 이벤트(6)"
]
function autoCompleteInit(){
	$document.off('input.autoCompleteInput').on('input.autoCompleteInput', 'div.search input', function(e){
		autoCompleteValidate($(this).val());
		$(this).val() != '' ? autoCompleteOpen() : autoCompleteClose();
	})
}
function autoCompleteValidate(str){
	// console.log(str);
	var autoCompletesCurrent = [];
	for (var i = 0; i < autoCompletesValues.length; i++) {
		//console.log(autoCompletesValues[i].indexOf(str));
		if (autoCompletesValues[i].indexOf(str) == 0 ){
			autoCompletesCurrent.push(autoCompletesValues[i]);
		}
	}
	autoCompleteUpdate(str, autoCompletesCurrent);
}
function autoCompleteUpdate(str, values){
	var $acList = $('#autoCompleteSearchList');
	var customKeyword = [];
	var html = '';
	if (values.length){
		for (var i = 0; i < values.length; i++) {
			customKeyword[i] = values[i].replace(str, '<em class="key">'+str+'</em>');
			html = html + '<li><button type="button"><span>'+customKeyword[i]+'</span></button></li>';
		}
	} else {
		html = html + '<li class="nodata">결과없음</li>';
	}
	$acList.html(html);

}
function autoCompleteOpen(){
	$('div#autoCompleteSearch').removeClass('hidden');
}
function autoCompleteClose(){
	$('div#autoCompleteSearch').addClass('hidden');
}

function notiLayerInit(){
	$document.off('click.notiLayer').on('click.notiLayer', '.btn_noti_close', function(e){
		$(this).closest('.noti_layer').removeClass('active');
		if ($('.noti_layer.active').length == 0){
			$('.noti_layer_wrap').removeClass('active');
		}
	});	
}

/* 2021-04-01 수정 */
function startLayerInit(){
	$document.off('click.startLayer').on('click.startLayer', '.btn_start_close', function(e){
		$(this).closest('.start_layer').removeClass('active');
		if ($('.start_layer.active').length == 0){
			$('.start_layer_wrap').removeClass('active');
		}
	});	
}

//2022-03-10 수정
function adskyInit(){
	var floatPosition = parseInt($(".ad_layer_wrap").css('top'));

	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		var newPosition = scrollTop + floatPosition + "px";

		$(".ad_layer_wrap").stop().animate({
			"top" : newPosition
		}, 500);
	}).scroll();
}

function adskymInit(){
	if( $(".mob_footer_ad .banner1").offset()){
		$(window).on('resize, load, scroll', function() {          
			
			var topBar = $(".mob_footer_ad").offset().top - $(window).height();;
			var docScrollY = $(this).scrollTop();
			var barThis = $(".mob_footer_ad .banner1")
			var fixNext = $(".mob_footer_ad")
	
			if( topBar > docScrollY ) {
				barThis.removeClass("sticky");
				fixNext.removeClass("sticky");
			}else{
				barThis.addClass("sticky");
				fixNext.addClass("sticky");
			}					

		});
	}
}

/*---------------------------------------------------------------
	@Components
---------------------------------------------------------------*/
/* Modal : 'data-modal-id', id 연결방식 */
function modalInit(){
	$document.off('click.modalOpen').on('click.modalOpen', '.modal_btn', function(e){
		e.preventDefault();
		var id = $(this).data('modal-id');
		modalOpen(id);
	});
	$document.off('click.modalClose').on('click.modalClose', '.modal_close', function(e){
		e.preventDefault();
		var id = $(this).closest('.modal_wrap').attr('id');
		modalClose(id);
	});
}

function modalResize($obj){
	$obj.filter('.active').each(function(){
		var id = $(this);
		var $modalWrap = $(this);
		var $modal = $(this).find('.modal');
		var $modalContainer = $modal.find('.modal_container');
		var $modalContent = $modal.find('.modal_content');
		var $modalInner = $modal.find('.inner_scroll');
		if ($modalContent.hasClass('has_pad')){
			$modalContent.removeClass('has_pad');
			$modalContainer.addClass('has_pad');
		}
		var resizing = function(){
			var gap = parseInt($modalWrap.css('padding-top')) + parseInt($modalWrap.css('padding-bottom')) + 2;
			var isContainerGap = function(){ return ($modalContent.outerHeight() + 2) < $modalContainer.outerHeight() }
			var isModalGap = function(){ return $window.height() - $modal.outerHeight() > gap }

			//기본스크롤
			//isContainerGap 본문의 빈 공간이 있는지, isModalGap 모달이 늘어날 공간이 있는지
			// console.log(isContainerGap(), isModalGap(), $window.height() - $modal.outerHeight() gap);
			console.log(id);
			if (isContainerGap() == false && isModalGap() == false){
				$modal.css('height', 'auto');
				$modalContainer.css('height', $modalContent.height() + 'px');
			} else if (isContainerGap() == false && isModalGap() == true) {
				$modal.css('height', 'auto');
				$modalContainer.removeAttr('style');
			} else if (isContainerGap() == true && isModalGap() == false) {
				$modal.css('height', '100%');
				$modalContainer.css('height', $modalContent.height() + 'px');
			} else if (isContainerGap() == true && isModalGap() == true) {
				$modal.css('height', 'auto');
				$modalContainer.removeAttr('style');
			}

			//내부스크롤
			if ($modalInner.length){
				$modalContainer.addClass('has_scroll');
				var innerH = $modalContainer.height() - ($modalInner.offset().top - $modalContainer.offset().top) + ($window.height() - gap - $modal.outerHeight());
				$modalInner.css('max-height', innerH+'px');
				// console.log($modalInner.prop('scrollHeight'), innerH);
				if ($modalInner.prop('scrollHeight') <= innerH){
					$modalInner.css('overflow-y', 'hidden');
				} else {
					$modalInner.css('overflow-y', 'auto');
				}
			}

			//마무리
			if (isContainerGap() == false){
				$modalContainer.css('height', ($modalContent.height() + 2) + 'px');
			}

			// console.log(isContainerGap(), isModalGap());
			// console.log($window.height() - $modal.outerHeight(), gap);
			// console.log($modalContent.outerHeight(), $modalContainer.height());
		}
		$window.off('resize.'+id).on('resize.'+id, function(){
			resizing();
		})
		resizing();
	})
}

function modalOpen(id){
	var $modal = $('#' + id);
	//$html.hasClass('modal_open') && $('.modal_wrap').removeClass('active'); // 전환팝업시 사용
	//$html.addClass('modal_open'); 2021-05-03 개발 수정
	if($html != null){
		$html.addClass('modal_open');
	}//2021-05-03 개발 수정
	$modal.addClass('active');
	if (browser.name == "ie"){ modalResize($modal) }
	if ($modal.find('.modal_all_teacher').length) { modalResize($modal) }
	$body.addClass('has_modal');
	shadowTableInit();
}
function modalClose(id){
	var $modal = $('#' + id);
	$modal.closest('.modal_wrap').removeClass('active');
	$html.removeClass('modal_open');
	$(".popupArea").html("");
	$window.off('resize.modalInnerScroll');
	if ($('.modal_wrap.active').length == 0){
		$body.removeClass('has_modal');
	}
}

/* 리스트형, 카드형 보기방식 */
function viewOptionInit(){
	$document.off('click.viewOption').on('click.viewOption', '.btn_option', function(e){
		if ($(this).hasClass('type_list')){
			$('.card_list_wrap').hide();
			$('.card_list_wrap').prev().show();
			$(this).addClass('on').siblings().removeClass('on');
		} else if ($(this).hasClass('type_card')){
			$('.card_list_wrap').show();
			$('.card_list_wrap').prev().hide();
			$(this).addClass('on').siblings().removeClass('on');
		}
		/*
		if ($(this).is('[data-id]')){
			$('#'+ $(this).data('id')).show();
			$('#'+ $(this).siblings().data('id')).hide();
		}
		*/
	})
}

/* Tab */
function tabInit(){
	$document.off('click.tabEvent').on('click.tabEvent', '.tab > ul li', function(e){ 
		e.preventDefault();
		var id = $(this).data('id');
		var callback = null;

		//속성으로 콜백함수 처리
		if ($(this).data('callback') != '' && $(this).data('callback') != undefined){
			var str = $(this).data('callback');
			callback = getNewFunction(str);
		}
		tabAction(id, function(){ callback });
	});
}
function tabAction(id, callback){
	var $btn = $('[data-id="'+id+'"]');
	var $cont = $("#"+ id);
	var $tab = $("#"+ id).closest('.tab');
	
	$btn.addClass('on').siblings().removeClass('on');
	$cont.addClass('on').siblings('.con_box').removeClass('on');

	//콜백처리
	if (typeof(callback) == 'function'){ callback }
}

/* Toggle */
function toggleInit(){
	$(document).off('click.toggleEvent').on('click.toggleEvent', '.js_toggle', function(){
		var id = $(this).data('id');
		toggleAction(id);
	})
}
function toggleAction(id){
	var $btn = $('[data-id="'+id+'"]');
	var $cont = $('#'+id);

	if ($btn.is('[data-toggle-show]')){
		var length = Number($btn.data('toggle-show'));
		$cont.find('li').eq(length-1).nextAll().toggleClass('hidden');
	} else {
		$cont.toggle();
	}
	$btn.toggleClass('on');

	//접기, 펴기인 경우
	$btn.find('span').each(function(){
		if ($(this).parent().hasClass('btn_text_extend')){
			if ($(this).text() == '접기'){
				$(this).text('더보기');
			} else if ($(this).text() == '더보기'){
				// console.log($(this).text());
				$(this).text('접기');
			}
		} else {
			if ($(this).text() == '접기'){
				$(this).text('펴기');
			} else if ($(this).text() == '펴기'){
				$(this).text('접기');
			}
		}
	})
}

/* Slick버전 */
function tabmenuScrInit(){
	$('.tabmenu2_wrap ul.tabmenu2:visible').not('.is_slicked').each(function(){
		var $this = $(this);
		var isSlick = false;
		var setSlick = function(idx){
			if ($this.find('li').length > 2){
				if ($window.width() < breakPC && isSlick == false){
					$this.slick({
						infinite:false,
						arrows: true,
						centerMode: false,
						slidesToShow: 6,
						slidesToScroll: 1,
						speed: 600,
						focusOnChange: true,
						accessibility: true,
						initialSlide:idx,
						responsive: [
							{
							breakpoint: breakPC,
							settings: {
								slidesToShow: 2
							}
							},
						]
					});
					$this.find('li').eq(idx).addClass('on').siblings().removeClass('on');		
					isSlick = true;
				} else if ($window.width() >= breakPC && isSlick == true) {
					$this.slick('unslick');
					isSlick = false;
				} else if ($window.width() < breakPC && isSlick == true){
					$this.slick('slickGoTo', idx);
					isSlick = true;
				}
			}
		}
		var currentIdx = $this.find('li.on').index();
		//console.log(currentIdx);
		if (currentIdx < 0) { currentIdx = 0 }
		setSlick(currentIdx);
		$document.off('click.tabmenuScr').on('click.tabmenuScr', '.tabmenu2_wrap ul.tabmenu2 li', function(){
			$(this).addClass('on').siblings().removeClass('on');
			currentIdx = $(this).index();
			if (isSlick == true){
				$this.slick('slickGoTo', currentIdx);
			}
		});
		$window.on('resizeEnd', function(){
			// console.log(currentIdx);
			setSlick(currentIdx);
		})

	}).addClass('is_slicked');
}

/* Custom버전(보류) */
function tabmenuScrInit_(){
	var $tabWrap = $('.tabmenu2_wrap');
	var $tabMenu = $tabWrap.children('ul.tabmenu2');
	var $tabItem = $tabMenu.children('li');
	var $tabItemOn = $tabMenu.children('li.on');
	var limit = 3;

	//현재탭 설정
	var selectActive = function($eleCurrent){
		var gap = $tabMenu.offset().left;
		var btn = $tabWrap.children('.tabmenu_prev').width();
		var scr = $tabMenu.scrollLeft();
		var left = $eleCurrent.offset().left + scr - gap;
		// console.log(left);
		var speed = 200;
		left > scr ? speed = parseInt(left - scr) : speed = parseInt(scr - left);
		if ($window.width() >= breakTA) { speed = speed/2}		
		$tabMenu.stop().animate({'scrollLeft':left}, speed);
	}

	if ($tabItem.length > limit && $tabMenu.hasClass('has_scroll') == false){
		$tabMenu.before('<button type="button" class="tabmenu_prev"><span><span class="blind">이전</span></span></button>');
		$tabMenu.after('<button type="button" class="tabmenu_next"><span><span class="blind">다음</span></span></button>');
		$tabMenu.addClass('has_scroll');
		
		//활성화 이벤트
		$document.on('click.tabmenuScroll', 'ul.tabmenu2.has_scroll li', function(e){
			$(this).addClass('on').siblings().removeClass('on');
			$tabItemOn = $(this);
			selectActive($(this));
		})
		$document.on('click.tabmenuPrev', '.tabmenu_prev', function(e){
			var $tabItemPrev = $tabItemOn.prev();
			if ($tabItemPrev.length) { 
				$tabItemPrev.trigger('click');
				$tabItemOn = $tabItemPrev;
				selectActive($tabItemPrev);
			}
		})
		$document.on('click.tabmenuNext', '.tabmenu_next', function(e){
			var $tabItemNext = $tabItemOn.next();
			if ($tabItemNext.length) { 
				$tabItemNext.trigger('click');
				$tabItemOn = $tabItemNext;
				selectActive($tabItemNext);
				// console.log($tabItemNext.lefnth);
			}
		})
		$window.on('resizeEnd', function(){
			selectActive($tabItemOn);
		});

		//스크롤 이벤트
		var tabSetTime = null;
		var tabWid = $tabMenu.width();
		var tabScr = $tabMenu.scrollLeft();
		var tabSize = $tabMenu.prop('scrollWidth');
		$tabMenu.on('scroll', function(){
			clearTimeout(tabSetTime);
			tabSetTime = setTimeout(function(){
				tabScr = $tabMenu.scrollLeft();
				tabScr == 0 ? $tabMenu.prev().addClass('tabmenu_disabled') : $tabMenu.prev().removeClass('tabmenu_disabled');
				tabScr + tabWid == tabSize ? $tabMenu.next().addClass('tabmenu_disabled') : $tabMenu.next().removeClass('tabmenu_disabled');
			},100);
		})
	} 
	if ($tabItem.length > limit && $tabItemOn.length) {
		selectActive($tabItemOn);
	}
}

/* Selec Active */
function selectInit(){
	$(document).off('click.selectEvent').on('click.selectEvent', '.js_select', function(){
		$(this).addClass('on').siblings().removeClass('on');
	})
}

/* Datepicker */
function datepickerInit(){
	$('.js_datepicker').each(function(){
		var id = $(this).attr('id');
		$(this).attr("readonly", "readonly").prop('readonly', true);
		datepickerUpdate(id);
	});
	datepickerEvent();
	
}

/* 2021-04-24 수정 달력 오늘날짜 보여주기 */
function todaydatepickerInit(){
	$(".day_date").datepicker({
	});
	var myDate = new Date();
	var month = myDate.getMonth() + 1;
	var prettyDate = myDate.getFullYear() + '-' + month + '-' + myDate.getDate();
	$(".day_date").val(prettyDate);
}

function datepickerEvent(){
	$('#ui-datepicker-div').each(function(){
		var $this = $(this);
		$(window).off('pageResizeEnd.datepicker resize.datepicker').on('pageResizeEnd.datepicker resize.datepicker', function(e){
			$this.hide();
		});
	})
}
var datepickersPara = null;
function datepickerUpdate(id){
	if (id != undefined && id != ''){
		var $ele = $('#'+id);
		var maxNum = 99999;
		var minNum;
		var yearRangeBefore = '10';
		var yearRangeAfter = '10';
		var holidays = {}
		if ($ele.attr('data-today') == 'true'){ maxNum = 0 } //오늘까지
		if (parseInt($ele.attr('data-max')) >= 0){ maxNum = parseInt($ele.attr('data-max')) } //오늘까지
		if (parseInt($ele.attr('data-min')) >= 0){ minNum = parseInt($ele.attr('data-min')) } //오늘부터
		if ($ele.is('[data-range-before]')){ yearRangeBefore = $ele.data('range-before') } //이전연도범위
		if ($ele.is('[data-range-after]')){ yearRangeAfter = $ele.data('range-after') } //이후연도범위
		var optionDate = {
			closeText: '닫기',
			prevText: '이전달',
			nextText: '다음달',
			currentText: '오늘',
			monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
			dateFormat: 'yy-mm-dd',//2021-04-24 수정 -원복
			ignoreReadonly: true,
			yearSuffix: '',
			showMonthAfterYear: true,
			showButtonPanel: true,
			showOn: 'both',
			minDate: minNum,
			maxDate: maxNum,
			changeMonth: true,
			changeYear: true,
			yearRange:'c-'+yearRangeBefore+':c+'+yearRangeAfter, // 이전 이후로 얼마나 표시할지 결정
			//buttonImageOnly: false,
			buttonText: '달력',
			beforeShowDay: function(day){
				var result;
				var holiday = holidays[$.datepicker.formatDate("mmdd", day)];
				var thisYear = $.datepicker.formatDate("yy", day);
				if (holiday){
					if(thisYear == holiday.year || holiday.year == ""){
						result = [true, "ui-date-holiday", holiday.title];
					}
				}
				if (!result){
					switch (day.getDay()){
						case 0:
							result = [true, "ui-date-sunday ui-date-holiday"];
							break;
						case 6:
							result = [true, "ui-date-saturday"];
							break;
						default:
							result = [true, ""];
							break;
					}
				}
				return result;
			},
			onSelect : function(selected) {
				datepickersPara = {
					selectDate: selected,
					selectId: id
				}
				console.log('datepicker onSelect: ', selected);
				$window.trigger('datepickerOnSelect');
		 	},	
		}
		$ele.datepicker(optionDate); //기본달력
		var disabled = function(){ $ele.next('.ui-datepicker-trigger').prop('disabled', true).addClass('is_disabled') }
		var enabled = function(){ $ele.next('.ui-datepicker-trigger').prop('disabled', false).removeClass('is_disabled') }
		$ele.prop('disabled') ? disabled() : enabled();
	} else {
		console.log('아이디가 없습니다.');
	}
}

/* Tooltip */
function tooltipInit(){
	$(document).off('click.tooltipOpen').on('click.tooltipOpen', '.btn_tooltip', function(e){
		$(this).closest('.tooltip').addClass('on');
	})
	$(document).off('click.tooltipClose').on('click.tooltipClose', '.tooltip .btn_close', function(e){
		$(this).closest('.tooltip').removeClass('on');
	})
	$(document).off('click.tooltipDoc focusin.tooltipDoc').on('click.tooltipDoc focusin.tooltipDoc', function(e){
		if ($('.tooltip.on').has(e.target).length === 0){
			$('.tooltip.on').removeClass('on');
		}
	});	
}

/* Dropmenu */
function dropInit(){
	$(document).off('click.dropOpen').on('click.dropOpen', '.btn_drop', function(e){
		var $drop = $(this).closest('.drop');
		$drop.toggleClass('on');
		if ($drop.hasClass('on')){
			$drop.find('.drop_menu li:first-child').children().focus();
		}
	})
	$(document).off('click.dropDoc focusin.dropDoc').on('click.dropDoc focusin.dropDoc', function(e){
		if ($('.drop.on').has(e.target).length === 0){
			$('.drop.on').removeClass('on');
		}
	});	
}

/* Dropmenu Select */
function dropSelectInit(){
	$(document).off('click.dropSelect').on('click.dropSelect', '.drop .btn_select', function(e){
		var $btnValue = $(this).closest('.drop').find('.btn_value');
		var $selectValue = $(this).find('span');
		$btnValue.html($selectValue.clone());
		$(this).closest('.drop').removeClass('on');
	})
}

/* Rating */
function ratingInit(){
	$(document).off('click.rating').on('click.rating', '.btn_rate', function(e){
		var idx = $(this).index() + 1;
		$(this).addClass('on');
		$(this).prevAll().addClass('on');
		$(this).nextAll().removeClass('on');
		$(this).siblings('input').val(idx);
		// console.log('별점: '+idx);
	});
}

/* fileUpload */
function fileUploadInit(){
	var $fileBox = $('.filetype');
	
	$fileBox.each(function() {
	var $fileUpload = $(this).find('.input_file'),
		$fileText = $(this).find('.file_text')
		$fileUpload.on('change', function() {
			var fileName = $(this).val();
			$fileText.attr('disabled', 'disabled').val(fileName);
		})
	})
	fileUploadEvent();
}
function fileUploadEvent(){
	/* input file upload */
	$("#file_attach").off('change').on('change',function(){
		var fileName = $("#file_attach").val();	
		$(".upload_name").val(fileName);
	});
}

/* 스탭아코디언 */
function stepAccodionInit(){
	$document.off('click.stepAccodi').on('click.stepAccodi', 'div.step_box2 ul.step_items > li > .title button', function(e){
		$(this).closest('li').toggleClass('on');
		//if ($(this).closest('li').hasClass('on') == true){
		//	$(this).closest('li').siblings().removeClass('on');
		//}
	})
	// $document.off('click.stepAccodi2').on('click.stepAccodi2', 'div.step_box2 ul.step_items > li > .cont button', function(e){
	// 	var $item = $(this).closest('.cont').parent('li');
	// 	if ($item.next().length){ $item.next().find('.title > button').trigger('click') }
	// })
}

/* qnaAccordionInit Active */
function qnaAccordionInit(){
	$(document).off('click.qnaAccordi').on('click.qnaAccordi', 'dl.qna_list > dt > .btn_qna', function(e){
		var $addTitle = $(this).parent();
		var $addCont = $(this).parent().next();
		$addTitle.toggleClass('on').siblings('dt').removeClass('on');
		$addCont.toggleClass('on').siblings('dd').removeClass('on');
	})
}

/* qnaAccordionInit */
function qnaAccordionInit2(){
	$document.off('click.qnaAccodi2').on('click.qnaAccodi2', 'div.leraningQna_wrap ul.qnaItems .title a', function(e){
		e.preventDefault();
		$(this).closest('li').toggleClass('on');
	})
}

/* existingAccordionInit */
function existingAccordionInit(){
	$document.off('click.existingAccodi').on('click.existingAccodi', 'div.existingData_list button.btn_accodi', function(e){
		e.preventDefault();
		$(this).closest('dt').toggleClass('on');
	})
}

/* shadowingAccordionInit */
function shadowingAccordionInit(){
	$document.off('click.shadowingAccodi').on('click.shadowingAccodi', 'div.shadowingData_list button.btn_accodi', function(e){
		e.preventDefault();
		$(this).closest('dt').toggleClass('on');
	})
}

/* cmpltAccordionInit */
function cmpltAccordionInit(){
	$document.off('click.cmpltAccodi').on('click.cmpltAccodi', 'ul.lecture_list button.btn_cmplt', function(e){
		e.preventDefault();
		var num_bottom = $(this).siblings().height();
		$(this).toggleClass('on');
		$(this).siblings().css('bottom', '-' + num_bottom +'px');
	})
}

/* curriAccordionInit Active */
function curriAccordionInit(){
	$(document).off('click.curriAccordi').on('click.curriAccordi', 'dl.curriculum_list > dt > .btn_accodi', function(){
		$(this).parent().toggleClass('on');
		$(this).parent().next().closest('dd').toggleClass('on');
	})
}

/* tenAccordionInit Active */
function tenAccordionInit(){
	$(document).off('click.tenAccordionInit').on('click.tenAccordi', 'dl.ten_command > dt > button.btn_command', function(){
		$(this).parent().parent().toggleClass('on');
	})
}

/* Table Scroll Shadow */
function shadowTableInit(){
	$('.table_scroll, .table_scroll2:not(.table_fixed), .table_scroll3').not('.has_shadow').each(function(){
		$(this).wrap('<div class="table_scroll_wrap"></div>');
		$(this).off('resize.axisResize scroll.axisScroll').on('resize.axisResize scroll.axisScroll', function(){
			shadowTableUpdate($(this));
		})
		shadowTableUpdate($(this));
	}).addClass('has_shadow');
}
function shadowTableUpdate($ele){
	//기본변수
	var $table = $ele.find('table'),
	$eleWrap = $ele.parent('.table_scroll_wrap'),
	groupW = $ele.width(),
	tableW = $table.width(),
	scrollL = $ele.scrollLeft();

	//조건변수
	var isStarted = scrollL == 0,
	isEnded = (tableW - groupW - scrollL) == 0;	
	// console.log(tableW - groupW - scrollL);
	isStarted ? $eleWrap.addClass('is_started') : $eleWrap.removeClass('is_started');
	isEnded ? $eleWrap.addClass('is_ended') : $eleWrap.removeClass('is_ended'); 
	setTimeout(function(){
		console.log(tableW, groupW, scrollL);
	}, 2000); 
}


/* 틀고정테이블 */
function tableFixedInit(){
	$('.table_fixed').not('.is_grid').each(function(i){
		var $table = $(this).find('> table');
		var lens = Number($(this).data('fixed'));
		
		$(this).append('<div class="table_scroll_fixed"></div>');
		$(this).append('<div class="table_scroll_body"></div>');
		
		$('.table_scroll_fixed').append($table.clone());
		$('.table_scroll_body').append($table.clone());

		$('.table_scroll_fixed').find('col, td, th').not('.col_fixed').remove();
		// $('.table_scroll_body').find('.col_fixed').remove();

		$('.table_scroll_fixed').find('thead tr').each(function(){
			if ($(this).find('.col_fixed').length == 0) { $(this).remove() }
		})
		if ($('.table_scroll_fixed tr .col_fixed').eq(0));
		$table.remove();

		$(this).addClass('is_grid');
		$window.off('resize.tablefiexed').on('resize.tablefiexed', function(){
			tableFixedReset();
		})
		tableFixedReset();
	})
}
function tableFixedReset(){
	$('.table_scroll_body tbody').find('tr').each(function(i){
		var h_td = $(this).find('td:first-child').height();
		var $table = $(this).closest('.table_fixed');
		$table.find('.table_scroll_fixed table tbody tr').eq(i).find('td:first-child').height(h_td);
	})
	$('.table_scroll_body thead').find('tr').each(function(i){
		var h_th = $(this).find('th:first-child').outerHeight();
		var $table = $(this).closest('.table_fixed');
		var $tr = $table.find('.table_scroll_fixed table thead tr');
		if ($tr.eq(i).length){
			$tr.eq(i).find('th:first-child').height(h_th);
		} else {
			$tr.eq(i-1).find('th:first-child').css('height', (h_th*2)+'px');
		}
	})
}

function tableFixedCustomInit(){
	tableFixedCustomUpdate();
	tableFixedCustomEvent();
}
function tableFixedCustomEvent(){
	var isBreakPoint = null;
	var curBreakPoint = null;
	var breakpoint = function(){
		if ($window.width() < breakTA){
			curBreakPoint = 'mobile';
		} else if ($window.width() < breakPC){
			curBreakPoint = 'tablet';
		} else {
			curBreakPoint = 'pc';
		}
	}
	breakpoint();
	isBreakPoint = curBreakPoint;
	$window.off('resizeEnd.tableCustom').on('resizeEnd.tableCustom', function(){ 
		breakpoint();
		if (curBreakPoint != isBreakPoint && $window.width() < breakPC){
			tableFixedCustomReset();
			// console.log('asdfasdf');
			isBreakPoint = curBreakPoint;
		}
	});
}
function tableFixedCustomReset(){
	$('.table_fixed.type_custom:visible')
	.css('opacity', 0)
	.find('.table_scroll_body .col_fixed').removeClass('col_set');
	setTimeout(function(){
		tableFixedCustomUpdate();
	},100);
}
function tableFixedCustomUpdate(){
	$('.table_fixed.type_custom').each(function(i){
		var $fixedCol = $(this).find('.table_scroll_fixed .col_fixed');
		var $bodyCol = $(this).find('.table_scroll_body .col_fixed');
		var bodyH = [];
		var reset = function(){
			$fixedCol.each(function(i){
				$(this).css('height', bodyH[i] + 'px');
				$bodyCol.addClass('col_set');
				// console.log(bodyH);
			})	
		}
		$bodyCol.each(function(i){
			bodyH.push($(this).outerHeight());
			if (i == $bodyCol.length - 1){
				reset();
			}
		})
		$(this).removeAttr('style')
	})
}	

/*---------------------------------------------------------------
	@Contents
---------------------------------------------------------------*/
/* 모든강좌 - 선샌님*/
function allLectureSlideInit(){
	$('.teacher_wrap').not('.is_slicked').each(function(){
		if ($(this).find('.slide_item').length > 1 ){
			$(this).slick({
				infinite:true,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
				responsive: [
				  {
					breakpoint: breakPC,
					settings: {
					  slidesToShow: 1
					}
				  },
				  {
					breakpoint: breakTA,
					settings: {
					  slidesToShow: 1
					}
				  }
				]
			});
		}
	}).addClass('is_slicked');
}

/* 모든강좌 - 최근수강후기 */
function allLectureReviewSlideInit(){
	$('.review_slide').not('.is_slicked').each(function(){		
		if ($(this).find('.slide_item').length > 1 ){
			$(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
				var idx = currentSlide;
				(!idx) ? idx = 1 : idx = idx + 1;
				$('.review_slide_page').text(idx + ' / ' + slick.slideCount);
			}).slick({
				infinite:true,
				autoplay:false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
				responsive: [
				  {
					breakpoint: breakPC,
					settings: {
					  slidesToShow: 1
					}
				  },
				  {
					breakpoint: breakTA,
					settings: {
					  slidesToShow: 1
					}
				  }
				]
			});
		}
	}).addClass('is_slicked');
}

/* 입시정보 - 대입상담실 */
function adviserListSlideInit(){
	$('.adviser_list').not('.is_slicked').each(function(){
		$(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$('.adviser_pager').text(i + ' / ' + slick.slideCount);
		}).slick({
			infinite:true,//2021-04-28 싱크 수정
			arrows: true,
            autoplay: true,
			slidesToShow: 3,
			slidesToScroll: 1,//2021-04-28 싱크 수정
			speed: 600,
			focusOnChange: true,
			accessibility: true,
			responsive: [
			  {
				breakpoint: breakPC,
				settings: {
				  slidesToShow: 1
				}
			  }
			]
		});
	}).addClass('is_slicked');
}

/* 교재 - 시리즈 전체 교재 */
function seriesAllBookInit(){
	// 교재 상세 슬라이더 스크립트
	$('#textbook_detail_slider').not('.is_slicked').each(function(){
		$(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? Math.round(currentSlide / 5) + 1 : 1);
			$('#textbook_detail_pager').text(i + '/' + Math.ceil(slick.slideCount / 5));
		}).slick({
			infinite: true,
			speed: 400,
			slidesToShow: 5,
			slidesToScroll: 5,
			responsive: [{
				breakpoint: breakPC,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}]
		}).addClass('is_slicked');
	})
}

/* 빠른강좌 - 시리즈 전체 교재 */
function seriesAllBookInit2(){
	// 교재 상세 슬라이더 스크립트
	$('#textbook_list_slider').not('.is_slicked').each(function(){
		// $(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		// 	var i = (currentSlide ? Math.round(currentSlide / 5) + 1 : 1);
		// 	$('#textbook_list_pager').text(i + '/' + Math.ceil(slick.slideCount / 5));
		// }).slick({
		$(this).slick({
			infinite: true,
			speed: 400,
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [
			{
				breakpoint: breakPC,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},{
				breakpoint: 840,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},{
				breakpoint: breakTA,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},{
				breakpoint: 420,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}]
		}).addClass('is_slicked');
	})
}

/* 교재 - 메인비주얼배너 */
function textbookVisual(id){
	// 교재 상세 슬라이더 스크립트 | 2022-04-07 수정
	$('.banner_visual_slide').not('.is_slicked').each(function(){
		$(this).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			$(this).siblings('.adviser_pager').text(i + ' / ' + slick.slideCount);
		}).slick({
			infinite: true,
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1,
			setPosition: 0,
			dots: false,// 자동 스크롤 2021-05-31 수정
			arrows: true,
			autoplay: true,// 자동 스크롤 2021-05-25 수정
			autoplaySpeed: 3000,// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms) 2021-05-25 수정
			pauseOnHover: true,// 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정 2021-05-25 수정
			responsive: [ // 자동 스크롤 2021-05-31 추가
			{
				breakpoint: 1024,
				settings: {
					dots: true,
				}
			}]
		});
	}).addClass('is_slicked');

}
/*function textbookVisual(id){
	// 교재 상세 슬라이더 스크립트
	$('#'+id).not('.is_slicked').each(function(){
		$(this).slick({
			infinite: true,
			speed: 400,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			autoplay: true,// 자동 스크롤 2021-05-25 수정
			autoplaySpeed: 3000,// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms) 2021-05-25 수정
			pauseOnHover: true,// 슬라이드 이동시 마우스 호버하면 슬라이더 멈추게 설정 2021-05-25 수정
		});
	}).addClass('is_slicked');

}*/

/* 입시정보 - 서브메인 */
function entranceInfoSlideInit(){
	var $slick = $('.entrance_info_list');
	if ($slick.find('.slide_item').length > 1 && $slick.hasClass('is_slicked') == false) {
		$slick.slick({
			infinite: true,
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2600,
			speed: 600,
			focusOnChange: true,
			accessibility: true,
			responsive: [
			{
				breakpoint: breakPC,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: breakTA,
				settings: {
						slidesToShow: 1
					}
				}
			]
		});
		$slick.addClass('is_slicked');
	}
}

/* 모의고사 - 풀서비스 배너 */
function fullsvSlideInit(){
	var $slick = $('.fullsv_banner');
	if ($slick.find('.slide_item').length > 0 && $slick.hasClass('is_slicked') == false) {
		$slick.slick({
			infinite:true, //2021-06-14 수정
            autoplay: true, //2021-06-14 추가
            autoplaySpeed: 5000, //2021-06-14 추가
			dots: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 600,
			focusOnChange: true,
			accessibility: true,
		});
		$slick.addClass('is_slicked');
	}
}

/* 모의고사 - 분류별분석 */
function fullsvAccodiInit(){
	$document.off('click.fullsvAccodiPlus').on('click.fullsvAccodiPlus', '.tbl_accodi_title .btn_accodi', function(){
		var id = $(this).data('id');
		fullsvAccodiAction(id);
	})
}
function fullsvAccodiAction(id){
	var $accodiCont = $('#'+id);
	var $accodiBtn = $('.btn_accodi[data-id="'+id+'"]');
	$accodiCont.toggleClass('hidden');
	$accodiBtn.toggleClass('on');
}

/* 나의학습방 - 예비학습자 */
function myClassSlideInit(){
	$('.rank_list').not('.is_slicked').each(function(){
		if ($(this).find('.slide_item').length > 1 ){
			$(this).slick({
				infinite:false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
				responsive: [
				  {
					breakpoint: breakPC,
					settings: {
					  slidesToShow: 1
					}
				  },
				  {
					breakpoint: breakTA,
					settings: {
					  slidesToShow: 1
					}
				  }
				]
			});
		}
	}).addClass('is_slicked');
}

/* 나의학습방 - 최근수강신청 */
function myClassSlideInit2(){
	$('.existing_learner').not('.is_slicked').each(function(){
		if ($(this).find('.slide_item').length > 1 ){
			$(this).slick({
				infinite:false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
				responsive: [
				  {
					breakpoint: breakPC,
					settings: {
					  slidesToShow: 1
					}
				  },
				  {
					breakpoint: breakTA,
					settings: {
					  slidesToShow: 1
					}
				  }
				]
			});
		}
	}).addClass('is_slicked');
}

/* 나의학습방 - 나의 학습계획표 */
function myClassSlideInit3(idx){
	$('.slide_days').not('.is_slicked').each(function(){
		if ($(this).find('.slide_item').length > 1 ){
			$(this).slick({
				// infinite:true,
				arrows: true,
				centerMode: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
				initialSlide:idx,
				// responsive: [
				//   {
				// 	breakpoint: breakPC,
				// 	settings: {
				// 	  slidesToShow: 3.6
				// 	}
				//   },
				//   {
				// 	breakpoint: breakTA,
				// 	settings: {
				// 	  slidesToShow: 3.6
				// 	}
				//   },
				//   {
				// 	breakpoint: 370,
				// 	settings: {
				// 	  slidesToShow: 3
				// 	}
				//   }
				// ]
			});
		}
	}).addClass('is_slicked');
}

/* 나의학습방 - 인공지능 추천문제 TOP5 */
function myClassSlideInit4(){
	$('.leagueTop5').not('.is_slicked').each(function(){
		if ($(this).find('.slide_item').length > 1 ){
			$(this).slick({
				infinite:false,
				arrows: true,
				slidesToShow: 5,
				slidesToScroll: 1,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
                adaptiveHeight: true,
				responsive: [
				  {
					breakpoint: breakPC,
					settings: {
					  slidesToShow: 1
					}
				  },
				  {
					breakpoint: breakTA,
					settings: {
					  slidesToShow: 1
					}
				  }
				]
			});
		}
	}).addClass('is_slicked');
}

/* 나의학습방 - 슬라이드탭 */
function tabSlideInit(idx){
	$('.tab_slick').not('.is_slicked').each(function(){
		if ($(this).find('.slide_item').length > 3 ){
			$(this).slick({
				infinite:false,
				arrows: true,
				centerMode: false,
				slidesToShow: 6,
				slidesToScroll: 1,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
				initialSlide:idx,
				responsive: [
				  {
					breakpoint: breakPC,
					settings: {
					  slidesToShow: 2
					}
				  },
				  {
					breakpoint: breakTA,
					settings: {
					  slidesToShow: 2
					}
				  }
				]
			});
		}
	}).addClass('is_slicked');
	var $items = $('.tab_slick').find('.slide_item');
	if ($items.length == idx + 1 ){
		$items.eq(idx).addClass('slick-current').siblings().removeClass('slick-current');
	}
}

/* 과목탭메뉴공통 - 슬라이드탭 */
function tabSlide2Init(idx){
	var action = function(){
		$('.tabmenu_slick').not('.is_slicked').each(function(){
			if ($('.tabmenu_slick').find('.slide_item').length > 3){
				$('.tabmenu_slick').slick({
					infinite:false,
					arrows: true,
					centerMode: false,
					slidesToShow: 6,
					slidesToScroll: 1,
					speed: 600,
					focusOnChange: true,
					accessibility: true,
					initialSlide:idx,
					responsive: [
					{
						breakpoint: breakPC,
						settings: {
						slidesToShow: 2
						}
					},
					{
						breakpoint: breakTA,
						settings: {
						slidesToShow: 2
						}
					}
					]
				});
			}
		}).addClass('is_slicked');;
	}
	var resizeCheck = function(){
		if ($(window).width() < 1024) {
			action();
		} else {
			if ($('.tabmenu_slick').hasClass('is_slicked')){
				$('.tabmenu_slick').slick('unslick').removeClass('is_slicked');
			}
		}
	}

	resizeCheck();
	$(window).on('resizeEnd', function(){
		resizeCheck();
	})
	
	$(document).off('click.tabmenuSlick').on('click.tabmenuSlick', '.tabmenu_slick a' ,function(e){
		$(this).parent().addClass('slick-current').siblings().removeClass('slick-current');
	})
	
	var $items = $('.tabmenu_slick').find('.slide_item');
	if ($items.length){
		$items.eq(idx).addClass('slick-current').siblings().removeClass('slick-current');
	}
}

/* 교재커리큘럼 - 슬라이드탭 */
var tabSlide3Slick = false;
function tabSlide3Init(){
	$('.curri_tab').find('.slide_item.on').each(function(){
		var idx = $(this).index();
		tabSlide3Update(idx);
	})
}
function tabSlide3Update(idx){
	var action = function(){
		$('.curri_tab').each(function(){
			if ($(this).find('.slide_item').length > 2){
				$(this).slick({
					infinite:false,
                    autoplay: true, //2021-06-07 추가
                    autoplaySpeed: 5000, //2021-06-07 추가
					arrows: true,
					centerMode: false,
					slidesToShow: 3,
					slidesToScroll: 1,
					speed: 600,
					focusOnChange: true,
					accessibility: true,
					responsive: [
						{
							breakpoint: breakPC,
							settings: {
								initialSlide:idx,
								slidesToShow: 2
							}
						},
						{
							breakpoint: breakTA,
							settings: {
								initialSlide:idx,
								slidesToShow: 2
							}
						}
					]
				});
			}
		}).addClass('is_slicked');
	}
	action();
	
	$(document).off('click.tabmenu3Slick').on('click.tabmenu3Slick', '.curri_tab a' ,function(e){
		$(this).parent().addClass('on').siblings().removeClass('on');
	})
	
	var $items = $('.curri_tab').find('.slide_item');
	if ($items.length){
		$items.eq(idx).addClass('on').siblings().removeClass('on');
	}
}

/* 선생님 - 듀냐TV */
function dunatvSlideInit(){
	$('.main_dunatv_slide').not('.is_slicked').each(function(){
		if ($(this).find('.slide_item').length > 1 ){
			$(this).slick({
				infinite:true,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
			});
		}
	}).addClass('is_slicked');
}

/* 나의좋아요 - 나의 좋아요 강좌 */
function mylikeSlideInit1(){
	$('.like_lecture_list').not('.is_slicked').each(function(){
		if ($(this).find('.slide_item').length > 1 ){
			$(this).slick({
				infinite:false,
				arrows: true,
				slidesToShow: 2,
				slidesToScroll: 2,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
				responsive: [
				  {
					breakpoint: breakPC,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1,
					}
				  },
				  {
					breakpoint: breakTA,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1,
					}
				  }
				]
			});
		}
	}).addClass('is_slicked');
}

/* 나의좋아요 - 나의 좋아요 선생님 */
function mylikeSlideInit2(){
	$('.like_teacher_list').not('.is_slicked').each(function(){
		if ($(this).find('.slide_item').length > 1 ){
			$(this).slick({
				infinite:true,
				arrows: true,
				// centerMode: true,
				slidesToShow: 6,
				slidesToScroll: 1,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
				responsive: [
				  {
					breakpoint: breakPC,
					settings: {
					  slidesToShow: 3
					}
				  },
				  {
					breakpoint: breakTA,
					settings: {
					  slidesToShow: 3
					}
				  }
				]
			});
		}
	}).addClass('is_slicked');
}

/* 나의학습방 - 학습계획표 */
function myLearningCalInit(){
	var $datepicker = $("#datepicker");
	$datepicker.each(function(){
		var availableDates = $datepicker.data('value').split(',');
		$datepicker.datepicker({
			monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
			prevText: '이전달',
			nextText: '다음달',
			dateFormat: 'yy-mm-dd',
			showMonthAfterYear: true,
			yearSuffix: '.',
			beforeShowDay: function(day){
				// 설정적용
				var weekdays = function(status, clsName){
					
					switch (day.getDay()){
						default:
							result = [status, clsName];
							break;
					}
				}
	
				var result;
				var thisYear = $.datepicker.formatDate("yy", day);
	
				// 특정일 활성화
				var thismonth = day.getMonth()+1;
				var thisday = day.getDate();
				if (thismonth<10){ thismonth = '0'+thismonth }
				if (thisday<10){ thisday = '0'+thisday }
				var ymd = day.getFullYear()+"-"+thismonth+"-"+thisday;
	
				// 특정일이 있는경우만
				if ($.inArray(ymd, availableDates) >= 0){
					weekdays(true, 'ui-datepicker-on');
				} else {
					weekdays(true);
				}
	
				// 요일체크
				if (!result){
					weekdays(true);
				}
				return result;
			},
			onSelect : function(selected) {
				datepickersPara = {
					selectDate: selected,
					selectId: 'datepicker'
				}
				console.log('datepicker onSelect: ', selected);
				$datepicker.find('.ui-datepicker-today').removeClass('ui-datepicker-today');
				$window.trigger('datepickerOnSelect');
			 },	
		})
		$window.off('datepickerOnSelect.datepicker').on('datepickerOnSelect.datepicker', function(e){
			// console.log($('.ui-state-active').closest('tr').length);
			setTimeout(function(){
				$('.ui-state-active').closest('tr').addClass('on').siblings().removeClass('on');
			}, 50)
		});
	});
}

/* 나의학습방 - 날짜별스케쥴 */
function myWeekSlideInit(){
	$('.weekly_slide').not('.is_slicked').each(function(i){
		var $this = $(this);
		if ($this.find('.slide_item').length > 1 ){
			var mySlickAction = false;
			var slickAction = function(){
				$this.slick({
					// infinite:true,
					arrows: false,
					// centerMode: true,
					dots: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 600,
					focusOnChange: true,
					accessibility: true,
				})
				mySlickAction = true;
			}
			$(window).off('resizeEnd.weeklySlide'+i).on('resizeEnd.weeklySlide'+i, function(){
				if ($(window).width() < breakPC) {
					if (mySlickAction == false) {
						slickAction();
					}
				} else {
					if (mySlickAction == true) {
						$this.slick('unslick');
						mySlickAction = false;
					}
				}
			});
			$(window).trigger('resizeEnd');
		}
	}).addClass('is_slicked');;
}

/* 2021-04-14 수정 듀냐  */
function weeklySlideInit(){
	$('.weekly_dates_slide').not('.is_slicked').each(function(){
		if ($(this).find('.slide_item').length > 1 ){
			$(this).slick({
				infinite:false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
				responsive: [
				  {
					breakpoint: breakPC,
					settings: {
					  slidesToShow: 1
					}
				  },
				  {
					breakpoint: breakTA,
					settings: {
					  slidesToShow: 1
					}
				  }
				]
			});
		}
	}).addClass('is_slicked');
}

/* 2021-07-22 교재안내  */
function textbookSlideInit(){
	$('.textbook_view_slide').not('.is_slicked').each(function(){
		var $this = $(this);
		if ($(this).find('.textbook_view').length > 1 ){
			$(this).slick({
				infinite:false,
				arrows: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 600,
				focusOnChange: true,
				accessibility: true,
				responsive: [
					{
					  breakpoint: breakPC,
					  settings: {
						slidesToShow: 1
					  }
					},
					{
					  breakpoint: breakTA,
					  settings: {
						slidesToShow: 1
					  }
					}
				  ]
			});
		}
		$('.textbook_view_slide').trigger('resize');
	}).addClass('is_slicked');
}

/* 풀서비스탭 */
function fullsvStickyInit(){
	$('.sticky_tab').each(function(){
		var $this = $(this);
		fullsvStickyUpdate($this);
		// console.log('$this.height() 1 : ' +$this.find('.tabmenu4').height());
		fullsvStickyEvent($this);
	})
}
function fullsvStickyEvent($this){
	$window.on('scroll resize', function(){ fullsvStickyUpdate($this) });
	$this.find('ul.tabmenu4 > li').on('click', function(){
		var eleTop = $this.offset().top - $this.find('.tabmenu4').height() +5;
		//console.log('eleTop : ' + eleTop+' scrollTop : '+$window.scrollTop());
		$window.scrollTop(eleTop);
	})
}
function fullsvStickyUpdate($this){
	if ($window.width() < breakPC) {
		var scrTop = $window.scrollTop() + $('nav .gnb_wrap .le_nav ul').height();
		var eleTop = $this.offset().top - 1;
		scrTop > eleTop ? $this.addClass('sticky') : $this.removeClass('sticky');
	}
}

/* 통합검색 */
function roadMapListMore(){
	$document.off('click.roadMapListMore').on('click.roadMapListMore', 'div.roadMap-list_wrap a.btn_more', function(e){
		var $wrap = $(this).closest('div.roadMap-list_wrap');
		var str = $(this).text();
		$wrap.toggleClass('view');

		str == '- 닫기' ? str = '- 더보기' : str = '- 닫기';
		$(this).text(str);
	})
}

/* 선생님 관리자용 레이어팝오버 */
function popoverMngOpen(id){
	var $id = $('#' + id);
	$id.removeClass('hidden');
	$document.off('click.'+id).on('click.'+id, function(e){
		if ($(e.target).closest('#' + id).length == 0 && $(e.target).closest('button[data-id='+id+']').length == 0){
			popoverMngClose(id);
		}
	})

	//레이어가 화면에 가리는 경우
	var scrTop = $window.scrollTop(),
		winHei = $window.height(),
		eleTop = $id.offset().top,
		eleHei = $id.outerHeight(),
		curTop = scrTop + ((eleTop + eleHei) - (scrTop + winHei)) + 30;
	if (scrTop + winHei < eleTop + eleHei){

		$('html, body').animate({'scrollTop': curTop+'px'}, 200);
	}

	//콜백이필요한경우
	if ($id.data('callback') != '' && $id.data('callback') != undefined){
		var str = $id.data('callback');
		getNewFunction(str);
	}

}
function popoverMngClose(id){
	$('#' + id).addClass('hidden');
	$document.off('click.'+id);

	setTimeout(function(){
		if ($('.popover_mng:visible').length == 0){
			$('button[data-id='+id+']').focus();
		}
	}, 50)
}

function curriCulumInit(){
	curriCulumTab();
	curriCulumSubject();
}
function curriCulumTab(){
	$document.off('click.curriTab').on('click.curriTab', '.sub_curri_tab > li', function(e){
		e.preventDefault();
		var idx = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		if ($('.curriculum_cont .grade_cont').length){
			$('.grade_cont > .cont').eq(idx).addClass('on').siblings('.cont').removeClass('on');
		}
		if ($('.curriculum_cont .kojeMapCont').length){
			$('.kojeMapCont > .kojeMap').eq(idx).addClass('on').siblings('.kojeMap').removeClass('on');
		}
		// tableFixedCustomInit();
	})

	/*if(targetCode == 'D300'){
		$('.yearCurriculum ').addClass('go3').removeClass('go1').removeClass('go2').removeClass('susiNon');
		$('.sub_curri_tab li').removeClass('on');
	}else if(targetCode == 'D200'){
		$('.yearCurriculum ').addClass('go2').removeClass('go1').removeClass('go3').removeClass('susiNon');
		$('.sub_curri_tab li').removeClass('on');
	}else if(targetCode == 'D100'){
		$('.yearCurriculum ').addClass('go1').removeClass('go2').removeClass('go3').removeClass('susiNon');
		$('.sub_curri_tab li').removeClass('on');
	}else if(targetCode =='D400'){
		$('.yearCurriculum .desc').hide();
		$('.tabAreaWrap').hide();
	} 2021-04-05 학년체크 추가 */

	/* 2021-04-05 추가 */
	$('.sub_curri_tab li.item01 a').on('click',function(){
		$('.container ').addClass('go1').removeClass('go2').removeClass('go3').removeClass('susiNon');
        $('.grade_num').text('고1');
	});
	$('.sub_curri_tab li.item02 a').on('click',function(){
		$('.container ').addClass('go2').removeClass('go1').removeClass('go3').removeClass('susiNon');
        $('.grade_num').text('고2');
	});
	$('.sub_curri_tab li.item03 a').on('click',function(){
		$('.container ').addClass('go3').removeClass('go1').removeClass('go2').removeClass('susiNon');
        $('.grade_num').text('고3');
	});
	$('.sub_curri_tab li.item04 a').on('click',function(){
		$('.container ').addClass('susiNon').removeClass('go1').removeClass('go2').removeClass('go3');
	});
}
function curriCulumSubject(){
	$document.off('click.curriSubject').on('click.curriSubject', '.curriculum_cont .subject_list > li', function(e){
		var subject = $(this).attr('class').replace('item_', '').replace(' on', '');
		if (subject == 'history') subject = 'his';
		if (subject == 'social') subject = 'soc';
		if (subject == 'science') subject = 'sci';
		var $listItem = $(this);
		var $subjectAll = $('.curriculum_cont dd').not('.all').find('a');
		var $subject = $('.curriculum_cont dd').find('a.'+subject);
		// console.log(subject);
		if (subject == 'all') { 
			if ($listItem.hasClass('on')){
				$listItem.removeClass('on').siblings().removeClass('on');
				$subjectAll.removeClass('on');
			} else {
				$listItem.addClass('on').siblings().addClass('on');
				$subjectAll.addClass('on');
			}
		} else {
			$listItem.toggleClass('on');
			$subject.toggleClass('on');
			if ($listItem.parent().find('.item_all').siblings('.on').length == 6){
				$listItem.siblings('.item_all').addClass('on');
			} else {
				$listItem.siblings('.item_all').removeClass('on');
			}
		}
	});
	var $defaultItem = $('.curriculum_cont .subject_list .item_all');
	if ($defaultItem.length){ $defaultItem.trigger('click'); }
}

$(function(){
	set_UI();
	init_UI();
})