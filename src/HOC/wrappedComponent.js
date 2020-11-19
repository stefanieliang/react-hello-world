import React from 'react'

class WrappedComponent extends React.Component {
    state = {
        list: ['foo', 'bar']
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(v => <li key={v}>{v}</li>)}
                </ul>
            </div>
        )
    }
}

export default WrappedComponent