const env = 'prod'

const protocol = 'http'
const domain = env == 'dev' ? 'localhost' : 'api.subvertic.com'
const port = '8080'
const api = env == 'dev' ? '/api' : ''
const version = 'v1'

export function makeEndpoint(name){
  return `${protocol}://${domain}:${port}${api}/${version}/${name}`
}
