import React, {Component} from 'react'

import Col from './Col'

export default class Row extends Component{

  setRow = () => {
    this.props.setRow(this.props.index)
  }

  render(){
    const index = this.props.index
    const size = this.props.size || 10

    let cols = []

    for (var i = 0; i < size; i++) {
      cols.push(<Col key={`enemy-board-row-${index}-col-${i}`} index={i} setCol={this.props.setCol}/>);
    }

    return(
      <div style={styles.row} onClick={this.setRow}>
        {cols}
      </div>
    )
  }
}

const styles = {
  row: {
    width: 20 * 10,
    display: 'block'
  }
}
