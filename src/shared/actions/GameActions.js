import dispatcher from '../dispatcher'

export function signUp(data){
  dispatcher.dispatch({
    type: 'GAME_SIGN_UP',
    data
  })
}

export function signIn(data){
  dispatcher.dispatch({
    type: 'GAME_SIGN_IN',
    data
  })
}

export function signOut(){
  dispatcher.dispatch({
    type: 'GAME_SIGN_OUT'
  })
}

export function createGame(data){
  dispatcher.dispatch({
    type: 'GAME_CREATE',
    data
  })
}

export function storeGame(game){
  dispatcher.dispatch({
    type: 'GAME_STORE',
    game
  })
}

export function removeGame(){
  dispatcher.dispatch({
    type: 'GAME_REMOVE'
  })
}

export function fetchAllGames(){
  dispatcher.dispatch({
    type: 'GAME_FETCH_ALL'
  })
}
