import React from 'react'

import Cell from './Cell'
import { Row } from './styled'

const Board = React.forwardRef(({ grid, boxSize }, ref) => {
  const gameOfLife = grid !== null && (
    grid.map((rows, rowNum) => (
      <Row key={rowNum} height={boxSize}>
        {rows.map((cell, colNum) => (
          <Cell key={colNum} alive={cell.state} coord={{ row: rowNum, col: colNum }} />
        ))}
      </Row>
    ))
  )
  return (
    <section ref={ref}>
      {gameOfLife}
    </section>
  )
})

export default Board
