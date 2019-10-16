var asdfjkl = require('asdfjkl').default;

var input = document.getElementsByTagName("input")[0];
var submitBtn = document.getElementById("submit");
var randomBtn = document.getElementById("random");
var h1 = document.getElementsByTagName("h1")[0];
var h2 = document.getElementsByTagName("h2")[0];
var message = document.getElementById("message");
var body = document.querySelector("body");

var meow = new Audio('media/meow.mp3');
meow.volume = 0.3;

var catArray = [
	// ====== STU ======
	"Pikastu",
	"Stu Fast, Stu Furryous",
	"Stupac Shakur",
	"Stuper Bowl",
	"Toaster Stu-del",
	"Stufasa",
	"Stu-pe Kid's Afraid To Leave His Stu-pe",
	"The Stu-pe Kitchen",
	"Stupp Dogg",
	"Odd Stuture",
	"Lil Stuzi Vert",
	"Busstu Rhymes",
	"Stufjan Stevens",
	"Instugram",
	"Beef Stu",
	"Stu Pickles",
	"The Three Stu-ges",
	"Stuzbekistan",
	"Stushi Roll",
	"Stuhammad Ali",
	"Stu mad, bro?",
	"Stu be, or not stu be",
	"A Tail of Stu Kitties",
	"Stuplantation",
	"🦉Stuolingo",
	"Freddy Stueger",
	"Stu Years Eve",
	"Stu York City",
	"Stuper Mario Bros.",
	"Bowling For Stu-pe",
	"Studwig Van Beethoven",
	"Stuper Nintendo",
	"Ferris Stueller's Day Off",
	"Lord of the Rings: The Stu Towers",
	"Stu Kill a Mockingbird",
	"Curb Your Enstusiasm",
	"Black Mirror's 'San Stunipero'",
	"Stu Tang Clan",
	"StuTI",
	"Stuby Doo",
	"Stuber",
	"Stukkake",
	"Kama Stutra",
	"Peek-A-Stu",
	"Lake Havastu",
	"Stubella Virus",
	"Hairy Stoudini",
	"Matisyastu",
	"Stu Apron",
	"Kung Stu Panda",
	"Stu Blood",
	"Stulu",
	"San Diego Stu®",
	"Stu Zealand",
	"Stunited Nations",
	"Le Cordon Stu",
	"Barbestu",
	"Timbukstu",
	"Tiramistu",
	"Stugh Hefner",
	"Get a Stu",
	"Stueless",
	"Orthodox Stu",
	"Disney's Stulan",
	"Stunami",
	"Bird's-Eye Stu",
	"Jiu Jit Stu",
	"Honeystu Melon",
	"Back to the Stuture",
	"Machu Pisstu",
	"Winnie the Stu 🍯",
	"Stutistics",
	"Stucha Libre",
	"Stu Barrymore",
	"Vladimir Stutin",
	"Stulius Caesar",

	// === STU & PAM ====
	"Stu it for the 'Pam",
	"Pamned If You Stu, Pamned If You Don't",
	"Pamned If I Stu, Pamned If I Don't",
	"I Gotstu, Pam",
	"Instupam Influencer",
	"Pamiel Day-Stuwis",

	// ====== PAM ======
	"Childish Pambino",
	"Wham Bam, Thank You Pam",
	"Pam-purrs Diapers",
	"Pammibal Buress",
	"Pamimal Collective",
	"Green Eggs & Pam",
	"Honey-Baked Pam",
	"Pamburger & Fries",
	"Pameron Diaz",
	"Pamelot",
	"Hairy Pawter and the Prizoner of Azka-Pam",
	"Mary had a little Pam",
	"Pamsterdam",
	"AbraPam Lincoln",
	"Bernie Pamders",
	"Vincent Pam Gogh",
	"Abracadabra, AlakaPam!",
	"Pam Musubi",
	"Eggplant Pam-igiana",
	"Pamera Bread®",
	"🅿️amdora Radio",
	"Pamazon Prime",
	"Pamic! at the Disco",
	"Lindsay Lopam",
	"xpamster.com",
	"Pineapple and Pam Pizza",
	"Somebody Call the Pambulance",
	"Pampoo and Conditioner",
	"Oh Hot Damn, This Is My Pam",
	"Don't Wanna Be A Pamerican Idiot",
	"Pamic Attack",
	"SpongeBob SquarePams",
	"Pamda 🐼 Express",
	"Pam 'n' Egg Sandwich",
	"Pam & Cheese Sandwich",
	"The Silence of the Pams",
	"Pam's Labyrinth",
	"Modern Pamily",
	"Pamily Guy",
	"Buffy the Pampire Slayer",
	"International House of Pamcakes",
	"Sweet Home Alapama",
	"Mipami Beach",
	"The Pamama Canal",
	"Pam-plemousse Flavored La Croix",
	"Pamgaea",
	"Pamdemic",
	"Palak Pameer",
	"Pamini Grill",
	"Field of Pamsies",
	"Pamn, Pamiel!",
	"Eternal Pamnation",
	"Happy as a Pam",
	"Pams Casino",
	"Instapam",
	"Pam I Am",
	"Honey Maid Pam Crackers",
	"Pamma Ray",
	"Rob Van Pam",
	"Candied Pams",
	"Grilled Pam Chops",
	"Pamiel Radcliffe"
];

input.addEventListener("click", function(event){
	removeText();
	setTimeout(function(){
   		h2.textContent = "Try submitting your very own Stu- or Pam-inspired expression!";
   		h2.classList.remove('hide');
   		h2.classList.add('show');
	}, 500);
});

