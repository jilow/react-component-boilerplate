import React from 'react'
import { shallow } from 'enzyme'
import { Counter } from '../src/index'

it('renders welcome message', () => {
  const count = '99'
  const wrapper = shallow(<Counter count={count} />)
  expect(wrapper.find('p').text()).toEqual(count)
})
