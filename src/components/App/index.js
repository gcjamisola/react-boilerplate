import React, { Component } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			counter: 0
		}

		this._increment = this._increment.bind(this)
	}

	_increment() {
		let { counter } = this.state
		counter += 1
		this.setState({ counter})
	}

	render() {
		return (
			<div>
				{this.state.counter}
				<button className="btn-increment" onClick={this._increment}>Increment</button>
				<button className="btn-test" onClick={this.props.testClickHandler}>test</button>
			</div>
		)
	}
}

App.propTypes = {
	testClickHandler: PropTypes.func
}

export default App