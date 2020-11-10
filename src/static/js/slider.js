import Swiper from './libs/swiper/swiper-bundle.esm.browser.min.js'

const slider = new Swiper('.swiper-container', {
	slidesPerView: 1,
	keyboard: true,
	loop: true,
	mousewheel: {
        forceToAxis: true
    },
	  pagination: {
	    el: '.swiper-pagination',
	    type: 'bullets',
	  },
	  autoplay: {
	  	delay: 10000
	  }

});


const partnersSlider = new Swiper('.partners__slider', {
	slidesPerView: 1,
	spaceBetween: 20,
	keyboard: true,
	loop: true,
	mousewheel: {
        forceToAxis: true
    },
	breakpoints: {
		900: {
			slidesPerView: 4
		},
		700: {
			slidesPerView: 3
		},
		400: {
			slidesPerView: 2
		}
	},
	autoplay: {
	  	delay: 3000
	  }
})

const rewardsSlider = new Swiper('.rewards__slider', {
	slidesPerView: 1,
	spaceBetween: 50,
	keyboard: true,
	loop: true,
	mousewheel: {
        forceToAxis: true
    },
	breakpoints: {
		800: {
			slidesPerView: 3
		},
		500: {
			slidesPerView: 2
		}
	},
	autoplay: {
	  	delay: 3000
	  }
})