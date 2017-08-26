import {EventEmitter} from 'events'
import store from 'store'
import dispatcher from '../dispatcher'

class TokenStore extends EventEmitter{
  constructor(){
    super()
    this.name = 'Battleship.token'
  }

  store(token){
    store.set(this.name, token)
    this.emit('stored')
  }

  get(){
    return store.get(this.name)
  }

  remove(){
    store.remove(this.name)
    this.emit('removed')
  }

  action(action){
    switch (action.type) {
      case 'TOKEN_STORE':
        this.store(action.token)
        break
      case 'TOKEN_REMOVE':
        this.remove()
        break
      default:
    }
  }
}

const tokenStore = new TokenStore
dispatcher.register(tokenStore.action.bind(tokenStore))

export default tokenStore
