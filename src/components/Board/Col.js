import React, {Component} from 'react'

import {ships} from '../../shared/config'

export default class Col extends Component{
  render(){
    return(
      <div style={styles.col}>{this.props.col}</div>
    )
  }
}

const styles = {
  col: {
    width: '2em',
    lineHeight: '2em',
    backgroundColor: 'silver',
    color: 'white',
    float: 'left',
    border: 'solid 1px white',
    boxSizing: 'border-box',
    textAlign: 'center'
  }
}
