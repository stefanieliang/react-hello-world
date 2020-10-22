import React from "react"
import ReactDOM from 'react-dom'

import { NameForm } from './form/name'
import { Game } from './game/tic-tac-toe'
import { Rendering } from './render/rendering'
import { ContextA } from './context/index'
import { DynamicContextAttr, DynamicContextObj } from './context/dynamic-context/index'
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
    </div >
  )
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

