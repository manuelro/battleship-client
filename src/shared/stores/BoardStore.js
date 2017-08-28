import {EventEmitter} from 'events'
import store from 'store'
import dispatcher from '../dispatcher'

import {generateRequest} from '../utils'

import * as BoardActions from '../actions/BoardActions'
import * as ErrorActions from '../actions/ErrorActions'
import * as MessageActions from '../actions/MessageActions'

class BoardStore extends EventEmitter{
  constructor(){
    super()
    this.name = 'Battleship.board'
    this.state = {}
  }

  fetch(boardId){

    const req = generateRequest({
      endpoint: `board/${boardId}`,
      method: 'GET',
      signed: true,
      cb: (err, board) => {
        if(err) return ErrorActions.setError(err)

        this.state.board = board

        this.emit('fetched')
      }
    })

  }

  get(){
    return this.state.board
  }

  action(action){
    switch (action.type) {
      case 'BOARD_FETCH':
        this.fetch(action.boardId)
        break
      default:
    }
  }
}

const playerStore = new BoardStore
dispatcher.register(playerStore.action.bind(playerStore))

export default playerStore
