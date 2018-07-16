import currentBTCBalanceReducer from '../reducers/reducer_currentBTCBalanceReducer'
import { GET_BTC_BALANCE } from '../actions';

it('handles actions of type GET_BTC_BALANCE', ()=>{
    const action = {
        type: GET_BTC_BALANCE,
        payload: 55.21
    }
    const newState = currentBTCBalanceReducer(null, action)
    expect(newState).toEqual(55.21)
})