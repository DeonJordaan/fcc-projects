const galleryImages = document.querySelectorAll('.gallery__item');

const snap = function () {
	console.log('SNAP');
};

galleryImages.forEach((item) => item.addEventListener('click', snap));
