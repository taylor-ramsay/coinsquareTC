import React, { Component } from 'react'
import CurrencyPairTrading from '../containers/CurrencyPairTrading'

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React Apps</h1>
                <CurrencyPairTrading />
            </div>
        )
    }
}

export default App