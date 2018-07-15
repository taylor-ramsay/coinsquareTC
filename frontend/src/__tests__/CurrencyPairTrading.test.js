import React from 'react'
import { mount } from 'enzyme'
import CurrencyPairTrading from '../containers/CurrencyPairTrading'
import Root from '../Root'

let wrapped

beforeEach(()=>{
    wrapped = mount(<Root><CurrencyPairTrading /></Root>)
})

afterEach(()=>{
    wrapped.unmount()
})

it('loads USD input, BTC input, and Trade Button', ()=>{
    expect(wrapped.find('input').length).toEqual(2)
    expect(wrapped.find('button').length).toEqual(1)
})

// it('updates to the correct values', ()=>{
//     wrapped.find('input').at(0).simulate('change', {
//         target: { value: 22.22 }
//     })
//     wrapped.setProps({props :{ btcPrice: {ask: 10000}}})
//     wrapped.update()
//     console.log(wrapped.find('input').at(0).prop('value'))
//     console.log(wrapped.find('input').at(1).prop('value'))
//     console.log(wrapped.props())
//     expect(wrapped.find('input').at(0).prop('value')).toEqual(22.22)
//     expect(wrapped.find('input').at(1).prop('value')).toEqual(22.22/10000)
// })

it('has USD input that accepts values. When form is submitted, USD and BTC inputs are emptied', () => {
    wrapped.find('input').at(0).simulate('change', {
        target: { value: 22.22 }
    })
    wrapped.update()
    expect(wrapped.find('input').at(0).prop('value')).toEqual(22.22)
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(wrapped.find('input').at(0).prop('value')).toEqual("")
    expect(wrapped.find('input').at(1).prop('value')).toEqual("")
})

