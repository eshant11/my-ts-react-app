import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

interface greet {
  message: string;
}
  class ParentComponent extends Component<any,greet> {
    constructor(props:any){
        super(props);
this.state={
    message:"Hello!! Good Morning"
}
        this.greeting=this.greeting.bind(this)
    }
    greeting(name:string){
        alert(`${this.state.message} ${name}`)
    }
  render() {
    return (
      <><ChildComponent greeting={this.greeting}/></>
    )
  }
}

export default ParentComponent