import React, {Component} from 'react'

import FlatButton from 'material-ui/FlatButton'

import Col from './Col'
import Row from './Row'

export default class Board extends Component{
  state = {}

  setCol = (col) => {
    this.setState({ col })
  }

  setRow = (row) => {
    this.setState({ row })
  }

  handleShooting = () => {
    console.log('Handle Shooting');
  }

  render(){
    const size = this.props.size || 10
    let rows = []

    for (var i = 0; i < size; i++) {
      rows.push(<Row key={`enemy-board-row-${i}`} index={i} size={size} setRow={this.setRow} setCol={this.setCol}/>);
    }

    return(
      <div>
        Col: {this.state.col} - Row: {this.state.row}
        {rows}

        <hr/>

        <FlatButton
          label="Shoot!"
          primary={true}
          keyboardFocused={true}
          onClick={this.handleShooting}
          disabled={this.state.col === undefined || this.state.row === undefined}
        />
      </div>
    )
  }
}
