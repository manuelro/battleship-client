import React, {Component} from 'react'

import BoardStore from '../shared/stores/BoardStore'
import * as BoardActions from '../shared/actions/BoardActions'

import Row from './Board/Row'

export default class Board extends Component{
  state = { board: { board: [] } }

  constructor(){
    super()
  }

  componentWillMount(){
    BoardActions.fetchBoard(this.props.id)

    BoardStore.on('fetched', () => {
      this.setState({ board: BoardStore.get() })
    })
  }

  render(){
    const rows = this.state.board.board.map((row, index) => <Row key={`board-row-${index}`} row={row} />)

    return(
      <div>
        <code>Board ID: {this.state.board.board_id ? this.state.board.board_id : 'loading'}</code>
        <br/>

        <h5>Your board</h5>

        {rows}

      </div>
    )
  }
}
