import React from 'react'
import App from '../components/App'
import CurrencyPairTrading from '../containers/CurrencyPairTrading'
import { shallow } from 'enzyme'

it('loads the CurrencyPairTrading component', () => {
    const wrapped = shallow(<App />)
    expect(wrapped.find(CurrencyPairTrading).length).toEqual(1)
})