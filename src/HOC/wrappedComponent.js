import {
    Component
} from 'react'

class WrappedComponent extends Component {
    state = {
        foo: "foo",
        bar: "bar",
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.map(v => <li key={v}>{v}</li>)}
                </ul>
            </div>
        )
    }
}

export default WrappedComponent