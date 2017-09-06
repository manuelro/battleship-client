import store from 'store'
import {makeEndpoint} from './config'
import TokenStore from './stores/TokenStore'

import GameStore from './stores/GameStore'
import PlayerStore from './stores/PlayerStore'

require('es6-promise').polyfill()
require('isomorphic-fetch')

export function generateRequest(params){
  //PARAMS: method, signed, endpoint, data, cb

  const method = params.method || 'GET'
  const body = JSON.stringify(params.data) || {}
  const cb = params.cb

  const headers = {
    'Content-Type': 'application/json'
  }
  if(params.signed) headers.Authorization = `JWT ${TokenStore.get()}`

  const config = {
    method,
    headers,
    mode: 'cors',
    body
  }

  // console.log('CONFIG:', endpoint, config)

  const endpoint = makeEndpoint(params.endpoint)
  const req = fetch(endpoint, config)
  .then(function(res) {
    if (res.status >= 400) {
      cb({ message: 'Server error', code: res.status }, null)
      throw new Error('Bad response from server')
    }

    return res.json()
  })
  .then(function(data) {
    cb(null, data)
  })
  .catch(function() {
    // cb({ message: 'Server error'}, null)
  })

  return req
}

export function startConcurrentLoading(){
  GameStore.fetchAllRec()
}

export function clearEverything(){
  GameStore.remove()
  PlayerStore.remove()
}

export function getToken(){
  return store.get('token') || false
}

export function storeToken(token){
  return store.set('token', token)
}

export function storeUser(user){
  return store.set('user', user)
}

export function login(data, cb){
  // Issues token request

  /*
    ENDPOINT
    POST api/v1/auth

    INPUT
    {
      "username": "user1username",
      "password": "password"
    }

    OUTPUT
    {
      "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3ODAxNjE4MTksImlhdCI6MTUwMzY4MTgxOSwibmJmIjoxNTAzNjgxODE5LCJpZGVudGl0eSI6IjUzZWExYzA0LWFmMDMtNDUzZS1iYTM1LTYxNTIxOTQxMjk5ZiJ9.s1tJpiQCOUnbwpJ4zumRdSt7b9-dHsU4n8lFQrJ-wgI"
    }
  */

  const endpoint = makeEndpoint('auth')
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: data
  })
  .then(function(res) {
    if (res.status >= 400) {
      throw new Error("Bad response from server")
    }
    return res.json()
  })
  .then(function(resData) {
    storeToken(resData)
  })
  .catch(function() {
    console.log("error")
  })
}

export function signup(data, cb){
  // Issues account creation
  // Issues login action
  // Issues token store

  /*
    ENDPOINT
    POST api/v1/account

    INPUT
    {
    	"username": "user1username",
    	"name": "user1name",
    	"last_name": "user1lastname",
    	"email": "user1email",
    	"password": "password"
    }

    OUTPUT
    {
      "details": "n/a",
      "msg": "User created successfully",
      "result": "53ea1c04-af03-453e-ba35-61521941299f"
    }
  */

  const endpoint = makeEndpoint('account')
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    body: data
  })
  .then(function(res) {
    if (res.status >= 400) {
      throw new Error("Bad response from server")
    }
    return res.json()
  })
  .then(function(resData) {
    storeUser(resData)
    login(data)
  })
  .catch(function() {
    console.log("error")
  })
}

export function createGame(config){
  // Issues a game creation
  // Games can be completed once it reaches max participants

  /*
    ENDPOINT
    POST api/v1/game

    INPUT
    {
      "mode": "2PLAYERS",
      "player_layout": [
      	"HUMAN",
      	"HUMAN"
      ]
    }

    OUTPUT
    {
      "game_status": "GameStatus.WAITING_FOR_PLAYERS",
      "id": "f4bdd096-17fd-4953-8c18-08f1536dffb4",
      "mode": "2PLAYERS",
      "moves_next": "",
      "owner": "",
      "player_layout": [
          "HUMAN",
          "HUMAN"
      ],
      "players": [],
      "timestamp": "2017-08-25 11:31:48.848389"
    }
  */
}

export function addPlayerToGame(gameId, playerConfig){
  // Adds a player top a game

  /*
    ENDPOINT
    POST api/v1/game/:gameId/player

    INPUT
    {
    	"nickname": "user1nickname",
    	"is_human": true
    }

    OUTPUT
    {
      "alive": true,
      "board_id": "618babc4-1a58-4cfd-8b6c-aca65ca6c027",
      "current_fleet_value": 72,
      "game_id": "f4bdd096-17fd-4953-8c18-08f1536dffb4",
      "is_human": true,
      "nickname": "user1nickname",
      "player_id": "407200d3-2829-4ad5-88f1-015d5fba4b69",
      "points_gained": 0,
      "user_id": "53ea1c04-af03-453e-ba35-61521941299f"
    }
  */
}

export function getPlayerBoard(gameId, playerConfig){
  // Gets the board generated for a player in a game

  /*
    ENDPOINT
    GET api/v1/board/:boardId

    INPUT
    none

    OUTPUT
    {
      "board": [ [], [], [], [], [], [], [], [], [], [] ]
    }
  */
}

export function getGameMeta(gameId){
  // Gets the game information

  /*
    ENDPOINT
    GET api/v1/game

    INPUT
    none

    OUTPUT
    {
      "game_status": "GameStatus.WAITING_FOR_PLAYERS",
      "id": "f4bdd096-17fd-4953-8c18-08f1536dffb4",
      "mode": "2PLAYERS",
      "moves_next": "407200d3-2829-4ad5-88f1-015d5fba4b69",
      "owner": "407200d3-2829-4ad5-88f1-015d5fba4b69",
      "player_layout": [
          "HUMAN"
      ],
      "players": [
          "407200d3-2829-4ad5-88f1-015d5fba4b69"
      ],
      "timestamp": "2017-08-25 11:31:48.848389"
    }
  */
}

export function checkGameCompletion(game){
  // Checks if the game is full
}

export function isMyTurnToShoot(game, playerId){
  // Check if it is my turn
}

export function getPlayerById(playerId){
  // Gets the player by ID
  // Includes the board id

  /*
    ENDPOINT
    GET api/v1/player/:playerId

    INPUT
    none

    OUTPUT
    {
      "alive": true,
      "board_id": "b0eaba72-65c2-4045-868f-30b28a9d5dea",
      "current_fleet_value": 72,
      "game_id": "f4bdd096-17fd-4953-8c18-08f1536dffb4",
      "is_human": true,
      "nickname": "user2nickname",
      "player_id": "915065e9-f1b1-43a1-a144-774df91e61db",
      "points_gained": 0,
      "user_id": "53ea1c04-af03-453e-ba35-61521941299f"
    }
  */
}

export function shootTorpedo(boardId, torpedoConfig){
  // Shoots a torpedo to a given board

  /*
    ENDPOINT
    POST api/v1/board/:boardId/torpedo

    INPUT
    none

    OUTPUT
    {
      "alive": true,
      "board_id": "b0eaba72-65c2-4045-868f-30b28a9d5dea",
      "current_fleet_value": 72,
      "game_id": "f4bdd096-17fd-4953-8c18-08f1536dffb4",
      "is_human": true,
      "nickname": "user2nickname",
      "player_id": "915065e9-f1b1-43a1-a144-774df91e61db",
      "points_gained": 0,
      "user_id": "53ea1c04-af03-453e-ba35-61521941299f"
    }
  */
}
