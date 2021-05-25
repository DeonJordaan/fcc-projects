class TypeWriter {
	constructor(textElement, phrase) {
		this.textElement = textElement;
		this.phrase = phrase;
		this.text = '';
		this.type();
	}

	type() {
		let timer;
		const fullText = this.phrase;

		this.text = fullText.substring(0, this.text.length + 1);

		this.textElement.classList.add('cursor');

		this.textElement.innerHTML = `<span>${this.text}</span>`; // class="cursor

		let typeSpeed = 100;

		timer = setTimeout(() => this.type(), typeSpeed);

		if (this.text.length === this.phrase.length) {
			clearTimeout(timer);
			this.textElement.classList.remove('cursor');
		}
	}
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init
function init() {
	const greetingElement = document.querySelector('.welcome-text--main');
	const greeting = greetingElement.getAttribute('data-textGreet');
	const introElement = document.querySelector('.welcome-text--intro');
	const introduction = introElement.getAttribute('data-textIntro');
	new TypeWriter(greetingElement, greeting);
	setTimeout(function () {
		new TypeWriter(introElement, introduction);
	}, 2000);
}

// const greeting = document.getElementById("welcome-greeting");
// const introduction = document.getElementById("welcome-intro");
// const greetingPhrase = "Hello, I'm Deon";
// const introPhrase = "A Frontend Developer";

// let greet = [];
// let intro = [];
// let i = 0;
// let j = 0;

// function typeGreeting() {
// 	greetingArray = [...greetingPhrase];
// 	greetingArray.forEach((element) => {
// 		greeting.textContent = greet[element].join("");
// 	});
// 	setTimeout(typeGreeting, 100);
// }

//FIXME MAYBE WITH A FOR/OF LOOP...FUCK KNOWS

// function typeGreeting() {
// 	greetingArray = [...greetingPhrase];
// 	for (const letter of greetingArray) {
// 		greeting.textContent = greet[letter].join("");
// 	}

// 	setTimeout(typeGreeting, 100);
// }

// function loop() {
// 	for (const button of itemClick)
// 		button.addEventListener("click", function () {
// 			console.log("Clicked!!!");
// 			clickCount++;
// 			if (clickCount == 1) {
// 				value1 = button.getAttribute("value");
// 			}
// 			if (clickCount >= 2) {
// 				value2 = button.getAttribute("value");
// 				clickCount = 0;
// 				onItemClick();
// 				loop();
// 			}
// 		});
// }

// loop();

//FIXME

// 	greeting.textContent = greet.join("");

// 	if (i <= greetingArray.length - 1) {
// 		greet.push(greetingArray[i]);
// 		i++;
// 	}
// 	setTimeout(typeGreeting, 100);
// }

// function typeIntro() {
// 	introArray = [...introPhrase];
// 	introduction.textContent = intro.join("");

// 	if (j <= introArray.length - 1) {
// 		intro.push(introArray[j]);
// 		j++;
// 	}

// 	setTimeout(typeIntro, 100);
// }

// typeGreeting();
// typeIntro();

//COMMENT
// const greeting = document.getElementById("welcome-greeting");
// const introduction = document.getElementById("welcome-intro");
// const greetingPhrase = "Hello, I'm Deon";
// const introPhrase = "A Frontend Developer";

// let greet = [];
// let intro = [];
// // let i = 0;
// // let j = 0;

// function typeGreeting() {
// 	greetingArray = [...greetingPhrase];
// 	greeting.textContent = greet.join("");

// 	for (i = 0; i <= greetingArray.length - 1; i++) {
// 		greet.push(greetingArray[i]);
// 	}

// 	setTimeout(typeGreeting, 100);
// }

// function typeIntro() {
// 	introArray = [...introPhrase];
// 	introduction.textContent = intro.join("");

// 	for (j = 0; j <= introArray.length - 1; j++) {
// 		intro.push(introArray[j]);
// 	}

// 	setTimeout(typeIntro, 100);
// }

// typeGreeting();
// typeIntro();

// NOTE  secondFunction(){ firstFunction((response) => { console.log(response); }); }

// COMMENTCOMMENT THIS ONE AT LEAST TYPES THE STRING, AT THE SAME TIME AS IS, WITH A SLIGHT DELAY BETWEEN STARTS WITH ASYNC/AWAIT
// const greeting = document.getElementById("welcome-greeting");
// const introduction = document.getElementById("welcome-intro");
// const greetingPhrase = "Hello, I'm Deon";
// const introPhrase = "A Frontend Developer";
// // const speed = Math.random() * (300 - 50) + 50;

// let greet = [];
// let intro = [];
// let i = 0;
// let j = 0;

// async function typeGreeting() {
// 	greetingArray = [...greetingPhrase];
// 	greeting.textContent = greet.join("");

// 	if (i <= greetingArray.length - 1) {
// 		greet.push(greetingArray[i]);
// 		i++;
// 	}
// 	setTimeout(typeGreeting, 100);
// }

// async function typeIntro() {
// 	await typeGreeting();
// 	introArray = [...introPhrase];
// 	introduction.textContent = intro.join("");

// 	if (j <= introArray.length - 1) {
// 		intro.push(introArray[j]);
// 		j++;
// 	}

// 	setTimeout(typeIntro, 100);
// }

// typeGreeting();
// typeIntro();

// COMMENTCOMMENT
// typeIntro(){ typeGreeting(()=> {
// 	greetingArray = [...greetingPhrase];
// 	greeting.textContent = greet.join("");

// 	if (i <= greetingArray.length - 1) {
// 		greet.push(greetingArray[i]);
// 		i++;
// 	}
// 	setTimeout(typeGreeting, 100);
// })}

// const greeting = document.getElementById("welcome-greeting");
// const introduction = document.getElementById("welcome-intro");
// const greetingPhrase = "Hello, I'm Deon, a Frontend Developer";
// // const introPhrase = "A Frontend Developer";

// let greet = [];
// let intro = [];
// let i = 0;
// let j = 0;

// function typewriter() {
// 	greetingArray = [...greetingPhrase];

// 	if (i <= greetingArray.length - 1) {
// 		greet.push(greetingArray[i]);
// 		i++;
// 		console.log(i);
// 		console.log(greetingArray.length);
// 	}

// 	greeting.textContent = greet.join("");

// 	// introArray = [...introPhrase];

// 	// if (j <= introArray.length - 1) {
// 	// 	intro.push(introArray[j]);
// 	// 	j++;
// 	// 	console.log(j);
// 	// 	console.log(introArray.length);
// 	// }

// 	// introduction.textContent = intro.join("");

// 	setTimeout(typewriter, 100);
// }

// typewriter();
