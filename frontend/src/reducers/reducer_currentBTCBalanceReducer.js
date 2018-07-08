import { GET_BTC_BALANCE } from '../actions/index'

export default (state = 0.00000000, action) => {
    console.log('Action recieved', action)
    switch (action.type) {
        case GET_BTC_BALANCE:
            return action.payload
    }
    return state
}