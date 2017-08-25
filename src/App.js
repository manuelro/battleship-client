import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import logo from './logo.svg'
import './App.css'
import {createEndpoint} from './shared/config'
import {getToken} from './shared/utils'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          {!getToken() ? <Login/> : <Dashboard/>}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
