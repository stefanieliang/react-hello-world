import React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "请输入。。",
            sex: true,
            interest: 'apple',
            article: "这是由<textarea>渲染的一篇文章啊。。。"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        /**
         * 处理多个输入
         * 可借用 event.target.name 的值
         */
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        alert(JSON.stringify(this.state))
        // 显示调用，阻止表单重新渲染
        e.preventDefault()
    }

    render() {
        return (
            <form>
                <h3>表单</h3>
                <p>
                    <i>受控组件：输入的值始终由 react 的 state 决定</i>
                </p>
                <p>
                    <label>
                        受控输入空值：
                        {/* <input type="text" value={null} /> */}
                        {/* <input type="text" value={undefined} /> */}
                        不是空值的时候 不能输入：
                        {/* <input type="text" value={this.state.name} /> */}
                    </label>
                </p>
                <p>
                    <label>
                        姓名：
                        <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label htmlFor="sex">
                        性别：
                        <input name="sex" id="sex" type="checkbox" checked={this.state.sex} onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        兴趣爱好：
                        <select name="interest" value={this.state.interest} onChange={this.handleChange}>
                            <option value='apple'>苹果</option>
                            <option value='pear'>梨</option>
                            <option value='banana'>香蕉</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        文章：
                        <textarea name="article" value={this.state.article} onChange={this.handleChange}></textarea>
                    </label>
                </p>

                <input type="submit" value="提交" onClick={this.handleSubmit} />

            </form >
        )
    }
}

export { NameForm }