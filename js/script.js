$(document).ready(function () {
	//

	$("ul.noclose").on("click", function (event) {
		event.stopPropagation()
	})
	////
	const itemCatalog = document.querySelectorAll(".item-catalog")
	const subCatalog = document.querySelectorAll(".subcategories")
	itemCatalog.forEach((item) => {
		item.addEventListener("click", (e) => {
			itemCatalog.forEach((link) => {
				link.classList.remove("show")
				subCatalog.forEach((sub) => {
					sub.classList.remove("show")
				})
			})
		})
	})

	//nav-slider
	$(".nav-slider").slick({
		dots: false,
		slidesToShow: 6,
		arrows: false,
		infinite: false,
		swipeToSlide: true,
		variableWidth: true,
		touchThreshold: 1,
		responsive: [
			{
				breakpoint: 401,
				settings: {
					variableWidth: false,
					slidesToShow: 4,
					vertical: true,
					verticalSwiping: true,
					swipeToSlide: true,
				},
			},
		],
	})
	//slider
	$(".slider").slick({
		adaptiveHeight: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000000,
		arrows: false,
	})
	$(".discounts-slider").slick({
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
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1000,
				settings: {
					centerMode: true,
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 900,
				settings: {
					centerMode: true,
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 750,
				settings: {
					// centerMode: true,
					slidesToShow: 1.8,
					slidesToScroll: 1,
				},
			},
		],
	})

	//map
	ymaps.ready(init)
	function init() {
		// Создание карты.
		let map = new ymaps.Map("ymaps-tomsk", {
			center: [56.48280827007146, 85.01159778588858],
			zoom: 12,
		})
	}

	//nav-burger
	let navBurger = document.querySelector(".navbar-burger")
	let navbar = document.querySelector(".navbar-collapse")
	navBurger.addEventListener("click", () => {
		navbar.classList.toggle("show")
	})

	//.promo text hide

	let toggler = document.querySelectorAll(".toggler-text"),
		text = document.querySelectorAll(".hiding-text")

	toggler.forEach((toggle) => {
		toggle.addEventListener("click", () => {
			text.forEach((text) => {
				text.classList.toggle("hide")
			})
			toggler.forEach((item) => {
				item.classList.toggle("hide")
			})
		})
		// toggler.classList.toggle('hide');
	})
////mobileDropdown
console.log(document.documentElement.clientWidth)
  if (document.documentElement.clientWidth < 1200) {
	navBurger.addEventListener('click', () => {
		// document.body.style.overflow = 'hidden';
		// navbar.style.overflow = 'scroll'
	})
	//
    const navItem = document.querySelectorAll(".nav-item")
    let navbarNav = document.querySelector(".navbar-nav")
    navItem.forEach((item) => {
      item.addEventListener("click", () => {
        navbarNav.classList.add('active');
        let dropdownItem = item.childNodes[3].cloneNode(true);
        navbarNav.append(dropdownItem);
        navItem.forEach((item) => {
          item.classList.add("hide");
        })
  
        let back = dropdownItem.querySelector(".back");
        back.addEventListener("click", (e) => {
          e.preventDefault();
          navItem.forEach((item) => {
            item.classList.remove("hide");
          })
          navbarNav.classList.remove('active');
          dropdownItem.remove();
        })
  
  
        let catalogItem = document.querySelectorAll('.dropdown-catalog li')
        catalogItem.forEach(item => {
          item.addEventListener('click', () => {
            let catalogDrop = item.childNodes[3].cloneNode(true)
            navbarNav.append(catalogDrop)
            catalogItem.forEach(catalogItem => {
              catalogItem.classList.add('hide')
            })
  
            back.classList.add('hide')
  
            console.log(catalogDrop)
            let backSub = catalogDrop.querySelector(".back-sub")
            console.log(backSub)
            backSub.addEventListener("click", (e) => {
              e.preventDefault()
              catalogItem.forEach((item) => {
                item.classList.remove("hide")
                back.classList.remove('hide')
              })
              catalogDrop.remove()
            })
  
          })
  
  
        })
  
  
      })
    })
  }


  //copy catalog


	// let back = document.querySelectorAll('.back')

	// back.forEach(back => {
	//   back.addEventListener('click', (e) => {
	//     e.preventDefault();
	//     navItem.forEach(item => {
	//       item.classList.remove('hide');
	//     })
	//   })
	// })

  ///modal close
  const cross = document.querySelectorAll('.modal-cross')
  cross.forEach(item => {
    item.addEventListener('click', () => {
      const modal = document.querySelectorAll('.show-modal')
      modal.forEach(modal => {
        modal.classList.remove('show-modal')
      })
    })
  })


  ////callback

  const callLink = document.querySelector('.header__phone-descr .call-back')
  callLink.addEventListener('click', (e) => {
    e.preventDefault();
    show(document.querySelector('.modal-callback'))

  })

  function show (el) {
    el.classList.add('show-modal')
  }
  function hide (el) {
    el.classList.remove('show-modal')
  }
  

  //log-in
  const logIn = document.querySelectorAll('.log-in');
  logIn.forEach(item => {
    item.addEventListener('click', () => {
      show(document.querySelector('.modal-log-in'));
      hide(document.querySelector('.modal-registration'))
    })
  })

//signup
  const signUp = document.querySelector('.sign-up');
  signUp.addEventListener('click', () => {
    show(document.querySelector('.modal-registration'))
  })
//recovery
  const recovery = document.querySelector('.recovery');
  recovery.addEventListener('click', () => {
    show(document.querySelector('.modal-recovery'));
    hide(document.querySelector('.modal-log-in'))
  })

})
