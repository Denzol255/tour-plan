var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
	loop: true,
	grabCursor: true,
	autoHeight: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

	keyboard:{
		enabled: true,
		onlyInViewport: true,
	}
})