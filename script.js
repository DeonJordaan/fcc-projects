const galleryImages = document.querySelectorAll('.gallery__item');
// const galleryWrapper = document.querySelector('.gallery__carousel');
const carouselImages = document.querySelectorAll('.carousel__img');
const galleryCarousel = document.getElementById('images');
const carouselOverlay = document.querySelector('.carousel__overlay');

// const buttonContainer = document.querySelector('.buttons-container');

const leftButton = document.getElementById('left');
const closeButton = document.getElementById('close');
const rightButton = document.getElementById('right');

const showCarousel = function () {
	// galleryCarousel.classList.toggle('hidden');
	carouselOverlay.classList.toggle('hidden');
	// buttonContainer.classList.toggle('hidden');
	// galleryWrapper.classList.toggle('hidden');
};

galleryImages.forEach((item) => item.addEventListener('click', showCarousel));

closeButton.addEventListener('click', showCarousel);

let index = 0;

let transition = 0;

// let size = 0;

// const size = function (i) {
// 	i = index;
// 	carouselImages[i].clientWidth;
// };
// let size = carouselImages[0].getBoundingClientRect().width;

function changeImage() {
	let size = carouselImages[index - 1].getBoundingClientRect().width;
	transition += size;

	// for (let i = 0; i < carouselImages.length; i++) {
	// 	transition += size;
	// }

	if (index > carouselImages.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = carouselImages.length - 1;
	}

	galleryCarousel.style.transform = `translateX(${-transition}px)`;
	console.log(size, transition);
}

rightButton.addEventListener('click', () => {
	index++;
	changeImage();
	// console.log(carouselImages.length, index);
});

leftButton.addEventListener('click', () => {
	index--;
	changeImage();
	// console.log(carouselImages.length, index);
});
