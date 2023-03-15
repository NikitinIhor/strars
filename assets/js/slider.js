// подключение
{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>  */}

{/* <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script> */}

new Swiper('.имя-класса__slider', {
	// навигация
	navigation: {
		nextEl: '.имя-класса__arrow-right',
		prevEl: '.имя-класса__arrow-left'
	},

	// кол-во слайдов
	slidesPerView: 3,

	// breakpoints: {
	// 	320: {
	// 		slidesPerView:1,
	// 	},
	// 	480: {
	// 		slidesPerView:2,
	// 	},
	// 	767.98: {
	// 		slidesPerView:3,
	// 	},
	// 	970: {
	// 		slidesPerView:3,
	// 	}
	// },

	// отступы
	spaceBetween: 56,

	// пагинация если нужна - добавл div(.swiper-pagination)
	pagination: {
		// точки
		// type: 'bullets',
		// -------------------------
		// цифры
		// type: 'fraction',
		// -------------------------
		// el:'.swiper-pagination',
	

		// булеты(можно кликать)
		clickable: true,
		dynamicBullets: true,
		simulateTouch: true,
	},
});