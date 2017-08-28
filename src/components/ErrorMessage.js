import React, {Component} from 'react'

import ErrorStore from '../shared/stores/ErrorStore'

export default class ErrorMessage extends Component{
  state = {}

  componentWillMount(){
    ErrorStore.on('set', () => {
      this.setState({ error: ErrorStore.get() })
    })

    ErrorStore.on('unset', () => {
      this.setState({ error: null })
    })
  }

  render(){
    return(
      <div style={styles.error}>
        {this.state.error ? this.state.error.message : '' }
      </div>
    )
  }
}

const styles = {
  error: {
    color: 'red',
    padding: '1em'
  }
}
