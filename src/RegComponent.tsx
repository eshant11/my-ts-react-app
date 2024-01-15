import React, { Component } from 'react'

 class RegComponent extends Component<{name:string}> {
  constructor(props:{name:string}) {
    super(props) 
  }

  render() {
    console.log("******RegComponent******")
    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

export default RegComponent;