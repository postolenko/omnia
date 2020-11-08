function getRightCoord() {
  if($("#right_coord").length > 0) {
    var ridgtCoord = $("#right_coord").offset().left;
    $("#imgBox").css({
      "width" : ridgtCoord + "px"
    });
  }
}

function getMeetUsSlider() {
    $(".thumbnails_2").not(".slick-initialized").slick({
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      infinite: true,
      arrows: true,
      variableWidth: true,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/arrow_black_right.svg"></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/arrow_black_right.svg"></button>',
      responsive: [
          {
              breakpoint: 900,
              settings: "unslick"
          }
      ]
    });
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
      // prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/arrow_black_right.svg"></button>',
      // nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/arrow_black_right.svg"></button>',
      responsive: [
          {
              breakpoint: 1024,
              settings: "unslick"
          }
      ]
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
  $( ".thumb_2" ).bind({
    mouseenter: function() {
      $( this ).find(".thumb_2_text").slideDown(300);
    },
    mouseleave: function() {
      $( this ).find(".thumb_2_text").slideUp(300);
    }
  });
});

$(document).scroll(function() {

});

$(document).ready(function() {

  getMeetUsSlider();
  getPricesSlider();

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
      $(".benefits_slider").not(".slick-initialized").slick({
          dots: true,
          arrows: false,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          appendDots: $(".benefits_slider_controls"),
          appendArrows: $(".benefits_slider_arrows"),
          responsive: [
              {
                breakpoint: 1024,
                settings: {
                  arrows: true
                }
              },
              // {
              //   breakpoint: 540,
              //   settings: {
              //     slidesToShow: 1,
              //     slidesToScroll: 1
              //   }
              // }
            ]
      });
    }

    $( ".thumb_2" ).bind({
      mouseenter: function() {
        $( this ).find(".thumb_2_text").slideDown(300);
      },
      mouseleave: function() {
        $( this ).find(".thumb_2_text").slideUp(300);
      }
    });

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
          $("#respNav").removeClass("visible");
          $(".resp_bg").removeClass("visible");
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

});