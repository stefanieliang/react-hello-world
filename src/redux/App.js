import React from 'react';

import store from './store'
import { Button } from 'antd';
class ReduxApp extends React.Component {
    render() {
        return (
            <div>
                <h3>组件通信：Redux</h3>
                <p>{store.getState()}</p>
                <div>
                    {/* dispatch 把数据传递给 reducer */}
                    <Button type="primary" onClick={() => store.dispatch({ type: "add" })}>+</Button>
                    <Button type="dashed" onClick={() => store.dispatch({ type: "minus" })}>-</Button>
                </div>
            </div>
        )
    }
}


export default ReduxApp