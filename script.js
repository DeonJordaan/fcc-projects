const gallery = document.querySelector('.gallery');
const galleryImages = document.querySelectorAll('.gallery__item');
const galleryWrapper = document.querySelector('.gallery__carousel');
// const carouselImages = document.querySelectorAll('.carousel__img');
// const galleryCarousel = document.querySelector('.carousel__container');
const overlay = document.querySelector('.overlay');
let currentImage = document.getElementById('image');

// const buttonContainer = document.querySelector('.buttons-container');

const leftButton = document.getElementById('left');
const closeButton = document.getElementById('close');
const rightButton = document.getElementById('right');

let index = 0;

const showCarousel = function (e) {
	console.log(e);
	overlay.classList.toggle('hidden');
	currentImage.src = `/img/${e.target.id}LRG.jpg`;
	currentImage.alt = `${e.target.alt}`;
	index = e.target.dataset.number;
	console.log(index);
};

const closeCarousel = function () {
	overlay.classList.toggle('hidden');
};

galleryImages.forEach((item) => item.addEventListener('click', showCarousel));

closeButton.addEventListener('click', closeCarousel);

function moveImageLeft(e) {
	index++;
	console.log(index);
}

function moveImageRight(e) {
	index--;
	console.log(currentImage);
	// currentImage.src =
}

rightButton.addEventListener('click', (e) => {
	console.log(e);

	moveImageLeft();
});

leftButton.addEventListener('click', (e) => {
	console.log(e);
	moveImageRight();
});
