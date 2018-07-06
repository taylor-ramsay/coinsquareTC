import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBtcPrice, getAccountBalance, getBtcBalance } from '../actions/index'

class CurrencyPairTrading extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            accountBalance: null,
            btcBalance: null,
            usdAmount: null,
            btcPrice: null
        }
        this.formSubmitHandler = this.formSubmitHandler.bind(this)
        this.usdInputHandler = this.usdInputHandler.bind(this)
        this.btcInputHandler = this.btcInputHandler.bind(this)
    }

    componentDidMount() {
        this.props.getBtcPrice()
        this.props.getAccountBalance()
        this.props.getBtcBalance()
    }

    formSubmitHandler(e) {
        e.preventDefault()
        this.setState({
            usdAmount: null,
            btcPrice: null,
            accountBalance: null
        })
    }

    usdInputHandler(e) {
        let bal = this.props.accountBalance
        let usd = e.target.value
        let ask = this.props.btcPrice.ask
        let btc = usd/ask
        this.setState({
            usdAmount: usd,
            btcBalance: usd<=bal ? btc : 0
        })
    }

    btcInputHandler(e) {
        this.setState({
            btcPrice: e.target.value
        })
    }

    render() {
        // console.log(this.props)
        console.log(this.state)

        if(this.props.btcPrice){
            console.log(this.props.btcPrice.ask)
        }
        
        return (
            <div>
                <p>Current BTC price: {this.props.btcPrice ? this.props.btcPrice.ask : ""}</p>
                <p>Current Account Balance: {this.props.accountBalance}</p>

                <form onSubmit={this.formSubmitHandler}>
                <p>USD</p>
                <input placeholder="Enter your amount" value={this.state.usdAmount} onChange={this.usdInputHandler} />
                <p>BTC</p>
                <input placeholder="Display Quote" value={this.state.btcBalance} onChange={this.btcInputHandler}/>
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