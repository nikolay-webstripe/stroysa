

$(document).ready(function () {
    //slider
    $('.slider').slick({
      adaptiveHeight: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000000,
      arrows: false,
    }
    );
    $('.discounts-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000000,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        }]
    }
    );

    //map
    ymaps.ready(init);
    function init(){
        // Создание карты.
        let map = new ymaps.Map("ymaps-tomsk", {
            center: [56.48280827007146, 85.01159778588858],
            zoom: 12
        });
    }

});