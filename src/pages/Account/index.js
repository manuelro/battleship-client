import React, {Component} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

import SignIn from './SignIn'
import SignUp from './SignUp'

export default class Account extends Component{
  render(){
    return (
      <Tabs>
        <Tab label="Sign In">
          <SignIn/>
        </Tab>

        <Tab label="Sign Up">
          <SignUp/>
        </Tab>
      </Tabs>
    )
  }
}
