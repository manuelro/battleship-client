import React, {Component} from 'react'
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import FormsyToggle from 'formsy-material-ui/lib/FormsyToggle'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle'

import {login, signup, setToken} from '../shared/utils'

export default class SignUp extends Component{
  handleOnValid = (model) => {}
  handleOnInvalid = () => {}
  handleOnValidSubmit = (model) => {
    const loginCallback = (err, res) => {
      if(err) return this.setState('error', err)
      setToken(res.access_token)
    }

    const sigupCallback = (err, res) => {
      if(err) return this.setState('error', err)
      setToken(res.access_token)
    }

    model.login ? login(model, loginCallback) : signup(model, sigupCallback)
  }

  render(){
    return (
      <Formsy.Form style={styles.container} onValidSubmit={this.handleOnValidSubmit} onValid={this.handleOnValid} onInvalid={this.handleOnInvalid}>
        <FormsyText
          name="username"
          required
          hintText="Username"
          floatingLabelText="Username"
          style={styles.textField}
        />

        <FormsyText
          name="password"
          type="password"
          required
          hintText="Password"
          floatingLabelText="Password"
          style={styles.textField}
        />

        <FormsyToggle
          name="login"
          label="Login"
          style={styles.toggle}
        />

        <RaisedButton label="Submit" type="submit"/>
      </Formsy.Form>
    )
  }
}


const styles = {
  container: {
    float: 'left',
    width: '400px',
    textAlign: 'left',
    padding: '1em',
  },
  textField: {
    width: '100%',
  },
  toggle: {
    float: 'left',
    width: '100px'
  }
}
