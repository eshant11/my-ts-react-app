import React, { Component } from 'react'

interface State{
    message:string,
}
 class EventBinding extends Component<{},State> {
constructor(props:any){
    super(props);
    this.state={
message:"Good Morning!!!!!!!!!"
    }
    // when don't want to use arrow function
    // this.changeMessage=this.changeMessage.bind(this)
}
// changeMessage (){
//     this.setState({message:"Good Evening!!!!!!!!!"})
// }
changeMessage =()=>{
    this.setState({message:"Good Evening!!!!!!!!!"})
}
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* when u use.bind(this) method */}
        {/* <button onClick={this.changeMessage}>Change message</button> */}
        
        {/* when u use arrow function  method  here*/}
        {/* <button onClick={()=>this.changeMessage()}>Change message</button> */}

        {/* when u use arrow function  method  */}
        <button onClick={this.changeMessage}>Change message</button>
        </div>
    )
  }
}

export default EventBinding;