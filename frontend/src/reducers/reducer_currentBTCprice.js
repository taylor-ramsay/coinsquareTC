import { GET_BTC_PRICE } from '../actions/index'

export default (state = null, action) => {
    console.log('Action recieved', action)
    switch (action.type) {
        case GET_BTC_PRICE:
            return action.payload.data
    }
    return state
}