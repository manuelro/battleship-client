import dispatcher from '../dispatcher'

export function fecthEnemy(enemyId){
  dispatcher.dispatch({
    type: 'ENEMY_FETCH',
    enemyId
  })
}
