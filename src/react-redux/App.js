import React from 'react';

import { connect } from 'react-redux'

// connect 局部组件 提供数据和方法
// 参数一：组件需要哪些数据
// 参数二：组件需要哪些方法 dispatch

@connect(
    state => ({ num: state }),
    dispatch => ({
        add: () => dispatch({ type: "add" }),
        minus: () => dispatch({ type: "minus" })
    })
    // 同步的 dispatch 是可以简写的 返回一个 object
    // {
    //     add: () => ({ type: "add" }),
    //     minus: () => ({ type: "minus" })
    // }
)
class ReactReduxApp extends React.Component {
    render() {
        return (
            <div>
                <hr />
                <h3>react-Redux</h3>
                <p>{this.props.num}</p>
                <div>
                    {/* dispatch 把数据传递给 reducer */}
                    <button onClick={() => this.props.add()}>+</button>
                    <button onClick={() => this.props.minus()}>-</button>
                </div>
            </div>
        )
    }
}

// // 1.需要到参数
// const mapStateToProps = (state) => ({
//     num: state
// })

// // 2.需要到方法
// const mapDispatchToProps = (dispatch) => {
//     return {
//         add: () => dispatch({ type: "add" }),
//         minus: () => dispatch({ type: "minus" })
//     }
// }

// // 3.连接 redux 和 react
// ReactReduxApp = connect(mapStateToProps, mapDispatchToProps)(ReactReduxApp)


export default ReactReduxApp