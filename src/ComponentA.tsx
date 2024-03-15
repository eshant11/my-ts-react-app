import React, { Component } from 'react'
import ComponentC from './ComponentC';
import ComponentB from './ComponentB';

 class ComponentA extends Component {

  render() {
    return (
      <div>
        <ComponentC/>
      <ComponentB/>
      </div>
    )
  }
}

export default ComponentA;