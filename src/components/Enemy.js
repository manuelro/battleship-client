import React, {Component} from 'react'

import {ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import {blueGrey500, deepPurple800, transparent} from 'material-ui/styles/colors'
import ImageAdjust from 'material-ui/svg-icons/image/adjust'
import DeviceGpsFixed from 'material-ui/svg-icons/device/gps-fixed'

import EditorInsertEmoticon from 'material-ui/svg-icons/editor/insert-emoticon'

export default class Enemy extends Component{
  render(){
    return(
      <ListItem
        primaryText={this.props.playerId}
        leftIcon={this.props.playerId == this.props.player.player_id ? <ImageAdjust color={blueGrey500}/> : <EditorInsertEmoticon color={blueGrey500}/>}
        rightAvatar={<Avatar backgroundColor={transparent} color={deepPurple800} icon={this.props.playerId !== this.props.player.player_id ? <DeviceGpsFixed /> : null} />}
      />
    )
  }
}
