import React from 'react'
import { mount } from 'enzyme'
import CurrencyPairTrading from '../containers/CurrencyPairTrading'
import Root from '../Root'
import moxios from 'moxios'

let wrapped

beforeEach(()=>{
    moxios.install()
    moxios.stubRequest('http://localhost:8080/btc-price', {
        status: 200,
        response: {"ask":"10000"}
    })
    const initialState = {
        currentAccountBalance: 101.11,
        currentBTCBalance: .005
    }
    wrapped = mount(<Root initialState={initialState}><CurrencyPairTrading /></Root>)
})

afterEach(()=>{
    wrapped.unmount()
    moxios.uninstall()
})

it('loads USD input, BTC input, and Trade Button', ()=>{
    expect(wrapped.find('input').length).toEqual(2)
    expect(wrapped.find('button').length).toEqual(1)
})

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

it('shows the USD and BTC balance', () => {
    expect(wrapped.render().find('.usdbal').text()).toEqual('101.11')
    expect(wrapped.render().find('.btcbal').text()).toEqual('0.00500000')
})

it('calculates BTC quote and displays the result', ()=>{
    wrapped.find('input').at(0).simulate('change', {
        target: { value: 22.22 }
    })
    wrapped.update()
    expect(wrapped.find('input').at(0).props().value).toEqual(22.22)
    expect(wrapped.find('input').at(1).props().value).toEqual(22.22/10000)
})

it('deafaults the BTC amount to 0 when USD amount is negative or over-budget', ()=>{
    wrapped.find('input').at(0).simulate('change', {
        target: { value: -200 }
    })
    wrapped.update()
    expect(wrapped.find('input').at(1).props().value).toEqual(0)
    wrapped.find('input').at(0).simulate('change', {
        target: { value: 200 }
    })
    wrapped.update()
    expect(wrapped.find('input').at(1).props().value).toEqual(0)
})

