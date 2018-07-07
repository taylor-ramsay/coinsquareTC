import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBtcPrice, getAccountBalance, getBtcBalance } from '../actions/index'

class CurrencyPairTrading extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accountBalance: 0,
            btcBalance: 0.00000000,
            usdAmount: "",
            btcAmount: "",
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
            usdAmount: "",
            btcAmount: "",
            updatedAccBal: 0,
            updatedBtcBal: 0
        })
    }

    usdInputHandler(e) {
        let bal = this.props.accountBalance
        let btcBal = this.props.btcBalance
        let usd = e.target.value
        let ask = this.props.btcPrice.ask
        let btc = usd / ask
        let updatedAccBal = bal - usd
        let updatedBtcBal = btcBal + btc
        this.setState({
            usdAmount: usd,
            btcAmount: usd <= bal ? btc : 0,
            updatedAccBal: updatedAccBal,
            updatedBtcBal: updatedBtcBal
        })
    }

    render() {
        if (this.props.btcPrice) {
            console.log(this.props.btcPrice.ask)
        }

        return (
            <div>
                <form onSubmit={this.formSubmitHandler}>
                    <p>Account Balance</p>
                    <div className="summary">
                        <p><span className="currency-text">USD</span> {this.props.accountBalance}</p>
                        <p><span className="currency-text">BTC</span> {this.props.btcBalance}</p>
                    </div>
                    <p>Trade</p>
                    <div className="currency-box"><p className="currency-text">USD</p></div>
                    <input placeholder="Enter your amount" value={this.state.usdAmount} onChange={this.usdInputHandler} />
                    <p>For</p>
                    <div className="currency-box"><p className="currency-text">BTC</p></div>
                    <input placeholder="Display Quote" value={this.state.btcAmount} />
                    <button type="submit" value="Submit">Trade</button>
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