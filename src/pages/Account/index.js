import React, {Component} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'

export default class Account extends Component{
  render(){
    return (
      <Tabs>
        <Tab label="Sign In">
          Sign In
        </Tab>

        <Tab label="Sign Up">
          Sign Up
        </Tab>
      </Tabs>
    )
  }
}
