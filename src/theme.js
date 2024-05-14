const SetTheme = (theme) => {
	$('body').attr('class', 'body' + theme)
	$('html').attr('data-bs-theme', theme)
}

const SetAutoTheme = () => {
	const date = new Date();
	if (date.getHours() > 8 && date.getHours() < 19) {
		SetTheme('light')
	} else {
		SetTheme('dark')
	}
}

const CheckThemes = () => {
	if (localStorage.getItem('theme') == 'auto') {
		SetAutoTheme()
	} else if (localStorage.getItem('theme') == 'light' || localStorage.getItem('theme') == 'dark') {
		SetTheme(localStorage.getItem('theme'))
	} else {
		SetAutoTheme()
		localStorage.setItem('theme', 'auto')
	}
}

export {
	SetTheme,
	SetAutoTheme,
	CheckThemes
}