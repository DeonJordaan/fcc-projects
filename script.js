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
	overlay.classList.toggle('hidden');
	index = e.target.dataset.number;
	currentImage.src = `/img/${e.target.id}.jpg`;
	currentImage.alt = `${e.target.alt}`;
};

const closeCarousel = function () {
	overlay.classList.toggle('hidden');
};

galleryImages.forEach((item) => item.addEventListener('click', showCarousel));

closeButton.addEventListener('click', closeCarousel);

function moveImageLeft(e) {
	index++;
	if (index === 13) {
		index = 1;
	}
	currentImage.src = `/img/carousel-${index}.jpg`;
}

function moveImageRight(e) {
	index--;
	if (index === 0) {
		index = 12;
	}
	currentImage.src = `/img/carousel-${index}.jpg`;
}

rightButton.addEventListener('click', (e) => {
	moveImageLeft();
});

leftButton.addEventListener('click', (e) => {
	moveImageRight();
});

// CLear contact form input values upon submission
window.onbeforeunload = () => {
	for (const form of document.getElementsByTagName('form')) {
		form.reset();
	}
};
