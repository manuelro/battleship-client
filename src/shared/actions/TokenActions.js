import dispatcher from '../dispatcher'

export function storeToken(token){
  dispatcher.dispatch({
    type: 'TOKEN_STORE',
    token
  })
}

export function removeToken(){
  dispatcher.dispatch({
    type: 'TOKEN_REMOVE'
  })
}
