import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import Formsy from 'formsy-react'
import { FormsyCheckbox, FormsyToggle, FormsyText } from 'formsy-material-ui/lib'

import GameStore from '../../shared/stores/GameStore'
import PlayerStore from '../../shared/stores/PlayerStore'
import * as PlayerActions from '../../shared/actions/PlayerActions'
import * as GameActions from '../../shared/actions/GameActions'

export default class List extends Component{
  state = { games: [], open: false }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  componentWillMount(){
    GameActions.fetchAllGames()

    GameStore.on('fetchedAll', () => {
      this.setState({ games: GameStore.list() })
    })

    PlayerStore.on('joinedGame', () => {
      this.setState({ open: false })
    })
  }

  handleOnGameClick = (game) => {
    this.setState({ open: true, game })
  }

  handleOnGameRefreshClick = () => {
    GameActions.fetchAllGames()
  }

  handleOnValidSubmit = (model) => {
    PlayerActions.joinGame(this.state.game.game_id, model)
  }

  handleOnInvalidSubmit = () => {
    console.log('Invalid')
  }

  render(){
    const games = this.state.games.map((game, index) => <RaisedButton key={`game-list-item-${index}`} label={`Game ID: ${game.game_id}`} disabled={game.game_status === 'GameStatus.WAITING_FOR_PLAYERS' ? false : true} onClick={this.handleOnGameClick.bind(this, game)} />)

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
    ]

    return (
      <div>
        <Dialog
          title={`Join game ID: ${this.state.game ? this.state.game.game_id : ''}`}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <Formsy.Form
            onValidSubmit={this.handleOnValidSubmit}
            onInvalidSubmit={this.handleOnInvalidSubmit}
          >
            <FormsyText
              name="nickname"
              required
              hintText="Enter a nickname"
              floatingLabelText="Nickname"
            />
            <FormsyCheckbox
              name="is_human"
              label="Are you a human?"
            />

            <FlatButton
              label="Join"
              primary={true}
              keyboardFocused={true}
              type="submit"
            />
          </Formsy.Form>
        </Dialog>

        <RaisedButton label="Refresh" onClick={this.handleOnGameRefreshClick}/>
        {!this.state.games.length ? 'No games available right now' : games}
      </div>
    )
  }
}
