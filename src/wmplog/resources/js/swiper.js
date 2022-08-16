 // let appendNumber = 5;
    // let prependNumber = 1;
		var pagingSwiper = new Swiper('.swiper', {
			// autoplay: {
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// },
			pagination: {
				el: ".pagination_progress",
				type: "progressbar",
			},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
		});
    var slideswiper = new Swiper('.swiper', {
      pagination: {
				el: ".pagination_number",   
				clickable: false,    
				type : 'fraction',   
      },
			// virtual: {
      //   slides: (function () {
      //     const slides = [];
      //     for (var i = 0; i < 6; i += 1) {
      //       slides.push('Slide ' + (i + 1));
      //     }
      //     return slides;
      //   })(),
      // },
			// navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    });
		
		// slideswiper.controller.control = pagingSwiper;
		pagingSwiper.controller.control = slideswiper;
