import React, {Component} from 'react'

import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import {blueGrey500, brown800, deepPurple800, transparent} from 'material-ui/styles/colors'
import ImageAdjust from 'material-ui/svg-icons/image/adjust'
import DeviceGpsFixed from 'material-ui/svg-icons/device/gps-fixed'
import EditorInsertEmoticon from 'material-ui/svg-icons/editor/insert-emoticon'

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'


import Formsy from 'formsy-react'
import { FormsyCheckbox, FormsyToggle, FormsyText } from 'formsy-material-ui/lib'

import Board from './Enemy/Board'
import EnemyStore from '../shared/stores/EnemyStore'
import * as EnemyActions from '../shared/actions/EnemyActions'

function fetchEnemyRec(){
  const interval = setTimeout(() => {
    EnemyStore.fetch(this.props.playerId)
    clearTimeout(interval);
    fetchEnemyRec.call(this);
  }, 1000)
}

export default class Enemy extends Component{
  state = { open: false, enemy: {} }

  componentWillMount(){
    fetchEnemyRec.call(this);

    EnemyStore.on('fetched', (enemy) => {
      if(enemy.player_id === this.props.playerId) this.setState({ enemy })
    })
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  setCoords = (x, y) => {
    this.setState({ coords: { x, y } })
  }

  handleShooting = () => {
    console.log('Shooting');
  }

  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
    ]

    return(
      <div>
        <Dialog
          title={'Direct your misile'}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <code>Board: {this.state.enemy.board_id}</code>
          <br/>
          <Board setCoords={this.setCoords} enemy={this.state.enemy}/>
        </Dialog>

        <ListItem
          primaryText={this.state.enemy.nickname || 'loading...'}
          secondaryText={this.state.enemy.current_fleet_value ? `Value: ${this.state.enemy.current_fleet_value} - Points: ${this.state.enemy.points_gained}` : ''}
          leftIcon={this.props.playerId == this.props.player.player_id ? <ImageAdjust color={blueGrey500}/> : <EditorInsertEmoticon color={brown800}/>}
          rightAvatar={<Avatar backgroundColor={transparent} color={deepPurple800} icon={this.props.playerId !== this.props.player.player_id ? <DeviceGpsFixed onClick={this.handleOpen} /> : null} />}
        />
      </div>
    )
  }
}
