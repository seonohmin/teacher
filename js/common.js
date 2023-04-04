/* ========================================================================
 * gnb hover
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


  // PC와 모바일 모드 감지
  function isMobile() {
    return window.matchMedia("(max-width: 740px)").matches;
  }

  // 탭 초기화
  function initializeTabs() {
    if (!isMobile()) {
      // PC 모드에서 탭 기능 활성화
      $(".tab_button").on("click", function(e) {
        e.preventDefault();

        // 다른 탭 비활성화
        $(".tab_button").removeClass("active");
        $(".tab_panel").removeClass("active").attr("hidden", true);

        // 선택한 탭 활성화
        $(this).addClass("active");
        $("#" + $(this).attr("aria-controls")).addClass("active").removeAttr("hidden");
        localStorage.setItem("selectedTabIndex", $(this).index());
      });

      // 저장된 탭 인덱스 불러오기 및 적용
      var selectedTabIndex = localStorage.getItem("selectedTabIndex") || 0;
      $(".tab_button").eq(selectedTabIndex).trigger("click");
    } else {
      // 모바일 모드에서 탭 기능 비활성화
      $(".tab_button").off("click");
      $(".tab_button").removeClass("active");
      $(".tab_panel").removeClass("active").removeAttr("hidden");
    }
  }
  initializeTabs();
  // 창 크기 조절시 탭 초기화
  $(window).on("resize", function() {
    initializeTabs();
  });

  function toggleFixClass() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 30) {
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

  $(function () {
    detectDevice();
    initGnb();
    hideTopBanner();
    initSitemap();
    initInstitutionSelect();
    initBackToTop();
    toggleFixClass();
    // initTab();
    // initResizeEvent();
    // handleResize();

  });
});



