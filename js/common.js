/* ========================================================================
 * common.js
 * ======================================================================== */

$(function () {
  function detectDevice() {
    const $html = $("html");
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /Tablet|iPad/i.test(navigator.userAgent);
    const isDesktop = !isMobile && !isTablet;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

    if (isMobile || isTouchDevice) {
      $html.addClass("mobile");
    } else if (isTablet) {
      $html.addClass("tablet");
    } else if (isDesktop) {
      $html.addClass("pc");
    }
  } 

  function initGnb() {
      const $header = $("#header");
      const $gnbMenu = $("#gnb .gnb_menu");

      function headerHoverOn() {
          $header.addClass("hover");
      }

      function headerHoverOff() {
          $header.removeClass("hover");
      }

      function gnbResizeHandler() {
          if ($(window).width() >= 980) {
              $gnbMenu.on("mouseover focusin", headerHoverOn);
              $gnbMenu.on("mouseleave focusout", headerHoverOff);
          } else {
              $gnbMenu.off("mouseover focusin", headerHoverOn);
              $gnbMenu.off("mouseleave focusout", headerHoverOff);
              $header.removeClass("hover");
          }
      }

      gnbResizeHandler();
      $(window).on("resize", gnbResizeHandler);
  }

  function hideTopBanner() {
    jQuery.fn.exists = function(){ return this.length > 0; }
    if ($("#top_banner").exists()) {
      $(".btn_close").on("click", function () {
          $("#top_banner").hide();
          $("#wrap").addClass("ban_close");
      });
    } else {
      $("#wrap").addClass("ban_close");
    }
  }

  function initSitemap() {
      $(".toggle_btn, .sitemap_dim").click(function () {
          $(".sitemap").toggleClass("open");
      });

      $(".sitemap .bt_more").click(function () {
          const $this = $(this);
          if ($this.hasClass("on")) {
              $this.removeClass("on");
              $this.parent().removeClass("on");
              $this.next(".sm").slideUp();
          } else {
              $(".sitemap .mm").removeClass("on");
              $(".sitemap .sm").slideUp();
              $this.addClass("on");
              $this.parent().addClass("on").siblings().removeClass("on");
              $this.next(".sm").slideDown();
          }
      });
  }

  function initInstitutionSelect() {
      const $select = $("#institution_select");
      const $label = $('label[for="institution_select"]');

      $select.change(function () {
          const selectText = $select.children("option:selected").text();
          $label.text(selectText);
      });

      $select.change(function () {
          const selectedValue = $select.val();
          if (selectedValue !== "") {
              window.open(selectedValue, "_blank");
          }
      });
  }

  function initBackToTop() {
      const $btnTop = $(".btn_top");

      $(window).scroll(function () {
          if ($(this).scrollTop() > 500) {
              $btnTop.addClass("show");
          } else {
              $btnTop.removeClass("show");
          }
      });

      $btnTop.click(function () {
          $("html, body").animate({ scrollTop: 0 }, 680);
      });
  }

  function isMobile() {
    return window.matchMedia("(max-width: 740px)").matches;
  }

  function initializeTabs() {
    if (!isMobile()) {
      $(".tab_button").on("click", function(e) {
        e.preventDefault();

        $(".tab_button").removeClass("active");
        $(".tab_panel").removeClass("active").attr("hidden", true);

        $(this).addClass("active");
        $("#" + $(this).attr("aria-controls")).addClass("active").removeAttr("hidden");
        localStorage.setItem("selectedTabIndex", $(this).index());
      });

      var selectedTabIndex = localStorage.getItem("selectedTabIndex") || 0;
      $(".tab_button").eq(selectedTabIndex).trigger("click");
    } else {
      $(".tab_button").off("click");
      $(".tab_button").removeClass("active");
      $(".tab_panel").removeClass("active").removeAttr("hidden");
    }
  }
  
  function toggleFixClass() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 10) {
          $('.path').addClass('fix');
      } else {
          $('.path').removeClass('fix');
      }

      if ($(this).scrollTop() > 140) {
        $('.tab_list').addClass('tab_fix');
    } else {
        $('.tab_list').removeClass('tab_fix');
    }
    });
  }

//이메일 선택
$('#slctEml').change(function(){
	if ($(this).val() != '') {
		$('#suffixEml').val($(this).val());
	} else {
		$('#suffixEml').val('');
	}
});

//label 변경
$('.select-area').change(function(){
  $(this).parent('.select').find('label').text($(this).val());
});

$('.lnb .bt.drop').click(function(){
  $(this).parent().toggleClass('on').siblings().removeClass('on');
  if ($(window).width() < 740){
    $(this).parent().toggleClass('on');
  }
});

$('.popup .bt.x').click(function(){
  $('.popup.bbs').addClass('hide');
});
$('.operation_btn').click(function(){
  $('.popup.bbs').removeClass('hide');
});

function updatePlaceholder() {
  if ($(window).width() < 741) {
    $('#formTitle').attr('placeholder', '제목*');
  } else {
    $('#formTitle').removeAttr('placeholder');
  }
}

function resizeFunctions() {
  initializeTabs();
  updatePlaceholder();
}

$(window).on("resize", resizeFunctions);

  $(function () {
    detectDevice();
    initGnb();
    hideTopBanner();
    initSitemap();
    initInstitutionSelect();
    initBackToTop();
    toggleFixClass();
    initializeTabs();
    updatePlaceholder();
  });
});



