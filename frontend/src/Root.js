import React from 'react'
import { Provider } from 'react-redux'
import reducers from './reducers'
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default props => {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
            {props.children}
        </Provider>
    )
}