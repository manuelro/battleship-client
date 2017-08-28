import {EventEmitter} from 'events'
import store from 'store'
import dispatcher from '../dispatcher'

import {generateRequest} from '../utils'

import * as GameActions from '../actions/GameActions'
import * as ErrorActions from '../actions/ErrorActions'
import * as MessageActions from '../actions/MessageActions'

class GameStore extends EventEmitter{
  constructor(){
    super()
    this.name = 'Battleship.game'
    this.state = {}
  }

  create(data){
    const req = generateRequest({
      endpoint: 'game',
      method: 'POST',
      data,
      signed: true,
      cb: (err, game) => {
        if(err) return ErrorActions.setError(err)
        this.emit('created')
      }
    })
  }

  fetchAll(){
    const req = generateRequest({
      endpoint: 'game',
      method: 'GET',
      signed: true,
      cb: (err, games) => {
        if(err) return ErrorActions.setError(err)

        this.state.games = games

        this.emit('fetchedAll')
      }
    })
  }

  list(){
    return this.state.games
  }

  get(){
    return store.get(this.name)
  }

  store(game){
    store.set(this.name, game)
    this.emit('stored')
  }

  remove(){
    store.remove(this.name)
    this.emit('removed')
  }

  action(action){
    switch (action.type) {
      case 'GAME_CREATE':
        this.create(action.data)
        break
      case 'GAME_FETCH_ALL':
        this.fetchAll()
        break
      case 'GAME_STORE':
        this.store(action.game)
        break
      case 'GAME_REMOVE':
        this.remove()
        break
      default:
    }
  }
}

const gameStore = new GameStore
dispatcher.register(gameStore.action.bind(gameStore))

export default gameStore
