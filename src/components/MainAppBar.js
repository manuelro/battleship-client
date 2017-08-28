import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import * as TokenActions from '../shared/actions/TokenActions'

class Logged extends Component{
  handleSignOutClick = () => {
    TokenActions.removeToken()
  }

  render(){
    return(
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Sign out" onClick={this.handleSignOutClick} />
      </IconMenu>
    )
  }
}

Logged.muiName = 'IconMenu';

export default class MainAppBar extends Component {
  render() {
    return (
      <AppBar
        title="Battleship Game"
        iconElementRight={<Logged />}
      />
    );
  }
}
