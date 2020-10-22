import React from 'react'
import { themes, DynamicContext } from './theme.context'


class DynamicContextc extends React.Component {
    static contextType = DynamicContext
    render() {
        const theme = this.context
        return (
            <button style={{ backgroundColor: theme.background }} onClick={this.props.toggleTheme}>切换背景色</button>
        )
    }
}

function DynamicContextB(props) {
    return (
        <DynamicContextc toggleTheme={props.toggleTheme}></DynamicContextc>
    )
}

class DynamicContextA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: themes.light,
        }
        this.toggleTheme = this.toggleTheme.bind(this)
    }

    toggleTheme() {
        this.setState(state => (
            {
                theme: state.theme === themes.dark ? themes.light : themes.dark,
            }
        ))
    }

    render() {
        return (
            <div>
                <h3> 动态 context attr</h3>
                <section>
                    这是只传颜色
                    <DynamicContext.Provider value={this.state.theme}>
                        <DynamicContextB toggleTheme={this.toggleTheme} />
                    </DynamicContext.Provider>
                </section>
                <section>
                    这个使用的是 默认值 dark
                <DynamicContextc />
                </section>
            </div>
        )
    }
}

export { DynamicContextA }