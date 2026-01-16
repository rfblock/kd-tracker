const $ = x => document.querySelector(x);
const $$ = x => document.querySelectorAll(x);

let kills = 0;
let deaths = 0;

const updateDisplay = () => {
	let kd = kills / deaths;
	kd = Math.floor(kd * 100) / 100;

	if (deaths == 0) {
		$('#kd-decimal').innerText = `${kills}`;
	} else {
		$('#kd-decimal').innerText = `${kd}`;
	}

	$('#kd-ratio').innerText = `${kills}:${deaths}`;
}

$('#kd-display').addEventListener('click', () => {
	$('html').requestFullscreen();
	screen.orientation.lock('landscape');
})

$('#kill-button').addEventListener('click', () => {
	kills += 1;
	updateDisplay();
});

$('#death-button').addEventListener('click', () => {
	deaths += 1;
	updateDisplay();
});

