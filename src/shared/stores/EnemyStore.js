import {EventEmitter} from 'events'
import store from 'store'
import dispatcher from '../dispatcher'

import {generateRequest} from '../utils'

import * as EnemyActions from '../actions/EnemyActions'
import * as ErrorActions from '../actions/ErrorActions'
import * as MessageActions from '../actions/MessageActions'

class EnemyStore extends EventEmitter{
  constructor(){
    super()
    this.state = {}
  }

  fetch(enemyId){
    const req = generateRequest({
      endpoint: `player/${enemyId}`,
      method: 'GET',
      signed: true,
      cb: (err, player) => {
        if(err) return ErrorActions.setError(err)
        this.emit('fetched', player)
      }
    })
  }

  action(action){
    switch (action.type) {
      case 'ENEMY_FETCH':
        this.fetch(action.enemyId)
        break
      default:
    }
  }
}

const enemyStore = new EnemyStore
dispatcher.register(enemyStore.action.bind(enemyStore))

export default enemyStore
