import React, { Component,ReactNode } from 'react'

 class ClassClick extends Component {
  clickHandler ():void{
console.log("Button is clicked");

  }
 
  
  render():ReactNode {
    return (
      <div><button onClick={this.clickHandler}>click me</button></div>
    )
  }
}

export default ClassClick;