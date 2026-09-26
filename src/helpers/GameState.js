import { CellState } from '../lib/game-of-life/src'

const { dead, alive } = CellState

const GameState = (rows, cols) => {
  const gameState = new Array(rows).fill(0)
  const glider = [[1, 2], [2, 2], [3, 2], [3, 1], [2, 0]]
  for (let row in gameState) {
    gameState[row] = new Array(cols).fill(dead)
  }
  glider.map(el => gameState[el[0]][el[1]] = alive)

  return gameState
}

export default GameState
