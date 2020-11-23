
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

function App() {
    return (
        <div>
            <Link to="/game">
                game
            </Link>
            <hr />
            <NameForm />
            <hr />
            <Rendering />
            <hr />
            <h3>容器组件 展示组件</h3>
            <CommentList />
            <CommentListContainer />
            <hr />
            <h3>PureComponent</h3>
            <ComponentsContainer></ComponentsContainer>
            <hr />
            <h3>MemoComponent</h3>
            <MemoComponent></MemoComponent>
            <hr />
            <h3>HOC</h3>
            <EnhancedComponent />
            <LogEnhancedComponent />
            <DecoratorsApp />


            <hr />
            <ContextA />
            <DynamicContextAttr />
            <DynamicContextObj />

            <Route path="/game">
                <Game></Game>
            </Route>
        </div >
    )
}

export default App
