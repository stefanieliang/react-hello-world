import React from 'react'

import CommentListUI from './CommentListUI'

class CommentListContainer extends React.Component {
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
                <CommentListUI comments={this.state.comments}></CommentListUI>
            </div>
        )
    }
}

export default CommentListContainer