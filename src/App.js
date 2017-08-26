import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import logo from './logo.svg'
import './App.css'

import TokenStore from './shared/stores/TokenStore'
import * as TokenActions from './shared/actions/TokenActions'
import GameStore from './shared/stores/GameStore'

import AccountPage from './pages/Account'
import GamesPage from './pages/Games'

class App extends Component {
  state = {}

  componentDidMount(){
    this.setState({ token: TokenStore.get() })
  }

  componentWillMount(){
    TokenStore.on('removed', () => {
      this.setState({ token: false })
    })

    TokenStore.on('stored', () => {
      this.setState({ token: TokenStore.get() })
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {this.state.token ? <GamesPage/> : <AccountPage/>}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
