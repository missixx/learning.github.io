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
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    });

});