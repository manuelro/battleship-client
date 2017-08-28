import React, {Component} from 'react'

import MessageStore from '../shared/stores/MessageStore'

export default class Message extends Component{
  state = {}

  componentWillMount(){
    MessageStore.on('set', () => {
      this.setState({ message: MessageStore.get() })
    })

    MessageStore.on('unset', () => {
      this.setState({ message: null })
    })
  }

  render(){
    return(
      <div style={styles.message}>
        {this.state.message ? this.state.message : '' }
      </div>
    )
  }
}

const styles = {
  message: {
    color: 'green',
    padding: '1em'
  }
}
