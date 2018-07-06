import { combineReducers, applyMiddleware } from 'redux';
import currentBTCpriceReducer from './reducer_currentBTCprice'
import currentAccountBalanceReducer from './reducer_currentAccountBalance'
import currentBTCBalanceReducer from './reducer_currentBTCBalanceReducer'

const rootReducer = combineReducers({
    currentBTCprice: currentBTCpriceReducer,
    currentAccountBalance: currentAccountBalanceReducer,
    currentBTCBalance: currentBTCBalanceReducer
})

export default rootReducer;