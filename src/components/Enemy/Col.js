import React, {Component} from 'react'

export default class Col extends Component{
  setCol = () => {
    this.props.setCol(this.props.index)
  }

  render(){
    return(
      <div style={styles.col} onClick={this.setCol}></div>
    )
  }
}

const size = 20
const styles = {
  col: {
    width: size,
    height: size,
    display: 'block',
    'float': 'left',
    backgroundColor: 'silver',
    border: 'solid 1px white',
    boxSizing: 'border-box',
  }
}
