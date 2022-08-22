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
	type: 'fraction',
},
});
pagingSwiper.controller.control = slideswiper;
