import dispatcher from '../dispatcher'

export function fetchBoard(boardId){
  dispatcher.dispatch({
    type: 'BOARD_FETCH',
    boardId
  })
}
