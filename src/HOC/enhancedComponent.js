import React from 'react'
import wrappedComponent from './wrappedComponent'

import withLog from './log'

// hoc 
// 是一个函数
// 参数是一个组件
// 返回值是一个新组件
const withBaz = (Component) => {
    // 函数组件
    const newCopm = (props) => {
        return <Component {...props} baz='baz' />
    }
    return newCopm
}

const EnhancedComponent = withBaz(wrappedComponent)
// hoc 可以链式调用
const LogEnhancedComponent = withLog(withBaz(wrappedComponent))

@withLog
@withBaz
class DecoratorsApp extends React.Component {
    render() {
        return (
            <div>
                <p>这里可以查看到 装饰器增加的新参数 baz </p>
                {this.props.baz}
            </div>
        )
    }
}

export { EnhancedComponent, LogEnhancedComponent, DecoratorsApp }