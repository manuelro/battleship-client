import {EventEmitter} from 'events'
import store from 'store'
import dispatcher from '../dispatcher'

import {generateRequest} from '../utils'

import * as TokenActions from '../actions/TokenActions'
import * as ErrorActions from '../actions/ErrorActions'
import * as MessageActions from '../actions/MessageActions'
import * as AccountActions from '../actions/AccountActions'

class AccountStore extends EventEmitter{
  constructor(){
    super()
    this.endpoint = 'account'
    this.name = 'Battleship.account'
  }

  signUp(data){
    const req = generateRequest({
      endpoint: 'account',
      method: 'POST',
      data,
      cb: (err, account) => {
        if(err) return ErrorActions.setError(err)
        MessageActions.setMessage(`${account.msg}. Your acount ID is: ${account.result}`)

        AccountActions.storeAccount(account)

        this.emit('signedOut')
      }
    })
  }

  signIn(data){
    const req = generateRequest({
      endpoint: 'auth',
      method: 'POST',
      data,
      cb: (err, res) => {
        if(err) return ErrorActions.setError(err)

        TokenActions.storeToken(res.access_token)

        this.emit('signedIn')
      }
    })
  }

  signOut(){
    this.emit('signingOut')

    console.log('signOut')
  }

  store(account){
    store.set(this.name, account)
  }

  remove(){
    store.remove(this.name)
  }

  action(action){
    switch (action.type) {
      case 'ACCOUNT_SIGN_UP':
        this.signUp(action.data)
        break
      case 'ACCOUNT_SIGN_IN':
        this.signIn(action.data)
        break
      case 'ACCOUNT_SIGN_OUT':
        this.signOut()
        break
      case 'ACCOUNT_STORE':
        this.store(action.account)
        break
      case 'ACCOUNT_REMOVE':
        this.remove()
        break
      default:
    }
  }
}

const accountStore = new AccountStore
dispatcher.register(accountStore.action.bind(accountStore))

export default accountStore
