import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import logo from './logo.svg'
import './App.css'

import TokenStore from './shared/stores/TokenStore'
import * as TokenActions from './shared/actions/TokenActions'
import GameStore from './shared/stores/GameStore'
import ErrorStore from './shared/stores/ErrorStore'

import AccountPage from './pages/Account'
import GamesPage from './pages/Games'

import ErrorMessage from './components/ErrorMessage'
import Message from './components/Message'

import * as utils from './shared/utils'

class Ship{
  constructor(){
    const sizes = [2, 4, 5, 7]
    const alignments = ['h', 'v']

    const randomSizeIndex = Math.floor(Math.random() * sizes.length)
    const randomAlignmentIndex = Math.floor(Math.random() * alignments.length)

    this.size = sizes[randomSizeIndex]
    this.alignment = alignments[randomAlignmentIndex]
  }
}

class EmptyRange{
  constructor(start, end){
    this.start = start
    this.end = end
    this.size = end - start
  }
}

function getRowEmptyRanges(row){
  const ranges = []

  let currentCol
  let start

  for (var i = 0; i < row.length; i++) {
    currentCol = row[i]
    start = 0
    if(!currentCol){
      if(!start) start = currentCol
    } else {
      if(start){
        ranges.push(new EmptyRange(start, currentCol))
      } else {
        start = currentCol
      }
    }
  }

  return ranges
}

console.log(getRowEmptyRanges([null, null, 1, 1, null, null]));

function placeShip(matrix, ship){
  if(ship.alignment == 'h'){
    // The chip is horizontal
  } else {
    // The chip is vertical
  }
}

function placeShips(matrix, quantity){
  for (var i = 0; i < quantity; i++) {
    placeShip(matrix, new Ship)
  }
}

function generateMatrix(size){
  const matrix = new Array()
  for (var i = 0; i < size; i++) {
    matrix[i] = []

    for (var j = 0; j < size; j++) {
      matrix[i][j] = 0
    }
  }

  return matrix
}

placeShips(generateMatrix(10), 4)

class App extends Component {
  state = {}

  constructor(){
    super()
    this.state.token = TokenStore.get()
  }

  componentWillMount(){
    TokenStore.on('removed', () => {
      this.setState({ token: null })
      utils.clearEverything()
    })

    TokenStore.on('stored', () => {
      this.setState({ token: TokenStore.get() })
    })

    if(TokenStore.get()) utils.startConcurrentLoading()
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Message/>
          {this.state.token ? <GamesPage/> : <AccountPage/>}
          <ErrorMessage/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
