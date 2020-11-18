import React from "react"
import ReactDOM from 'react-dom'

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

import ReduxIndex from './redux/index'
import ReactReduxIndex from './react-redux/index'

function App() {
  return (
    <div>
      <Game />
      <hr />
      <NameForm />
      <hr />
      <Rendering />
      <hr />
      <ContextA />
      <DynamicContextAttr />
      <DynamicContextObj />
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
    </div >
  )
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

