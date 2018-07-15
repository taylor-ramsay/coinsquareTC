import { GET_ACCOUNT_BALANCE, getAccountBalance, GET_BTC_PRICE, getBtcPrice, GET_BTC_BALANCE, getBtcBalance } from '../actions/index.js'

describe('getAccountBalance', ()=>{
    it('has the correct type', ()=>{
        const action = getAccountBalance()
        expect(action.type).toEqual(GET_ACCOUNT_BALANCE)
    })
    it('has the correct payload', ()=>{
        const action = getAccountBalance(33.23)
        expect(action.payload).toEqual(33.23)
    })
})

describe('getBtcBalance', ()=>{
    it('has the correct type', ()=>{
        const action = getBtcBalance()
        expect(action.type).toEqual(GET_BTC_BALANCE)
    })
    it('has the correct payload', ()=>{
        const action = getBtcBalance(22.21)
        expect(action.payload).toEqual(22.21)
    })
})

describe('getBtcPrice', ()=>{
    it('has the correct type', ()=>{
        const action = getBtcPrice()
        expect(action.type).toEqual(GET_BTC_PRICE)
    })
    // it('has the correct payload', ()=>{
    //     const action = getBtcPrice()
    //     const request = 22.21
    //     expect(action.payload).toEqual(22.21)
    // })
})