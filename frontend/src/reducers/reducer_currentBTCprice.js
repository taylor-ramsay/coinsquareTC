import { GET_BTC_PRICE } from '../actions/index'

export default (state = 0.00000000, action) => {
    switch (action.type) {
        case GET_BTC_PRICE:
            return action.payload.data
    }
    return state
}