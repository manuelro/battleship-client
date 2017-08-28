import {EventEmitter} from 'events'
import store from 'store'
import dispatcher from '../dispatcher'

import {generateRequest} from '../utils'

import * as PlayerActions from '../actions/PlayerActions'
import * as ErrorActions from '../actions/ErrorActions'
import * as MessageActions from '../actions/MessageActions'

class PlayerStore extends EventEmitter{
  constructor(){
    super()
    this.name = 'Battleship.player'
    this.state = {}
  }

  join(gameId, data){
    const req = generateRequest({
      endpoint: `game/${gameId}/player`,
      method: 'POST',
      data,
      signed: true,
      cb: (err, player) => {
        if(err) return ErrorActions.setError(err)

        store.set(this.name, player)

        this.emit('joinedGame')
      }
    })
  }

  fetch(playerId){
    const req = generateRequest({
      endpoint: `player/${playerId}`,
      method: 'GET',
      signed: true,
      cb: (err, player) => {
        if(err) return ErrorActions.setError(err)

        this.state.player = player

        this.emit('fetched')
      }
    })
  }

  get(){
    return store.get(this.name)
  }

  action(action){
    switch (action.type) {
      case 'PLAYER_JOIN_GAME':
        this.join(action.gameId, action.data)
        break
      default:
    }
  }
}

const playerStore = new PlayerStore
dispatcher.register(playerStore.action.bind(playerStore))

export default playerStore
