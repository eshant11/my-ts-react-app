
import React, { Component } from 'react'
interface componentProps{
    count:number,
    incrementCount:()=>void
}

 class PropsClickCounter extends Component<componentProps,{}> {
constructor(props:componentProps){
    super(props)
}

  render() {
    const {count, incrementCount}=this.props
    return (
 <button onClick={incrementCount}>{count}</button>
    )
  }
}

export default PropsClickCounter