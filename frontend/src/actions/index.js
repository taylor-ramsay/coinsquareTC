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

export function getAccountBalance(newBalance = 0.00) {
    console.log(newBalance)
    let balance = 0.00
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

export function getBtcBalance(newBtcBalance = 0.00000000) {
    let btcBalance = 0.00000000
    if(newBtcBalance) {
        btcBalance = newBtcBalance
    }
    else {
        btcBalance = 0.00000000
    }
    return {
        type: GET_BTC_BALANCE,
        payload: btcBalance
    }
}