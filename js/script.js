

$(document).ready(function () {
    //nav-slider
    $('.nav-slider').slick({
      dots: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      infinite: false,
      swipeToSlide: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1401,
          settings: {
            variableWidth: false,
            slidesToShow: 4,
            vertical: true,
            verticalSwiping: true,
            swipeToSlide: true,
          }
        }
      ]
    }
    );
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
      adaptiveHeight: false,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1401,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 900,
          settings: {
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 750,
          settings: {
            // centerMode: true,
            slidesToShow: 1.8,
            slidesToScroll: 1,
          }
        },
        
        
        
      ]
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

    //nav-burger
    let navBurger = document.querySelector('.navbar-burger');
    let navbar = document.querySelector('.navbar-collapse');
    navBurger.addEventListener('click', () => {
      navbar.classList.toggle('show');
    })


    //.promo text hide

    let toggler = document.querySelectorAll('.toggler-text'),
      text = document.querySelectorAll('.hiding-text');

    toggler.forEach(toggle => {
      toggle.addEventListener('click', () => {
        text.forEach(text => {
          text.classList.toggle('hide');
        })
        toggler.forEach(item => {
          item.classList.toggle('hide');
        })
    })
      // toggler.classList.toggle('hide');
    })

    //asdfasdf
    let title = document.querySelectorAll('.card-title');
    title.forEach(item => {
      console.log(item.clientHeight)
    })

});