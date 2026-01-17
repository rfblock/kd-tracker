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

$('#fullscreen-popup').addEventListener('click', () => {
	$('html').requestFullscreen();
	screen.orientation.lock('landscape');
	$('#fullscreen-popup').style.display = 'none';
})

$('#kill-button').addEventListener('click', () => {
	kills += 1;
	updateDisplay();
});

$('#death-button').addEventListener('click', () => {
	deaths += 1;
	updateDisplay();
});

$('#kd-display').addEventListener('click', () => {
	$('#kd-display').classList.add('hidden');
	$('#info-display').classList.remove('hidden');
});

$('#info-display').addEventListener('click', () => {
	$('#info-display').classList.add('hidden');
	$('#kd-display').classList.remove('hidden');
});

const updateTime = () => {
	const t = new Date();
	let hours = t.getHours() % 12;
	hours = hours ? hours : 12;
	const time = hours + ':' + ('0' + t.getMinutes()).slice(-2);
	$('#info-time').innerText = time;
};
setInterval(updateTime, 1000);

const updateBattery = level => {
	$('#info-battery').innerText = `${Math.floor(level*100)}%`;
};

navigator.getBattery().then(battery => {
	console.log(battery);
	battery.addEventListener('levelchange', () => {
		updateBattery(battery.level);
	});
	updateBattery(battery.level);
});