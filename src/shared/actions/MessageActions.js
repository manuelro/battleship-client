import dispatcher from '../dispatcher'

export function setMessage(message){
  dispatcher.dispatch({
    type: 'MESSAGE_SET',
    message
  })
}

export function unsetMessage(){
  dispatcher.dispatch({
    type: 'MESSAGE_UNSET',
  })
}
