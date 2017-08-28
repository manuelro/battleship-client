import React, {Component} from 'react'

import Col from './Col'

export default class Row extends Component{
  render(){
    const cols = this.props.row.map((col, index) => <Col key={`board-col-${index}`} col={col}/>)

    return(
      <div style={styles.row}>{cols}</div>
    )
  }
}

const styles = {
  row: {
    width: '20em',
  }
}
