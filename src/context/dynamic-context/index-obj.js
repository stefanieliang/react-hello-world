import React from 'react'
import { themes, DynamicContextObj } from './theme.context'


class DynamicContextc extends React.Component {
    static contextType = DynamicContextObj
    render() {
        const { theme, toggleTheme } = this.context
        return (
            <button style={{ backgroundColor: theme.background }} onClick={toggleTheme}>切换背景色</button>
        )
    }
}

function DynamicContextB() {
    return (
        <DynamicContextc></DynamicContextc>
    )
}

class DynamicContextA extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => (
                {
                    theme: state.theme === themes.dark ? themes.light : themes.dark,
                }
            ))
        }

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        }
    }

    render() {
        return (
            <div>
                <h3> 动态 context obj </h3>
                <section>
                    这是传了一个对象
                    <DynamicContextObj.Provider value={this.state}>
                        <DynamicContextB />
                    </DynamicContextObj.Provider>
                </section>
            </div>
        )
    }
}

export { DynamicContextA }