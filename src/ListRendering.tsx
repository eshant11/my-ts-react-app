import React, { Component } from 'react'
interface state{
    studentList:string[]
}

export class ListRendering extends Component<{},state> {
constructor(props:{}){
super(props);
this.state={
    studentList:["Eshant","Mishra","Sarthak"]
}

}
  render() {
    return(
  <div>
    {/* List rendering */}
     {this.state.studentList.map((item)=>
     <div>{item}</div>
     )}
  </div>
    )
  }
}

