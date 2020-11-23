import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk';
import logger from 'redux-logger'

import { counterReducer1 } from './counter1.redux'
import { counterReducer2 } from './counter2.redux'

// 创建一个仓库
const rootReducer = combineReducers({ counterReducer1, counterReducer2 })
const store = createStore(rootReducer, applyMiddleware(thunk, logger))


ReactDOM.render(
    // Provider 顶级组件，提供数据
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("react-redux")
)

