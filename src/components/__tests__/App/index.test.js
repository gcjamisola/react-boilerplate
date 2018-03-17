import React from 'react'
import { expect } from 'chai'
import sinon from 'sinon'

import App from '../../App'

describe('<App />', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	it('renders the component correctly', () => {
		expect(wrapper.find('div')).to.have.length(1)
	})

	it('renders props correctly', () => {
		const myWrapper = shallow(<App name="test" />)
		expect(myWrapper.instance().props.name).to.be.equal('test')
	})

	it('updates the counter on button click', () => {
		const myWrapper = mount(<App />)
		myWrapper.find('button.btn-increment').simulate('click')
		expect(myWrapper.state().counter).to.be.equal(1)
	})

	it('renders props.testClickHandler correctly', () => {
		const callback = sinon.spy()
		const myWrapper = mount(<App testClickHandler={callback}/>)
		expect(myWrapper.instance().props.testClickHandler).to.not.be.undefined
	})

	it('test button calls props.testClickHandler on click', () => {
		const callback = sinon.spy()
		const myWrapper = mount(<App testClickHandler={callback}/>)
		myWrapper.find('button.btn-test').simulate('click')
		expect(callback.calledOnce).to.equal(true)

	})
})