import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import { Provider } from './context'
import { GlobalStyle, theme, Title } from './components/styled'
import { Game, Board, Toolbar } from './components'
import { Game as GameOfLife } from './lib/game-of-life/src'
import GameState from './helpers/GameState'
// import { Cell } from './components/'

// const GridStyle = styled.div`
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: flex-start;
//   & > * {
//    flex: 1 100%;
//   }
// `

// const Container = styled.div`
//   display: flex;
//   height: ${({ height }) => height}px;
//   width: ${({ width }) => width}px;
// `

// const gameState = new Grid(32, 24)
// const game = new Game(gameState, true)

class App extends Component {
  ref = React.createRef()

  state = {
    board: {
      height: 0,
      width: 0
    },
    game: null,
    grid: null,
    generation: 0
  }

  getContext = () => ({
    ...this.state,
    // handleCellClick: this.handleCellClick,
    // nextState: this.nextState
  })

  // handleCellClick = (row, col) => {
  //   game.toggleCellState(row, col)
  //   this.setState({
  //     grid: game.getState()
  //   })
  // }

  // nextState = () => {
  //   const nextState = game.nextState()
  //   game.state = nextState
  //   this.setState(state => ({
  //     grid: nextState,
  //     generation: state.generation + 1
  //   }))
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.game === null) {
      const ref = this.ref.current
      return ref
    }

    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      console.log('componentDidUpdate', snapshot)
    }
    // const parentHeight = this.ref.current.parentElement.clientHeight
    // const boardWidth = this.ref.current.clientWidth
    // const { nextSibling, previousSibling } = this.ref.current
    // const nextElHeight = nextSibling !== null ? nextSibling.clientHeight : 0
    // const prevElHeight = previousSibling !== null ? previousSibling.clientHeight : 0
    // const boardHeight = parentHeight - (prevElHeight + nextElHeight)
    // const gameRowsNum = Math.floor(boardHeight / 20)
    // const gameColsNum = Math.floor(boardWidth / 20)
    // console.log(gameRowsNum, gameColsNum)
    // const gameState = new GameState(gameRowsNum, gameColsNum)
    // this.setState({
    //   board: {
    //     width: boardWidth,
    //     height: boardHeight
    //   },
    //   game: new GameOfLife(gameState)
    // })
    // console.log('Game Height', gameHeight)
    // console.log('Game Width', gameWidth)
    // console.log('Game Title Height', titleHeight)
    // console.log('Game Toolbar Height', toolbarHeight)
    // console.log('Game Board Height', boardHeight)
    // console.log('Number of rows', Math.floor(boardHeight / 20))
    // console.log('Number of cols', Math.floor(gameWidth / 20))
  }

  generateGameState = () => {

  }

  render() {
    console.log('render')
    return (
      <ThemeProvider theme={theme}>
        <Provider value={this.getContext()}>
          <GlobalStyle />
          <Game>
            <Title>TuxiMetal Game Of Life</Title>
            <Board ref={this.ref} gameState={this.state.game} />
            <Toolbar next play generation />
          </Game>
        </Provider>
      </ThemeProvider>

      // <div>
      //   <Container height='600' width='800'>
      //     {this.state.grid.map((rows, rowNum) => (
      //       <GridStyle key={rowNum}>
      //         {rows.map((cell, colNum) => (
      //           <Cell key={colNum} alive={cell.state} handleCellClick={() => this.handleCellClick(rowNum, colNum)} />
      //         ))}
      //       </GridStyle>
      //     ))}
      //   </Container>
      //   <p>Generation: {this.state.generation}</p>
      //   <button onClick={this.nextState}>Next State</button>
      // </div>
    )
  }
}

export default App
