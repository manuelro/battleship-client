import dispatcher from '../dispatcher'

export function setError(error){
  dispatcher.dispatch({
    type: 'ERROR_SET',
    error
  })
}

export function unsetError(){
  dispatcher.dispatch({
    type: 'ERROR_UNSET',
  })
}
