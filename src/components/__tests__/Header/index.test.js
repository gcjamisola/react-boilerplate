import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Header from '../../Header'

describe('<Header />', () => {
	it('renders the component correctly', () => {
		const wrapper = shallow(<Header />)
		expect(wrapper.find('div')).to.have.lengthOf(1)
	})
})