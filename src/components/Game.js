import React, { Component } from 'react'

import { Provider } from '../context'
import Board from './Board'
import { Wrapper } from './styled'
import { Game as GameOfLife } from '../lib/game-of-life/src'
import GameState from '../helpers/GameState'

class Game extends Component {
  ref = React.createRef()
  game = null

  state = {
    boxSize: null,
    board: {
      height: 0,
      width: 0
    },
    grid: null,
    generation: 0
  }

  getContext = () => ({
    ...this.state,
    handleCellClick: this.handleCellClick,
    nextState: this.nextState
  })

  nextState = () => {
    const nextState = this.game.nextState()
    this.game.state = nextState
    this.setState(state => ({
      grid: nextState,
      generation: state.generation + 1
    }))
  }

  handleCellClick = (row, col) => {
    this.game.toggleCellState(row, col)
    const grid = this.game.getState()
    this.setState(prevState => ({
      ...prevState,
      grid 
    }))
  }

  componentDidMount() {
    const parentHeight = this.ref.current.parentElement.clientHeight
    const boardWidth = this.ref.current.clientWidth
    const { nextSibling, previousSibling } = this.ref.current
    const nextElHeight = nextSibling !== null ? nextSibling.clientHeight : 0
    const prevElHeight = previousSibling !== null ? previousSibling.clientHeight : 0
    const boardHeight = parentHeight - (prevElHeight + nextElHeight)
    const gameRowsNum = Math.floor(boardHeight / this.props.boxSize)
    const gameColsNum = Math.floor(boardWidth / this.props.boxSize)
    const gameState = GameState(gameRowsNum, gameColsNum)
    this.game = new GameOfLife(gameState, this.props.torus)
    this.setState({
      boxSize: this.props.boxSize,
      board: {
        width: boardWidth,
        height: boardHeight
      },
      grid: this.game.getState()
    })
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.game !== this.state.game) {
  //     console.log('componentDidUpdate', this.state.grid)
  //   }
  // }

  render () {
    const { width, height, title, toolbar } = this.props
    return (
      <Provider value={this.getContext()}>
        <Wrapper width={width} height={height}>
          {title && title}
          <Board ref={this.ref} grid={this.state.grid} boxSize={this.state.boxSize} />
          {toolbar && toolbar}
        </Wrapper>
      </Provider>
    )
  }
}

export default Game
