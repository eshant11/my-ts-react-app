import React, { PureComponent } from 'react'

 class PureComp extends PureComponent<{name:string}> {
  constructor(props:{name:string}){
    super(props)
  }
  render() {
    console.log("******PurComponent******")

    return (
      <div>Pure Component {this.props.name}</div>
    )
  }
}

export default PureComp;