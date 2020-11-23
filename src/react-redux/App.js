import React from 'react';

import { connect } from 'react-redux'

import {
    addAction,
    minusAction
} from './counter1.redux'

import {
    doubleAction
} from './counter2.redux'


// import thunk from 'redux-thunk';

// connect 局部组件 提供数据和方法
// 参数一：组件需要哪些数据
// 参数二：组件需要哪些方法 dispatch

@connect(
    state => ({ num: state.counterReducer1 }),/* 此处相当于增加了命名空间counterReducer1 */
    {
        addAction,
        minusAction
    }
)
class App1 extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.num}</p>
                <button onClick={() => this.props.addAction()}>+</button>
                <button onClick={() => this.props.addAction({ step: 2 })}>+2</button>
                <button onClick={() => this.props.minusAction()}>-</button>
            </div>
        )
    }
}

@connect(
    state => ({ num: state.counterReducer2 }),
    {
        doubleAction
    }
)
class App2 extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.num}</p>
                <button onClick={() => this.props.doubleAction()}> *2</button>
            </div>
        )
    }
}


// @connect(
//     state => ({ num: state.asyncReducer }),
//     dispatch => ({
//         asyncAddAction: () => dispatch()
//     })
// )
class ReactReduxApp extends React.Component {
    render() {
        return (
            <div>
                <hr />
                <h3>组件通信：react-Redux</h3>
                <div>
                    {/* dispatch 把数据传递给 reducer */}
                    <App1></App1>
                    <br></br>
                    <App2></App2>
                    <br></br>
                    <p>异步+1</p>
                    {/* <button onClick={() => this.props.asyncAddAction()}> 异步+1</button> */}
                </div>
            </div >
        )
    }
}

export default ReactReduxApp