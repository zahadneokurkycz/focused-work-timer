import React from 'react'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			break: 5,
			session: 25,
			pauseicon: 'play-fill',
			pausecolor: 'success'
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(type, action) {
		if (type == 'session') {
			if (action == 'dec' && this.state.session != 1) {
				this.setState({
					session: this.state.session - 1
				})
				timerset(this.state.session - 1, this.state.break)
			} else if (action == 'inc' && this.state.session < 60) {
				this.setState({
					session: this.state.session + 1
				})
				timerset(this.state.session + 1, this.state.break)
			}
		} else if (type == 'break') {
			if (action == 'dec'&& this.state.break != 1) {
				this.setState({
					break: this.state.break - 1
				})
				timerset(this.state.session, this.state.break - 1)
			} else if (action == 'inc' && this.state.break < 60) {
				this.setState({
					break: this.state.break + 1
				})
				timerset(this.state.session, this.state.break + 1)
			}
		} else if (type == 'reset') {
			this.setState({
				session: 25,
				break: 5,
				pauseicon: 'play-fill',
				pausecolor: 'success'
			})
			timermng('reset')
		} else if (type == 'pause') {
			if (this.state.pauseicon == 'play-fill') {
				this.setState({
					pauseicon: 'pause-fill',
					pausecolor: 'warning'
				}) 
				timermng('start')
			} else {
				this.setState({
					pauseicon: 'play-fill',
					pausecolor: 'success'
				}) 
				timermng('stop')
			}
		}
	}

	render () {
		return(
			<>
				<div className='vlevo'>
					<p id='break-label'>Break label:</p>
					<div className='input-group' role='group'>
						<button id='break-decrement' className='btn btn-outline-danger tmbtn' onClick={() => this.handleClick('break','dec')}><i className="bi bi-dash-lg"></i></button>
						<div className="input-group-text" id='break-length'>{this.state.break}</div>
						<button id='break-increment' className='btn btn-outline-success tmbtn'onClick={() => this.handleClick('break','inc')}><i className="bi bi-plus-lg"></i></button>
					</div>
				</div>
				<div className='vpravo'>
					<p id='session-label'>Session length:</p>
					<div className='input-group' role='group'>
						<button id='session-decrement' className='btn btn-outline-danger tmbtn'onClick={() => this.handleClick('session','dec')}><i className="bi bi-dash-lg"></i></button>
						<div className="input-group-text" id='session-length'>{this.state.session}</div>
						<button id='session-increment' className='btn btn-outline-success tmbtn'onClick={() => this.handleClick('session','inc')}><i className="bi bi-plus-lg"></i></button>
					</div>
				</div>
				<br /><br /><br /><br />
				<div id='timer-label' className='fs-5'>Session</div>
				<div id='time-left' className='fs-3'><Timer session={this.state.session} /></div>
				<br />
				<div className="btn-group" role="group">
					<button className={'btn btn-outline-' + this.state.pausecolor} id='start_stop' onClick={() => this.handleClick('pause')}><i className={'bi bi-' + this.state.pauseicon}></i></button>
					<button className='btn btn-outline-secondary' id='reset' onClick={() => this.handleClick('reset')}><i className="bi bi-arrow-clockwise"></i></button>
				</div>
			</>
		)
	}
}

class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: '00',
			minutes: '25'
		}
	} 
	render() {
		return(
			<time>
				25:00
			</time>
		)
	}
}


export {
	App
}