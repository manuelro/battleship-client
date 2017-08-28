import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class MessageStore extends EventEmitter{
  constructor(){
    super();
    this.message = null
  }

  set(message){
    this.message = message
    this.emit('set')
  }

  unset(){
    this.message = null
    this.emit('unset')
  }

  get(message){
    return this.message
  }

  action(action){
    switch (action.type) {
      case 'MESSAGE_SET':
        this.set(action.message)
        break
      case 'MESSAGE_UNSET':
        this.unset()
        break
      default:
    }
  }
}

const messageStore = new MessageStore
dispatcher.register(messageStore.action.bind(messageStore))

export default messageStore
