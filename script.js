const galleryImages = document.querySelectorAll('.gallery__item');
const galleryCarousel = document.querySelector('.gallery__carousel');

const showCarousel = function () {
	galleryCarousel.style.visibility = 'visible';
};

galleryImages.forEach((item) => item.addEventListener('click', showCarousel));
