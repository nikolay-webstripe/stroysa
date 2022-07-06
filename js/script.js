

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
      adaptiveHeight: false,
      responsive: [
        {
          breakpoint: 1400,
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
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
        
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


    let footerTitle = document.querySelectorAll(".footer-title"),
      dropdownMenu = document.querySelectorAll(".footer__col_list")
    footerTitle.forEach(item =>{
      item.addEventListener('click', () => {
        dropdownMenu = document.querySelector(`${footerTitle}~.footer__col_list`)
        console.log(dropdownMenu)
      })
    })
});