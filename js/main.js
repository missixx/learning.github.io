$(function () {

    $(".interface__slider").slick({
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 3,
        arrows: false,
    /*  responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '70px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]*/
    });

    
    $(".reviews__slider").slick({
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    });

});