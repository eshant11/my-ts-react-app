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
    // props passed in clicked counter shown here
    // console.log(this.props.name);
    
    return (
    <OriginalComponent count={this.state.count} countHandler={this.countHandler} {...this.props}/>
    )
  }
}
return NewComponent;
}

export default HOC;