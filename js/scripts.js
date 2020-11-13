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
    
    $(".thumbnails_2").not(".slick-initialized").slick({
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      infinite: true,
      arrows: true,
      variableWidth: true,
      initialSlide: 1,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/arrow_black_right.svg"></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/arrow_black_right.svg"></button>',
      responsive: [
          {
              breakpoint: 900,
              settings: "unslick"
          }
      ]
    });

    $( ".thumb_2" ).bind({
      mouseenter: function() {
        $( this ).find(".thumb_2_text").slideDown(300);
        console.log("mouseenter");
      },
      mouseleave: function() {
        $( this ).find(".thumb_2_text").slideUp(300);
        console.log("mouseleave");
      }
    });

  }
}

function getPricesSlider() {
    $(".prices_thumbnails").not(".slick-initialized").slick({
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      infinite: true,
      arrows: true,
      variableWidth: true,
      initialSlide: 3,
      // prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/arrow_black_right.svg"></button>',
      // nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/arrow_black_right.svg"></button>',
      responsive: [
          {
              breakpoint: 720,
              initialSlide: 1,
          },
          {
              breakpoint: 1024,
              settings: "unslick"
          }
      ]
    });
}

function getPopupEvents() {
    $("[data-popup-link]").on("click", function(e) {
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
    $(".close_popup, .popup_bg").on("click", function(e) {
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
  getRightCoord();
  bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;
  getMeetUsSlider();
  getPricesSlider();
  // $( ".thumb_2" ).bind({
  //   mouseenter: function() {
  //     $( this ).find(".thumb_2_text").slideDown(300);
  //   },
  //   mouseleave: function() {
  //     $( this ).find(".thumb_2_text").slideUp(300);
  //   }
  // });
  getPopupEvents();
});

$(document).scroll(function() {
  getAnimation();
});

$(document).ready(function() {

  getAnimation();
  getMeetUsSlider();
  getPricesSlider();
  getPopupEvents();

    if( $(".testimonial_slider").length > 0 ) {
        $(".testimonial_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/arrow_red_right.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/arrow_red_right.svg"></button>',
            responsive: [
                {
                  breakpoint: 1124,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                    arrows: true
                  }
                }
              ]
        });
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
          appendArrows: $(".benefits_slider_arrows"),
          // responsive: [
          //     {
          //       breakpoint: 1024,
          //       settings: {
          //         arrows: true
          //       }
          //     },
          //     // {
          //     //   breakpoint: 540,
          //     //   settings: {
          //     //     slidesToShow: 1,
          //     //     slidesToScroll: 1
          //     //   }
          //     // }
          //   ]
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

});