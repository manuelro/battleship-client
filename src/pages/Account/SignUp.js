import React, {Component} from 'react'
import Formsy from 'formsy-react'
import { FormsyText } from 'formsy-material-ui/lib'
import RaisedButton from 'material-ui/RaisedButton'

import * as AccountStore from '../../shared/stores/AccountStore'
import * as AccountActions from '../../shared/actions/AccountActions'
import * as ErrorActions from '../../shared/actions/ErrorActions'
import * as MessageActions from '../../shared/actions/MessageActions'

export default class SignIn extends Component{
  handleOnValidSubmit = (model) => {
    AccountActions.signUp(model)
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

        <FormsyText
          name="name"
          hintText="Your name"
          floatingLabelText="Name"
          onChange={this.handleOnChange}
        />

        <FormsyText
          name="last_name"
          hintText="Your last name"
          floatingLabelText="Last name"
          onChange={this.handleOnChange}
        />

        <FormsyText
          name="email"
          hintText="Your email address"
          floatingLabelText="Email"
          onChange={this.handleOnChange}
        />

        <RaisedButton type="submit" label="Sign Up"/>
      </Formsy.Form>
    )
  }
}
