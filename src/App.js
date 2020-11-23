
import React from "react"

import { NameForm } from './form/name'
import { Game } from './game/tic-tac-toe'
import { Rendering } from './render/rendering'
import { ContextA } from './context/index'
import { DynamicContextAttr, DynamicContextObj } from './context/dynamic-context/index'
import {
    CommentList,
    CommentListContainer,
} from './comtainer-components/index'

import ComponentsContainer from './pureComponent/index'
import MemoComponent from './memo/index'

// eslint-disable-next-line
import ReduxIndex from './redux/index'
// eslint-disable-next-line
import ReactReduxIndex from './react-redux/index'

import { EnhancedComponent, LogEnhancedComponent, DecoratorsApp } from './HOC/enhancedComponent'

import { Route, Link, Redirect } from 'react-router-dom'

function Index() {
    return (
        <div>
            <h2>首页</h2>
        </div>
    )
}

function About(props) {
    return (
        <div>
            <h2>关于 id:{props.match.params.id}</h2>
        </div>
    )
}

function AboutDetail() {
    return (
        <div>
            <h2>关于--详情</h2>
        </div>
    )
}

function App() {
    return (
        <div>
            <ul>
                <li><Link to="/">首页</Link> </li>
                <ul>
                    <p>(这里模拟了一个 路由传参 路由嵌套)</p>
                    <li><Link to="/about/1">关于1</Link> </li>
                    <li><Link to="/about/2">关于2</Link> </li>
                    <li><Link to="/about/detail">关于-详情</Link> </li>
                </ul>
                <li><Link to="/game">Game</Link> </li>
                <li><Link to="/nameForm">NameForm</Link></li>
                <li><Link to="/rendering">Rendering</Link></li>
                <ul>
                    <p>容器组件 展示组件</p>
                    <ul>
                        <li><Link to="/commentList">CommentList</Link></li>
                        <li><Link to="/commentListContainer">CommentListContainer</Link></li>
                    </ul>
                </ul>
                <ul>
                    <p>PureComponent</p>
                    <ul>
                        <li><Link to="/componentsContainer">ComponentsContainer</Link></li>
                    </ul>
                </ul>
                <ul>
                    <p>MemoComponent</p>
                    <ul>
                        <li><Link to="/memoComponent">MemoComponent</Link></li>
                    </ul>
                </ul>
                <ul>
                    <p>HOC</p>
                    <ul>
                        <li><Link to="/enhancedComponent">EnhancedComponent</Link></li>
                        <li><Link to="/logEnhancedComponent">LogEnhancedComponent</Link></li>
                        <li><Link to="/decoratorsApp">DecoratorsApp</Link></li>
                    </ul>
                </ul>
                <ul>
                    <p>context</p>
                    <ul>
                        <li><Link to="/contextA">ContextA</Link></li>
                        <li><Link to="/dynamicContextAttr">DynamicContextAttr</Link></li>
                        <li><Link to="/dynamicContextObj">DynamicContextObj</Link></li>
                    </ul>
                </ul>
            </ul>

            {/* Route 基本等同于 vue 中的 Router-view */}
            {/* 路由是追加匹配，因此根理由需加上 exact */}
            <Route exact path="/" component={Index}></Route >
            <Route path="/about/:id" component={About}></Route >
            <Route path="/about/detail" component={AboutDetail}></Route >
            <Route path="/game">
                <Game></Game>
            </Route >
            <Route path="/nameForm" component={NameForm}></Route>
            <Route path="/rendering" component={Rendering}></Route>
            <Route path="/commentList" component={CommentList}></Route>
            <Route path="/commentListContainer" component={CommentListContainer}></Route>
            <Route path="/componentsContainer" component={ComponentsContainer}></Route>
            <Route path="/memoComponent" component={MemoComponent}></Route>
            <Route path="/enhancedComponent" component={EnhancedComponent}></Route>
            <Route path="/logEnhancedComponent" component={LogEnhancedComponent}></Route>
            <Route path="/decoratorsApp" component={DecoratorsApp}></Route>
            <Route path="/contextA" component={ContextA}></Route>
            <Route path="/dynamicContextAttr" component={DynamicContextAttr}></Route>
            <Route path="/dynamicContextObj" component={DynamicContextObj}></Route>
        </div >
    )
}

export default App
