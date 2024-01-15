import React, { Component } from 'react'
interface methodProps{
    greeting:(name:string)=>void
}
 class ChildComponent extends Component <methodProps>{
   

  render() {
    return (
      <div><button onClick={()=>{this.props.greeting("eshant")}}>Greet</button></div>
    )
  }
}

export default ChildComponent