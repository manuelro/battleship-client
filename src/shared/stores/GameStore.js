import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class GameStore extends EventEmitter{
  constructor(){
    super()
    this.games = ['one', 'two', 'three']
  }

  list(){
    return this.games
  }

  action(action){
    switch (action.type) {
      case 'GAME_CREATE':
        console.log('Created a game')
        break
      default:
    }
  }
}

const gameStore = new GameStore
dispatcher.register(gameStore.action.bind(gameStore))

export default gameStore
