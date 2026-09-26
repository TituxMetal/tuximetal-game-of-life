import React from 'react'
import styled from 'styled-components'

import { withContext } from '../context'
import Cell from './Cell'
import GameState from '../helpers/GameState'

const GridStyle = styled.div`
  /* border: 1px solid red;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  & > * {
   flex: 1 100%;
  } */
`

const Grid = styled.div`
  border: 1px solid green;
  /* height: ${({ height }) => height + 'px' || 'auto'};
  width: ${({ width }) => width + 'px' || 'auto'}; */
`

const Board = React.forwardRef(({ gameState }, ref) => {
  // const grid = gameState.state()
  console.log('Board render', gameState)
  // const state = grid.map((rows, rowNum) => (
  //   <GridStyle key={rowNum}>
  //     {rows.map((cell, colNum) => (
  //       <Cell key={colNum} alive={cell.state} />
  //     ))}
  //   </GridStyle>
  // ))
  return (
    <Grid ref={ref}>
      {/* {state} */}
    </Grid>
  )
})

export default Board
