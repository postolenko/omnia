function getRightCoord() {
  var ridgtCoord = $("#right_coord").offset().left;
  $("#imgBox").css({
    "width" : ridgtCoord + "px"
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

});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".testimonial_slider").length > 0 ) {
        $(".testimonial_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 1,
            // fade: true,
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //       }
            //     },
            //     {
            //       breakpoint: 540,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
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
          appendDots: $(".benefits_slider_controls")
          // responsive: [
          //     {
          //       breakpoint: 900,
          //       settings: {
          //         slidesToShow: 2,
          //         slidesToScroll: 2
          //       }
          //     },
          //     {
          //       breakpoint: 540,
          //       settings: {
          //         slidesToShow: 1,
          //         slidesToScroll: 1
          //       }
          //     }
          //   ]
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

});