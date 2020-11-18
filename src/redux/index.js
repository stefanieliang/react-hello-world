import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import store from './store';

const render = () => {
    ReactDOM.render(
        <App></App>,
        document.getElementById("redux")
    )
}
render()

// 每次 dispatch 都会触发 subscribe 监听函数
store.subscribe(render)
