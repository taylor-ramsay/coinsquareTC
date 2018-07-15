import currentAccountBalanceReducer from '../reducers/reducer_currentAccountBalance'
import { GET_ACCOUNT_BALANCE } from '../actions';

it('handles actions of type GET_ACCOUNT_BALANCE', ()=>{
    const action = {
        type: GET_ACCOUNT_BALANCE,
        payload: 101.11
    }
    const newState = currentAccountBalanceReducer(null, action)
    expect(newState).toEqual(101.11)
})