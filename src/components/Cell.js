import React from 'react'
import styled from 'styled-components'
import { withContext } from '../context'

const Square = styled.div`
  /* display: flex; */
  /* height: 15px;
  width: 15px; */
  border: 1px solid grey;

  &.alive {
    background-color: black;
  }
  &.dead {
    background-color: pink;
  }
`

const Cell = ({ alive, coord, handleCellClick }) => {
  const { row, col } = coord
  const cellClick = () => handleCellClick(row, col)
  return (
    <Square className={alive ? 'alive' : 'dead'} onClick={cellClick} />
)}

export default withContext(Cell)
