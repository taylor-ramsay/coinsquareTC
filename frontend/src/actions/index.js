import axios from 'axios'

export const GET_BTC_PRICE = 'GET_BTC_PRICE'

export function getBtcPrice() {
    const request = axios.get('http://localhost:8080/btc-price')
    return {
        type: GET_BTC_PRICE,
        payload: request
    }
}

export const GET_ACCOUNT_BALANCE = 'GET_ACCOUNT_BALANCE'

export function getAccountBalance(newBalance = null) {
    console.log(newBalance)
    let balance = null
    if(newBalance) {
        balance = newBalance
    }
    else {
        balance = 156.12
    }
    return {
        type: GET_ACCOUNT_BALANCE,
        payload: balance
    }
}

export const GET_BTC_BALANCE = 'GET_BTC_BALANCE'

export function getBtcBalance(newBtcBalance = null) {
    let btcBalance = null
    if(newBtcBalance) {
        btcBalance = newBtcBalance
    }
    else {
        btcBalance = 0
    }
    return {
        type: GET_BTC_BALANCE,
        payload: btcBalance
    }
}