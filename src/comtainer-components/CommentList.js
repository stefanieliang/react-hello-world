import React from 'react'

class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        setTimeout(
            this.setState({
                comments: ['嘿嘿', '哈哈', '呼呼']
            }), 3000)
    }

    render() {
        return (
            <div>
                <p>容器组件 和 展示组件不分离的情况</p>
                <ul>
                    {this.state.comments.map(this.renderComment)}
                </ul>
            </div>
        )
    }

    renderComment = (v) => {
        return (
            <li key={v}>{v}</li>
        )
    }
}

export default CommentList