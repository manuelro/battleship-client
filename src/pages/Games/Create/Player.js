import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import * as config from '../../../shared/config'

export default class Player extends Component{
  handleOnPlayerTypeChange = (a, b, value) => {
    this.props.updateLayout(this.props.index, value)
  }

  render(){
    const types = config.playerTypes.map((type, index) => <MenuItem key={`player-type-${index}`} value={type.value} primaryText={type.name} />)

    return(
      <div>
        <SelectField
          floatingLabelText="Player type"
          value={this.props.layout[this.props.index]}
          onChange={this.handleOnPlayerTypeChange}
        >
        {types}
        </SelectField>
      </div>
    )
  }
}
