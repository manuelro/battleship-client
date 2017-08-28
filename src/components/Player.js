import React, {Component} from 'react'

import Board from './Board'

export default class Player extends Component{
  render(){
    console.log(this)

    return(
      <div>
        <h3>Player ID: {this.props.player.player_id}</h3>

        <Board id={this.props.player.board_id}/>
      </div>
    )
  }
}
