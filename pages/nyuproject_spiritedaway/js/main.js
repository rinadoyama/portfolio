const mainTitle = document.getElementById('title');

title.onmouseover = function() {
    title.textContent = "千と千尋の神隠し";
};

title.onmouseout = function() {
    title.textContent = "Spirited Away";
};

let hour = new Date ().getHours();
if (hour >= 18 || hour < 6) {
//if (hour > 6) {
	console.log('Script loaded successfully.');
	const background = document.querySelector('body');
	background.style.backgroundColor = 'black';

	const navigation = document.querySelectorAll('nav > a, a.menu');
	navigation.forEach(button => {
        button.style.color = '#f2e4d8'; 
        button.style.backgroundColor = '#c22622'; 
    });

    const images = document.querySelectorAll('main img');
    const nightImages = [
	    { src: './images/night1.jpg', srcset: './images/night1_2x.jpg 2x, ./images/night1_3x.jpg 3x' },
	    { src: './images/night2.jpg', srcset: './images/night2_2x.jpg 2x, ./images/night2_3x.jpg 3x' },
	    { src: './images/night3.jpg', srcset: './images/night3_2x.jpg 2x, ./images/night3_3x.jpg 3x' },
	    { src: './images/night4.jpg', srcset: './images/night4_2x.jpg 2x, ./images/night4_3x.jpg 3x' }
	];


    images.forEach((img, index) => {
	    if (nightImages[index]) {
	    	img.src = nightImages[index].src;
	        img.srcset = nightImages[index].srcset;
	    }
	});

}

const dailyMessage = document.getElementById('daily-message');
const dayOfWeek = new Date().getDay();
const messages = [
"Relax, it\'s Sunday!<br>\"Today, all of humanity's dreams are cursed somehow. Beautiful yet cursed dreams.\" -Hayao Miyazaki",
"Happy Monday!<br>\"You may not like what's happening, but just accept it, and let's try to live together.\" -Hayao Miyazaki",
"It's Tuesday!<br>\"Do everything by hand, even when using the computer.\" -Hayao Miyazaki",
"Happy Hump Day!<br>\"See the good in that which is evil, and the evil in that which is good.\" -Hayao Miyazaki",
"Thursday!<br>\"Whenever someone creates something with all of their heart, then that creation is given a soul.\" -Hayao Miyazaki",
"TGIF!<br>\"Always believe in yourself. Do this and no matter where you are, you will have nothing to fear.\"",
"Happy Saturday!<br>\"Reality is for people that lack imagination.\" -Hayao Miyazaki"
];

dailyMessage.innerHTML = messages[dayOfWeek];

const colorOptions = ['#c22622', '#44857c', '#ffd952', '#fb802d'];
let currentColorIndex = 0;
function changeTextColors() {
    const headings = document.querySelectorAll('h1, h2, #daily-message');
    headings.forEach(element => {
        element.style.color = colorOptions[currentColorIndex];
    });
    currentColorIndex += 1;
    if (currentColorIndex >= colorOptions.length) {
    	currentColorIndex = 0
    }
}



document.addEventListener('click', changeTextColors);


