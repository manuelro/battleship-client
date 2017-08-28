import React, {Component} from 'react'

import Board from './Board'
import GameDashboard from './GameDashboard'

import GameStore from '../shared/stores/GameStore'
import * as GameActions from '../shared/actions/GameActions'

export default class Player extends Component{
  state = {}

  componentWillMount(){
    GameActions.fetchGameRec(this.props.player.game_id)

    GameStore.on('fetchedRec', () => {
      this.setState({ game: GameStore.get() })
    })
  }

  render(){
    return(
      <div>
        <div style={styles.col}>
          <code>Game ID: {this.props.player.game_id}</code>
          <br/>
          <code>Player ID: {this.props.player.player_id}</code>
          <Board id={this.props.player.board_id}/>
        </div>

        {
          this.state.game && this.state.game.player_layout.length
          ? <div style={styles.col}>Waiting for other users to join</div>
          : <div style={styles.col}><GameDashboard player={this.props.player} game={this.state.game}/></div>
        }

      </div>
    )
  }
}

const styles = {
  col: {
    width: '40%',
    display: 'block',
    overflow: 'hidden',
    float: 'left',
    padding: '5%'
  }
}
