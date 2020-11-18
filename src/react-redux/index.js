import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'

import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
    // Provider 顶级组件，提供数据
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("react-redux")
)
