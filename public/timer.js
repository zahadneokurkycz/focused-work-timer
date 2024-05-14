let rendermins = '25'
let rendersecs = '00'
let realmins = 25;
let realsecs = 0;
let sessionmin = 25;
let breakmin = 5;
let running = false;
let timerState = 'session';

let timing;

function timerSwitch(stateBefore) {
	switch(stateBefore) {
		case 'break':
			timerState = 'session';
			realmins = sessionmin
			realsecs = 0
			$('#timer-label').text('Session')
			updatetime();
			timermng('start')
			break;
		case 'session':
			timerState = 'break';
			$('#timer-label').text('Break')
			realmins = breakmin;
			realsecs = 0;
			updatetime();
			timermng('start')
			break;
	}
}

function timertick() {
	if (realsecs == 0 && realmins == 0) {
		clearInterval(timing);
		running = false
		timerSwitch(timerState);
		$('#beep').get(0).play()
		return
	}
	if(realsecs == 0) {
		realmins--
		realsecs = 59
	} else {
		realsecs--
	}
	updatetime()
}

const timermng = (action) => {
	switch (action) {
		case 'start':
			timing = setInterval('timertick()', 1000);
			running = true
			$('.tmbtn').prop('disabled',true);
			break;
		case 'stop':
			clearInterval(timing);
			running = false
			$('.tmbtn').prop('disabled',false);
			break;
		case 'reset':
			clearInterval(timing);
			$('#timer-label').text('Session')
			running = false
			realmins = 25
			realsecs = 0
			sessionmin = 25
			breakmin = 5
			timerState = 'session'
			updatetime();
			$('.tmbtn').prop('disabled',false);
			timerState = 'session';
			$('#beep').get(0).load()
			break;
	}
}

function updatetime() {
	if (realmins < 10) {
		rendermins = '0' + realmins;
	} else {
		rendermins = realmins;
	}
	if (realsecs < 10) {
		rendersecs = '0' + realsecs;
	} else {
		rendersecs = realsecs;
	}
	$('time').html(rendermins + ':' + rendersecs);
}

function timerset(sessiontime, breaktime) {
	timermng('reset')
	sessionmin = sessiontime;
	breakmin = breaktime;
	realmins = sessiontime;
	updatetime()
}

function timerRunning() {
	return running;
}