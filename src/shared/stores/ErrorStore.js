import {EventEmitter} from 'events'
import dispatcher from '../dispatcher'

class ErrorStore extends EventEmitter{
  constructor(){
    super();
    this.error = null
  }

  set(error){
    this.error = error
    this.emit('set')
  }

  unset(){
    this.error = null
    this.emit('unset')
  }

  get(error){
    return this.error
  }

  action(action){
    switch (action.type) {
      case 'ERROR_SET':
        this.set(action.error)
        break
      case 'ERROR_UNSET':
        this.unset()
        break
      default:
    }
  }
}

const errorStore = new ErrorStore
dispatcher.register(errorStore.action.bind(errorStore))

export default errorStore