input.addEventListener("keypress", function(event){
	if(event.keyCode === 13){
		if(input.value.length > 0 && input.value.length < 50){
			if(input.value.includes('Stu') || input.value.includes('stu') || input.value.includes('STU')) {
				if(asdfjkl(input.value) === false && input.value.length > 3){
					catPunSubmitted();
					body.classList.add('stu');
					if(body.classList.contains('pam')){
						body.classList.remove('pam')
					}
				} else if(asdfjkl(input.value) === true || input.value.length < 4) {
						gibberishDetected();
					}
			} else if(input.value.includes('Pam') || input.value.includes('pam') || input.value.includes('PAM')) {
					if(asdfjkl(input.value) === false && input.value.length > 3){
						catPunSubmitted();
						body.classList.add('pam');
						if(body.classList.contains('stu')){
							body.classList.remove('stu')
						}
					} else if(asdfjkl(input.value) === true || input.value.length < 4) {
						gibberishDetected();
					}
			} else {
				notPamOrStu();
			}
		} else if (input.value.length >= 50){
		tooManyChars();
		} else {
				emptyInput();
			}
	} else {
		return false;
	}
});

submitBtn.addEventListener("click", function(){
	if(input.value.length > 0 && input.value.length < 50){
		if(input.value.includes('Stu') || input.value.includes('stu') || input.value.includes('STU')) {
			if(asdfjkl(input.value) === false && input.value.length > 3){
				catPunSubmitted();
				body.classList.add('stu');
				if(body.classList.contains('pam')){
					body.classList.remove('pam')
				}
			} else if(asdfjkl(input.value) === true || input.value.length < 4) {
					gibberishDetected();
				}
		} else if(input.value.includes('Pam') || input.value.includes('pam') || input.value.includes('PAM')) {
				if(asdfjkl(input.value) === false && input.value.length > 3){
					catPunSubmitted();
					body.classList.add('pam');
					if(body.classList.contains('stu')){
						body.classList.remove('stu')
					}
				} else if(asdfjkl(input.value) === true || input.value.length < 4) {
					gibberishDetected();
				}
		} else {
			notPamOrStu();
		}
	} else if (input.value.length >= 50){
		tooManyChars();
	} else {
		emptyInput();
	}
});

randomBtn.addEventListener("click", function(){
	removeBackground();
	removeText();

	var random = Math.floor(Math.random() * catArray.length); // randomizes indexes for catArray

	if(catArray[random] == h1.textContent)
      {
        h1.textContent = "Chop Stuey";
      } else {
	h1.textContent = require("uniq")(catArray)[random]; // uniq removes all duplicates from the array, random returns random index number in array
	}

	if(randomBtn.textContent = "Nah, I'm good"){
		randomBtn.textContent = "Randomize";
	}

	input.value = '';
});

// h1.addEventListener("click", function(){
// 	alert(require("uniq")(catArray));
// });

function catPunSubmitted() {
	meow.play();

	message.textContent = "Submitted";
	message.classList.add('show');
	message.classList.remove('hide');
	setTimeout(function(){
		message.classList.add('hide');
		message.classList.remove('show');
	}, 3000);

	var newSubmission = input.value;
	newSubmission = newSubmission.toLowerCase() // turns everything lowercase
		.split(' ')	// splits a string into an array of substrings using a specified separator (a space)
		.map((pun) => // creates a new array with the results of calling a function on every substring, pun, in the array
			pun.charAt(0).toUpperCase() // capitalize first letter of substring
		 + pun.substring(1)) // then add the capital first letter to the remaining lowercase substring
		.join(' '); // creates a new string by concatenating all the substrings, separated by a space
	catArray.push(newSubmission);
	h1.textContent = newSubmission;
	setTimeout(function(){
		h2.textContent = "Nice one! Would you like to add another pun-derful phrase?";
	}, 400);
	input.value = '';
	randomBtn.textContent = "Nah, I'm good";
}

function notPamOrStu() {
	message.textContent = "Error: Your submission must include the name Pam or Stu.";
	message.classList.add('show');
	message.classList.remove('hide');
	setTimeout(function(){
		message.classList.add('hide');
		message.classList.remove('show');
	}, 5000);
	input.value = '';
	return false;
}

function emptyInput() {
	message.textContent = "You have to write something first!";
	message.classList.add('show');
	message.classList.remove('hide');
		setTimeout(function(){
			message.classList.add('hide');
			message.classList.remove('show');
		}, 2000);
	return false;
}

function tooManyChars() {
	message.textContent = "Error: Your submission must be under 50 characters.";
	message.classList.add('show');
	message.classList.remove('hide');
		setTimeout(function(){
			message.classList.add('hide');
			message.classList.remove('show');
		}, 4000);
	return false;
}

function gibberishDetected() {
	message.innerText = "That wasn't punny. You can stu better than that ☹";
	message.classList.add('show');
	message.classList.remove('hide');
		setTimeout(function(){
			message.classList.add('hide');
			message.classList.remove('show');
		}, 4000);
	input.value = '';
	return false;
}

function removeBackground() {
	if(body.classList.contains('pam')){
		body.classList.remove('pam')
	} else if(body.classList.contains('stu')){
		body.classList.remove('stu')
	}
}

function removeText() {
	h2.classList.add('hide');
	message.classList.remove('show');
	message.classList.add('hide');
	h2.classList.remove('show');
}