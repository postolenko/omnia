function getSidebarPosition() {
  if( $("#imgBox").length > 0 && bodyWidth > 600 ) {
    var sidebarWrappTopCoord, sidebarWrappBottomCoord, windowtopCoord, windowBottomCoord;
    sidebarWrappTopCoord = $(".sidebar_wrapp").offset().top;
    sidebarWrappBottomCoord = $(".bottom_coord").offset().top;
    windowTopCoord = $(document).scrollTop();
    windowBottomCoord = windowTopCoord + $(window).height();
    if( windowTopCoord > sidebarWrappTopCoord ) {
      $("#imgBox").addClass("fixed");
      $("#imgBox").removeClass("absolute");
      if($("#imgBox").offset().top + $("#imgBox").outerHeight() >= sidebarWrappBottomCoord) {
        $("#imgBox").removeClass("fixed");
        $("#imgBox").addClass("absolute");
      }
    } else {
      $("#imgBox").removeClass("fixed");
      $("#imgBox").removeClass("absolute");
    }
  }
}

function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

function getRightCoord() {
  if($("#right_coord").length > 0) {
    var ridgtCoord = $("#right_coord").offset().left;
    $("#imgBox").css({
      "width" : ridgtCoord + "px"
    });
  }
}

function getMeetUsSlider() {
  if($(".thumbnails_2").length > 0) {
    demo = $(".thumbnails_2");
    if(bodyWidth >= 900) {
       demo.owlCarousel('destroy');
       demo.removeClass('owl-carousel');
    } else {
      demo.addClass('owl-carousel');
      demo.owlCarousel({
          loop:true,
          margin:10,
          dots: false,
          nav: true,
          responsiveClass:true,
          autoWidth: true,
          startPosition:1
      });
    }
    $(document).on('mouseenter', '.thumb_2', function() {
      $( this ).find(".thumb_2_text").slideDown(300);
    });
    $(document).on('mouseleave', '.thumb_2', function() {
      $( this ).find(".thumb_2_text").slideUp(300);
    });
  }
}

function getPricesSlider() {
  if($(".prices_thumbnails").length > 0) {
    pricesThumbnails = $(".prices_thumbnails");
    if(bodyWidth >= 1024) {
       pricesThumbnails.owlCarousel('destroy');
       pricesThumbnails.removeClass('owl-carousel');
    } else {
      pricesThumbnails.addClass('owl-carousel');
      pricesThumbnails.owlCarousel({
          loop:true,
          margin:20,
          dots: false,
          nav: true,
          responsiveClass:true,
          autoWidth: true,
          startPosition:3
      });
    }
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {
  getRightCoord();
});

$(window).resize(function() {
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getRightCoord();  
  getMeetUsSlider();
  getPricesSlider();
  getSidebarPosition();
});

$(document).scroll(function() {
  getAnimation();
  getSidebarPosition();
});

$(document).ready(function() {

  getAnimation();
  getMeetUsSlider();
  getPricesSlider();
  getSidebarPosition();

    if( $(".testimonial_slider").length > 0 ) {
        // $(".testimonial_slider").not(".slick-initialized").slick({
        //     dots: false,
        //     arrows: false,
        //     autoplaySpeed: 4000,
        //     speed: 1200,
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //     prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/arrow_red_right.svg"></button>',
        //     nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/arrow_red_right.svg"></button>',
        //     responsive: [
        //         {
        //           breakpoint: 1124,
        //           settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1
        //           }
        //         },
        //         {
        //           breakpoint: 900,
        //           settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1,
        //             variableWidth: true,
        //             arrows: true
        //           }
        //         }
        //       ]
        // });

        $('.testimonial_slider').owlCarousel({
            loop:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:false
                },
                900:{
                    items:3,
                    nav:true,
                    loop:false
                },
                1024:{
                    items:4,
                    nav:true,
                    loop:false
                }
            }
        })
    }

    if( $(".benefits_slider").length > 0 ) {

      $(".benefits_slider_click").on("click", function(e) {
        e.preventDefault();
        parentBlock = $(this).closest(".benefits_slider_wrapp");
        benefitsSliderNext = parentBlock.find(".slick-next").trigger("click");
      });

      $(".benefits_slider").not(".slick-initialized").slick({
          dots: true,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          appendDots: $(".benefits_slider_controls"),
          appendArrows: $(".benefits_slider_arrows")
      });
    }

    // -------------

    $(".respmenubtn").on("click", function(e) {
      e.preventDefault();
      $("#respNav").toggleClass("visible");
      $(".resp_bg").toggleClass("visible");
    });

    $(".resp_bg").on("click", function(e) {
      e.preventDefault();
      $("#respNav").removeClass("visible");
      $(this).removeClass("visible");
    });

    $("#closeBtn").on("click", function(e) {
      e.preventDefault();
      $("#respNav").removeClass("visible");
      $(".resp_bg").removeClass("visible");
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27) {
        if($("#respNav").hasClass("visible") && $(".resp_bg").hasClass("visible")) {
          $("#respNav").removeClass("visible");
          $(".resp_bg").removeClass("visible");
        }
      }
    });

    $(document).mouseup(function (e){
        e.preventDefault();
        var hide_element = $('#respNav');        
        if (!hide_element.is(e.target)
                && hide_element.has(e.target).length === 0) {
                hide_element.removeClass("visible");
                $(".resp_bg").removeClass("visible");
        }
    });

    // -----------

    $('.main_nav a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var hrefAttr = $(this).attr("href");
        if( hrefAttr.length > 0 && hrefAttr != "#" ) {
            $('html, body').stop().animate({
                'scrollTop': $(hrefAttr).offset().top+2
            }, 500);
        }
        if($("#respNav").hasClass("visible") && $(".resp_bg").hasClass("visible")) {
          $("#respNav").removeClass("visible");
          $(".resp_bg").removeClass("visible");
        }
    });

    // -----------

    $(document).on("click", "[data-popup-link]",  function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      $("body").addClass("fixed");
      $("body").css({
          "position" : "fixed",
          "top" :  -$(document).scrollTop() + "px",
          "overflow" : "hidden",
          "right" : 0,
          "left" : 0,
          "bottom" : 0,
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(document).on("click", ".close_popup, .popup_bg", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").attr("style", "");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").removeClass("fixed");
      $(".popup_bg").fadeOut(300);
      $("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 && $("body").hasClass("fixed")) {
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
      }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

});