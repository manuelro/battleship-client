import React, {Component} from 'react'

import PlayerStore from '../../shared/stores/PlayerStore'

import Player from '../../components/Player'

export default class Play extends Component{
  state = {}

  constructor(){
    super()
    this.state.player = PlayerStore.get()
  }

  componentWillMount(){
    PlayerStore.on('joinedGame', () => {
      this.setState({ player: PlayerStore.get() })
    })
  }

  render(){
    return (
      <div>
        {this.state.player ? <Player player={this.state.player}/> : 'You are not playing any game at this moment'}
      </div>
    )
  }
}
