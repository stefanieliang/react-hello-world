import React from 'react'

class ComponentsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "这是标题",
            description: "两者的区别在于 React.Component 并未实现 shouldComponentUpdate()，而 React.PureComponent 中以 **浅层** 对比 prop 和 state 的方式来实现了该函数。",
            personObj: {
                name: "小王",
                age: 18
            }
        }
    }

    changeTitle = () => {
        this.setState({ title: "这是标题update..." })
    }
    changeDescription = () => {
        this.setState({ description: "这是description update..." })
    }
    changePersonObj = () => {
        this.setState({
            personObj: {
                name: "小立",
                age: 180
            }
        })
    }

    render() {
        return (
            <div>
                <PureTitle title={this.state.title}></PureTitle>
                <PureDescription description={this.state.description}></PureDescription>
                <PurePersonObj personObj={this.state.personObj}></PurePersonObj>
                <button onClick={this.changeTitle}> 变Title </button>
                <button onClick={this.changeDescription}> 变Description </button>
                <button onClick={this.changePersonObj}> 变PersonObj </button>
            </div>
        )
    }
}

class PureTitle extends React.PureComponent {
    render() {
        console.log("PureTitle:React.PureComponent 刷新啦")
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

class PureDescription extends React.Component {

    // ！！shouldComponentUpdate() 方法模拟 PureComponent

    shouldComponentUpdate(nextProps, nextState) {
        // 返回 true 刷新组件
        // 返回 false 不刷新
        if (nextProps.description !== this.props.description) {
            return true
        }
        return false
    }
    render() {
        console.log("PureDescription:shouldComponentUpdate() 刷新啦")
        return (
            <div>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

class PurePersonObj extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            like: ['apple', 'pear']
        }
    }

    componentDidMount() {
        console.log('内部 state 改变啦')
        setTimeout(this.setState({ like: [...this.state.like, 'banana'] }), 1000)
    }

    render() {
        console.log("PurePersonObj:React.PureComponent 刷新啦")
        return (
            <div>
                <p>{this.props.personObj.name}-{this.props.personObj.age}</p>
                <ul>
                    {this.state.like.map(v => <li key={v}>{v}</li>)}
                </ul>
            </div>
        )
    }
}

export default ComponentsContainer