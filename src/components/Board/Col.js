import React, {Component} from 'react'

import {ships} from '../../shared/config'

const baseStyles = {
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

export default class Col extends Component{
  generateStyles = () => {
    const styles = {...baseStyles}

    switch (this.props.col) {
      case 2:
        styles.col.backgroundColor = ships['2'].color
        break
      case 3:
        styles.col.backgroundColor = ships['3'].color
        break
      case 4:
        styles.col.backgroundColor = ships['4'].color
        break
      case 7:
        styles.col.backgroundColor = ships['7'].color
        break
      default:
        styles.col.backgroundColor = 'silver'
    }

    return styles
  }

  render(){
    const styles = this.generateStyles()

    return(
      <div style={styles.col}>{this.props.col}</div>
    )
  }
}
