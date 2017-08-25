import React, {Component} from 'react'
import Formsy from 'formsy-react'
import FormsyText from 'formsy-material-ui/lib/FormsyText'
import FormsyToggle from 'formsy-material-ui/lib/FormsyToggle'
import RaisedButton from 'material-ui/RaisedButton'
import Toggle from 'material-ui/Toggle'

import {login, signup} from '../shared/utils'

export default class Login extends Component{
  state = {}

  handleOnValid = (model) => {}
  handleOnInvalid = () => {}
  handleOnValidSubmit = (model) => {
    const loginCallback = (err, res) => {
      if(err) return this.setState('error', err)
    }

    const sigupCallback = (err, res) => {
      if(err) return this.setState('error', err)
    }

    const jsonModel = JSON.stringify(model)

    model.login ? login(jsonModel, loginCallback) : signup(jsonModel, sigupCallback)
  }

  handleOnToggle = (ev, isLogin) => {
    this.setState({ isLogin })
  }

  render(){
    return (
      <Formsy.Form style={styles.container} onValidSubmit={this.handleOnValidSubmit} onValid={this.handleOnValid} onInvalid={this.handleOnInvalid}>
        <FormsyText
          name="username"
          required
          floatingLabelText="Username"
          style={styles.textField}
        />

        <FormsyText
          name="password"
          type="password"
          required
          floatingLabelText="Password"
          style={styles.textField}
        />

        {!this.state.isLogin ?
          <div>
            <FormsyText
              name="name"
              required
              floatingLabelText="Name"
              style={styles.textField}
            />

            <FormsyText
              name="last_name"
              required
              floatingLabelText="Last Name"
              style={styles.textField}
            />

            <FormsyText
              name="email"
              required
              floatingLabelText="Email"
              style={styles.textField}
            />
          </div> : null}

          <FormsyToggle
            name="isLogin"
            label={this.state.isLogin ? "Login" : "Sign Up"}
            style={styles.toggle}
            onChange={this.handleOnToggle}
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
