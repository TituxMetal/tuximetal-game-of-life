import React from 'react'

import { Title } from './components/styled'
import { Game, Toolbar } from './components'

const App = () => {
  const title = <Title>TuxiMetal Game Of Life</Title>
  const toolbar = <Toolbar next play counter />
  return (
    <Game boxSize='40' torus title={title} toolbar={toolbar} />
  )
}

export default App
