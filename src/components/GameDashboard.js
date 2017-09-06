import React, {Component} from 'react'

import {List} from 'material-ui/List'

import Enemy from './Enemy'

export default class GameDashboard extends Component{
  render(){
    const players = this.props.game ? this.props.game.players : []
    const enemies = players.map((playerId, index) => <Enemy game={this.props.game} player={this.props.player} playerId={playerId} key={`player-enemy-${index}`} />)

    return(
      <div>
        <h3>The game dashboard</h3>

        <List>
          {enemies}
        </List>

      </div>
    )
  }
}
