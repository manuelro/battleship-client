import React, {Component} from 'react'
import Formsy from 'formsy-react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

import * as config from '../../shared/config'
import * as GameActions from '../../shared/actions/GameActions'

import Player from './Create/Player'

function generatePlayers(size){
  const result = []
  for (var i = 0; i < size; i++) {
    result.push(<Player key={`player-${i}`} index={i} updateLayout={this.updateLayout.bind(this)} layout={this.state.layout}/>)
  }

  return result
}

function isLayoutComplete(layout, size){
  let isComplete = true

  if(!layout.length){
    isComplete = false
  } else {
    for (let item of layout) {
      if(!item || layout.length < size) isComplete = false
    }
  }

  return isComplete
}

function createGame(){
  const config = {
    mode: `${this.state.size}PLAYERS`,
    player_layout: this.state.layout
  }

  GameActions.createGame(config)
}

export default class Create extends Component{
  state = { size: null, layout: [] }

  handleOnValidSubmit = () => {}
  handleOnInvalidSubmit = () => {}

  updateLayout = (index, value) => {
    const layout = this.state.layout
    layout[index] = value
    this.setState({ layout })
  }

  handleOnSizeChange = (a, b, value) => {
    this.setState({ size: value, layout: [] })
  }

  componentWillMount(){}

  render(){
    const sizes = config.gameSizes.map((size, index) => <MenuItem key={index} value={size.value} primaryText={size.name} />)
    var players = generatePlayers.call(this, this.state.size)

    return (
      <div>
        <h2>Create game</h2>
        <SelectField
          floatingLabelText="Game room size"
          value={this.state.size}
          onChange={this.handleOnSizeChange}
        >
          {sizes}
        </SelectField>
        {players.length ? <h3>Set up player types</h3> : null}
        <div>{isLayoutComplete(this.state.layout, this.state.size) ? `${this.state.layout.join(' - ').toLowerCase()}` : 'Layout is incomplete'}</div>
        {players}

        {isLayoutComplete(this.state.layout, this.state.size)
          ? <RaisedButton label="Create" onClick={createGame.bind(this)}/>
          : null}

      </div>
    )
  }
}
