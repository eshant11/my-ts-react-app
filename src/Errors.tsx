import { Component } from 'react'

 class Errors extends Component<{name:string}> {
    constructor(props:{name:string}) {
      super(props); 
      if(this.props.name=="Aditya"){
          throw new Error("not a name")
      }
    }
  render() {
    
        return  <h1>{this.props.name}</h1>
    
 
    
  }
}

export default Errors