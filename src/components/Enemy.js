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

import Board from './Enemy/Board'

import Formsy from 'formsy-react'
import { FormsyCheckbox, FormsyToggle, FormsyText } from 'formsy-material-ui/lib'

export default class Enemy extends Component{
  state = { open: false }

  handleShootAttempt = () => {
    console.log('Shooting')
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

          <Board setCoords={this.setCoords}/>
        </Dialog>

        <ListItem
          primaryText={this.props.playerId}
          leftIcon={this.props.playerId == this.props.player.player_id ? <ImageAdjust color={blueGrey500}/> : <EditorInsertEmoticon color={brown800}/>}
          rightAvatar={<Avatar backgroundColor={transparent} color={deepPurple800} icon={this.props.playerId !== this.props.player.player_id ? <DeviceGpsFixed onClick={this.handleOpen} /> : null} />}
        />
      </div>
    )
  }
}
