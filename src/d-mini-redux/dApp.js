import React from 'react'
import store from './dStore'
console.log(store.getState())
class DApp extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return <div>
            <p>{store.getState()}</p>
            <button onClick={() => store.dispatch({ type: 'add' })}>+</button>
        </div>
    }
}

export default DApp