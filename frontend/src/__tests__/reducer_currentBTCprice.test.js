import currentBTCpriceReducer from '../reducers/reducer_currentBTCprice'
import { GET_BTC_PRICE } from '../actions';

it('handles actions of type GET_BTC_PRICE', ()=>{
    const action = {
        type: GET_BTC_PRICE,
        payload: {data: { "ask": "10000" }}
    }
    const newState = currentBTCpriceReducer(null, action)
    expect(newState).toEqual({ "ask": "10000" })
})