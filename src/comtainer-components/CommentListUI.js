import React from 'react'

class CommentListUI extends React.Component {

    render() {
        return (
            <div>
                <p>容器组件 和 展示组件 分开啦~~</p>
                <ul>
                    {this.props.comments.map(this.renderComment)}
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

export default CommentListUI