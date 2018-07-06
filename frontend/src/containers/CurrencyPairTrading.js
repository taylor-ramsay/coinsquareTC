import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBtcPrice, getAccountBalance, getBtcBalance } from '../actions/index'

class CurrencyPairTrading extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            accountBalance: 0,
            btcBalance: 0,
            usdAmount: 0,
            btcAmount: 0,
            btcPrice: 0,
            updatedAccBal: 0,
            updatedBtcBal: 0
        }
        this.formSubmitHandler = this.formSubmitHandler.bind(this)
        this.usdInputHandler = this.usdInputHandler.bind(this)
    }

    componentDidMount() {
        this.props.getBtcPrice()
        this.props.getAccountBalance()
        this.props.getBtcBalance()
    }

    formSubmitHandler(e) {
        e.preventDefault()
        let updatedAccBal = this.state.updatedAccBal
        let updatedBtcBal = this.state.updatedBtcBal
        this.props.getAccountBalance(updatedAccBal)
        this.props.getBtcBalance(updatedBtcBal)
        this.setState({
            usdAmount: 0,
            btcAmount: 0,
            updatedAccBal: 0,
            updatedBtcBal: 0
        })
    }

    usdInputHandler(e) {
        let bal = this.props.accountBalance
        let btcBal = this.props.btcBalance
        let usd = e.target.value
        let ask = this.props.btcPrice.ask
        let btc = usd/ask
        let updatedAccBal = bal - usd
        let updatedBtcBal = btcBal + btc
        this.setState({
            usdAmount: usd,
            btcAmount: usd<=bal ? btc : 0,
            updatedAccBal: updatedAccBal,
            updatedBtcBal: updatedBtcBal
        })
    }

    render() {
        if(this.props.btcPrice){
            console.log(this.props.btcPrice.ask)
        }
        
        return (
            <div>
                <p>Current BTC price: {this.props.btcPrice ? this.props.btcPrice.ask : ""}</p>
                <p>USD Balance: {this.props.accountBalance}</p>
                <p>BTC Balance: {this.props.btcBalance}</p>

                <form onSubmit={this.formSubmitHandler}>
                <p>USD</p>
                <input placeholder="Enter your amount" value={this.state.usdAmount} onChange={this.usdInputHandler} />
                <p>BTC</p>
                <input placeholder="Display Quote" value={this.state.btcAmount} />
                <button type="submit" value="Submit">Submit</button>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getBtcPrice, getAccountBalance, getBtcBalance }, dispatch)
}

function mapStateToProps(state) {
    return { 
        btcPrice: state.currentBTCprice,
        accountBalance: state.currentAccountBalance,
        btcBalance: state.currentBTCBalance
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyPairTrading)