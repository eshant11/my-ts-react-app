import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserConsumer } from './UserContext'

 class ComponentB extends Component {
  render() {
    return (
      <UserConsumer>{(userName:any)=>{return(<div>ComponentB {userName}</div>)}}</UserConsumer>
    )
  }
}

export default ComponentB