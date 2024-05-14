import * as React from 'react'
import * as themer from './theme.js'
import { App } from './App.jsx'

themer.CheckThemes()

class UI extends React.Component {
	constructor() {
		super();
	}
	render() {
		return(
			<div className='position-absolute top-50 start-50 translate-middle siroky'>
				<div className='card shadow rounded'>
					<div className='card-header'>
						Focused work timer
					</div>
  					<div className='card-body'>
						<App />
						<audio id='beep'>
							<source src='beep.mp3' type='audio/mpeg' />
						</audio>
					</div>
				</div>
			</div>
		)
	}
}
class Theme extends React.Component {
	constructor() {
		super();
		if (localStorage.getItem('theme') == 'auto') {
			this.state = {
				icon: 'circle-half'
			}
		} else if (localStorage.getItem('theme') == 'dark') {
			this.state = {
				icon: 'moon'
			}
		} else {
			this.state = {
				icon: 'brightness-high'
			}
		}
		
		this.themeChange = this.themeChange.bind(this);
	}

	themeChange(theme) {
		localStorage.setItem('theme', theme)
		if (theme == 'light') {
			themer.SetTheme('light')
			this.setState({
				icon: 'brightness-high'
			})
		} else if (theme == 'dark') {
			themer.SetTheme('dark')
			this.setState({
				icon: 'moon'
			})
		} else if (theme == 'auto') {
			themer.SetAutoTheme()
			this.setState({
				icon: 'circle-half'
			})
		}
	}
	render() {
		return(
			<div className="dropup dropup-center position-absolute bottom-0 end-0 p-3">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					<i className={'bi bi-' + this.state.icon}></i>  Theme
				</button>
				<ul className="dropdown-menu">
					<li><button className={(this.state.icon == 'brightness-high') 
					? "dropdown-item active"
					: "dropdown-item"} onClick={() => this.themeChange('light')}><i className="bi bi-brightness-high"></i> Light</button></li>
					<li><button className={(this.state.icon == 'moon') 
					? "dropdown-item active"
					: "dropdown-item"} onClick={() => this.themeChange('dark')}><i className="bi bi-moon"></i> Dark</button></li>
					<li><button className={(this.state.icon == 'circle-half') 
					? "dropdown-item active"
					: "dropdown-item"} onClick={() => this.themeChange('auto')}><i className="bi bi-circle-half"></i> Auto</button></li>
				</ul>
			</div>
		)
	}
}

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hi</p>
    </>
  )
}
*/
export {
    UI,
	Theme
}