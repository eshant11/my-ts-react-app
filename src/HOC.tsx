import React, { Component } from 'react'

const HOC =(OriginalComponent:any)=>{
 class NewComponent extends Component<any, {count:number}> {
    constructor(props: any) {
        super(props)

        this.state = {
            count: 0
        }
        this.countHandler=this.countHandler.bind(this);
    }
    countHandler() {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
  render() {
    return (
    <OriginalComponent count={this.state.count} countHandler={this.countHandler}/>
    )
  }
}
return NewComponent;
}

export default HOC;