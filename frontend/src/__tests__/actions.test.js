import moxios from 'moxios'
import { GET_ACCOUNT_BALANCE, getAccountBalance, GET_BTC_PRICE, getBtcPrice, GET_BTC_BALANCE, getBtcBalance } from '../actions/index.js'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import promiseMiddleware from 'redux-promise-middleware'
import * as actions from '../actions';

const middlewares = [promiseMiddleware()]
const mockStore = configureMockStore(middlewares)

let wrapped

beforeEach(() => {
    moxios.install()
})

afterEach(() => {
    moxios.uninstall()
})

describe('getAccountBalance', () => {
    it('has the correct type', () => {
        const action = getAccountBalance()
        expect(action.type).toEqual(GET_ACCOUNT_BALANCE)
    })
    it('has the correct payload', () => {
        const action = getAccountBalance(33.23)
        expect(action.payload).toEqual(33.23)
    })
})

describe('getBtcBalance', () => {
    it('has the correct type', () => {
        const action = getBtcBalance()
        expect(action.type).toEqual(GET_BTC_BALANCE)
    })
    it('has the correct payload', () => {
        const action = getBtcBalance(22.21)
        expect(action.payload).toEqual(22.21)
    })
})

describe('getBtcPrice', () => {

    it('has the correct type', () => {
        const action = getBtcPrice()
        expect(action.type).toEqual(GET_BTC_PRICE)
    })
    it('has the correct payload', (done) => {

        const action = getBtcPrice()

        moxios.stubRequest('http://localhost:8080/btc-price', {
            status: 200,
            response: { "ask": "10000" }
        })

        const store = mockStore({ "ask": "10000" })

        return store.dispatch(getBtcPrice()).then(() => {
            expect(store.getActions()[1].payload.data).toEqual({ "ask": "10000" })
            done()
        })
    })
})
