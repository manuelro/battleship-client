import React, {Component} from 'react'
import Formsy from 'formsy-react'
import { FormsyText } from 'formsy-material-ui/lib'
import RaisedButton from 'material-ui/RaisedButton'

import * as AccountActions from '../../shared/actions/AccountActions'
import * as ErrorActions from '../../shared/actions/ErrorActions'
import * as MessageActions from '../../shared/actions/MessageActions'

export default class SignIn extends Component{
  handleOnValidSubmit = (model) => {
    AccountActions.signIn(model)
  }
  handleOnInvalidSubmit = () => {}

  handleOnChange = () => {
    ErrorActions.unsetError()
    MessageActions.unsetMessage()
  }

  render(){
    return (
      <Formsy.Form
        onValidSubmit={this.handleOnValidSubmit}
        onInvalidSubmit={this.handleOnInvalidSubmit}
      >
        <FormsyText
          name="username"
          hintText="Your username"
          floatingLabelText="Username"
          onChange={this.handleOnChange}
        />

        <FormsyText
          name="password"
          hintText="Your password"
          floatingLabelText="Password"
          onChange={this.handleOnChange}
        />

        <RaisedButton type="submit" label="Sign In"/>
      </Formsy.Form>
    )
  }
}
