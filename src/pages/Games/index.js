import React, {Component} from 'react'

import {Tabs, Tab} from 'material-ui/Tabs'

import MainAppBar from '../../components/MainAppBar'
import Create from '../../pages/Games/Create'
import Play from '../../pages/Games/Play'
import List from '../../pages/Games/List'

export default class Games extends Component{
  render(){
    return (
      <div>
        <MainAppBar/>

        <Tabs>
          <Tab label="Create game">
            <Create/>
          </Tab>

          <Tab label="Games List">
            <List/>
          </Tab>

          <Tab label="Current game">
            <Play/>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
