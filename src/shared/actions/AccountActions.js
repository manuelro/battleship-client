import dispatcher from '../dispatcher'

export function signUp(data){
  dispatcher.dispatch({
    type: 'ACCOUNT_SIGN_UP',
    data
  })
}

export function signIn(data){
  dispatcher.dispatch({
    type: 'ACCOUNT_SIGN_IN',
    data
  })
}

export function signOut(){
  dispatcher.dispatch({
    type: 'ACCOUNT_SIGN_OUT'
  })
}

export function storeAccount(account){
  dispatcher.dispatch({
    type: 'ACCOUNT_STORE',
    account
  })
}
