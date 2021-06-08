const galleryImages = document.querySelectorAll('.gallery__item');
const galleryCarousel = document.getElementById('carousel');
const carouselOverlay = document.querySelector('.carousel__overlay');
const carouselImages = document.querySelector('.carousel__container');
const buttonContainer = document.querySelector('.buttons-container');

const leftButton = document.getElementById('left');
const closeButton = document.getElementById('close');
const rightButton = document.getElementById('right');

const showCarousel = function () {
	galleryCarousel.classList.toggle('hidden');
	carouselOverlay.classList.toggle('hidden');
	buttonContainer.classList.toggle('hidden');

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

let index = 0;

function changeImage() {
	if (index > carouselImages.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = carouselImages.length - 1;
	}

	carouselImages.style.transform = `translateX(${-index * 500}px)`;
}

rightButton.addEventListener('click', () => {
	index++;
	changeImage();
});

leftButton.addEventListener('click', () => {
	index--;
	changeImage();
});
