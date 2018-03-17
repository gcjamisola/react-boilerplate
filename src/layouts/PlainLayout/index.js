import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
import { Wrapper } from '../../styles'

class PlainLayout extends Component {
	render() {
		return (
			<Wrapper>
				<Header />
				{this.props.children}
				<Footer />
			</Wrapper>
		)
	}
}

PlainLayout.propTypes = {
	children: PropTypes.node
}


export { PlainLayout }