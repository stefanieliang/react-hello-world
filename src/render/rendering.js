import React from 'react'

function Rendering(props) {
    return (
        <div>
            <h3>条件渲染</h3>
            <p>
                三目运算符：{0 ? (<span>true</span>) : (<span>false</span>)}
            </p>
            <p>
                && 运算符(<b> 注意！！数字的时候显示 </b>)：{0 && '有'}
            </p>
            <p>
                && 运算符(<span>falsy的时候不显示</span>)：{!!0 && '没有'}
            </p>
            <p>
                && 运算符 (<span>falsy的时候不显示</span>)：{false && '没有'}
            </p>
        </div>
    )
}
export { Rendering }