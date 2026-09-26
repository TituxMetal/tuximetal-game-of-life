import React from 'react'
import styled from 'styled-components'
import { withContext } from '../context'

const Bar = styled.section`
  display: flex;
  padding: .5rem;
  justify-content: space-evenly;
`

const Toolbar = ({ play, next, generation, counter, nextState }) => (
  <Bar>
    {play && <button>Play/pause</button>}
    {next && <button onClick={nextState}>Next</button>}
    {counter && <span>Generation: {generation}</span>}
  </Bar>
)

export default withContext(Toolbar)
