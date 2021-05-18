const greeting = document.getElementById("welcome-greeting");
const introduction = document.getElementById("welcome-intro");
const greetingPhrase = "Hello, I'm Deon";
const introPhrase = "A Frontend Developer";

let typing = [];
let i = 0;

function typewriter() {
	phraseArray = [...greetingPhrase];

	if (i <= phraseArray.length - 1) {
		typing.push(phraseArray[i]);
		i++;
		console.log(i);
		console.log(phraseArray.length);
	}

	greeting.textContent = typing.join("");

	setTimeout(typewriter, 100);
}

typewriter();
