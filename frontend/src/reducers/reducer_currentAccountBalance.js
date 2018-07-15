import { GET_ACCOUNT_BALANCE } from '../actions/index'

export default (state = null, action) => {
    switch (action.type) {
        case GET_ACCOUNT_BALANCE:
            return action.payload
    }
    return state
}