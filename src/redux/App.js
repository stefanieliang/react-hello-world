import React from 'react';

import store from './store'

class ReduxApp extends React.Component {
    render() {
        return (
            <div>
                <hr />
                <h3>Redux</h3>
                <p>{store.getState()}</p>
                <div>
                    {/* dispatch 把数据传递给 reducer */}
                    <button onClick={() => store.dispatch({ type: "add" })}>+</button>
                    <button onClick={() => store.dispatch({ type: "minus" })}>-</button>
                </div>
            </div>
        )
    }
}


export default ReduxApp