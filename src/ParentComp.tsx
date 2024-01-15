import React, { Component, PureComponent } from 'react'
import RegComponent from './RegComponent';
import PureComp from './PureComp';
import FunctionalPureComp from './FunctionalPureComp';

 class ParentComp extends Component<{},{name:string}> {
  constructor(props:any) {
    super(props)
  
    this.state = {
       name:"Eshant"
    }
  }

  componentDidMount(){
      setInterval(()=>{
        this.setState({name:"Mishra"})
      },2000);
  }
    render() {
        console.log("***************ParentComponent****************")

    return (
      <div>Parent Comp
{/* Functional Pure Component */}
<FunctionalPureComp name={this.state.name}/>
        {/* <RegComponent name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp