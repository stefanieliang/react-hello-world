import React, { Component } from 'react'

// React.createContext() 需写在最外边

/**
 * 默认 Context.Provider
 */
// const { Provider, Consumer } = React.createContext()
const ThemeContext = React.createContext('light')

/**
 * <MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中
 * <MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中
 */
ThemeContext.displayName = 'MyDisplayName'

class ContextA extends Component {
    render() {
        return (
            // 使用 Provider 提供数据
            <ThemeContext.Provider value="dark">
                <ContextB />
            </ThemeContext.Provider>
        )
    }

}

// 中间层无需再传递
function ContextB() {
    return (
        <ContextC />
    )
}


class ContextC extends Component {
    /**
     * 在 class 上挂载 contextType（方式一）
     * static contextType = ThemeContext
     */
    static contextType = ThemeContext
    render() {
        return (
            <div>
                <h3>组件通信：context</h3>
                {/* 消费一：this.context */}
                <button> 按钮 {this.context}</button >
                {/* 消费二：ThemeContext.Consumer  */}
                <ThemeContext.Consumer>
                    {/* 注意此处是函数 */}
                    {value => value}
                </ThemeContext.Consumer>
            </div>
        )
    }
}
/**
* 在 class 上挂载 contextType（方式二）
* ContextC.contextType = ThemeContext
*/
// ContextC.contextType = ThemeContext

export { ContextA }