const galleryImages = document.querySelectorAll('.gallery__item');
const galleryCarousel = document.getElementById('carousel');

const leftButton = document.getElementById('left');
const closeButton = document.getElementById('close');
const rightButton = document.getElementById('right');

const showCarousel = function () {
	galleryCarousel.classList.toggle('hidden');
	// if (galleryCarousel.className === 'hidden') {
	// 	galleryCarousel.className !== 'hidden';
	// } else {
	// 	galleryCarousel.className === 'hidden';
	// }
	// if (el.className === 'active'){
	// 	el.className = 'inactive';
	//   } else {
	// 	el.className = 'active';
	//   }
};

galleryImages.forEach((item) => item.addEventListener('click', showCarousel));

closeButton.addEventListener('click', showCarousel);
