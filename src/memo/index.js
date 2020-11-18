import React from 'react'

class MemoComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "这是标题",
            description: "React.memo 仅检查 props 变更。默认情况下其只会对复杂对象做**浅层**对比",
        }
    }

    changeTitle = () => {
        this.setState({ title: "这是标题update..." })
    }
    changeDescription = () => {
        this.setState({ description: "这是description update..." })
    }

    render() {
        return (
            <div>
                <MemoTitle title={this.state.title}></MemoTitle>
                <MomoDescription description={this.state.description}></MomoDescription>
                <button onClick={this.changeTitle}> 变Title </button>
                <button onClick={this.changeDescription}> 变Description </button>
            </div>
        )
    }
}

const MemoTitle = React.memo((props) => {
    console.log("MemoTitle 刷新啦")
    return (
        <div>
            <p>{props.title}</p>
        </div>
    )
})

// 复杂的对比，可传入比较函数作为第二个参数
const MomoDescription = React.memo(MomoDescriptionFn, areEqual)

function MomoDescriptionFn(props) {
    console.log("MomoDescription 刷新啦")
    return (
        <div>
            <p>{props.description}</p>
        </div>
    )
}

function areEqual(prevProps, nextProps) {
    /*
    如果把 nextProps 传入 render 方法的返回结果与
    将 prevProps 传入 render 方法的返回结果一致则返回 true，
    否则返回 false
    */
    if (prevProps.description === nextProps.description) {
        return true
    }
    return false
}
export default MemoComponent