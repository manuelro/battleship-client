const env = 'dev'

const protocol = 'http'
const domain = env == 'dev' ? 'localhost' : 'api.subvertic.com'
const port = '8080'
const version = 'v1'

export function makeEndpoint(name){
  return env === 'dev'
    ? `/api/${version}/${name}`
    : `${protocol}://${domain}:${port}/${version}/${name}`
}

// GAME SIZES
class GameSize {
  constructor(name, value){
    this.name = name
    this.value = value
  }
}
export var gameSizes = [
  new GameSize('Two', 2),
  new GameSize('Three', 3),
  new GameSize('Four', 4)
]

// PLAYER TYPES
class PlayerType {
  constructor(name, value){
    this.name = name
    this.value = value
  }
}
export var playerTypes = [
  new PlayerType('Human', 'HUMAN'),
  new PlayerType('Machine', 'MACHINE')
]


class Ship {
  constructor(name, id, color){
    this.name = name
    this.id = id
    this.color = color
  }
}
export var ships = {
  '0': new Ship('Empty', 0, 'silver'),
  '2': new Ship('Fragata', 2, '#673AB7'),
  '3': new Ship('Acorazado', 3, '#2196F3'),
  '4': new Ship('Destructor', 4, '#3F51B5'),
  '7': new Ship('Portaaviones', 7, '#8BC34A')
}
