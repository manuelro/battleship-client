import dispatcher from '../dispatcher'

export function joinGame(gameId, data){
  dispatcher.dispatch({
    type: 'PLAYER_JOIN_GAME',
    gameId,
    data
  })
}

export function removePlayer(){
  dispatcher.dispatch({
    type: 'PLAYER_REMOVE'
  })
}
