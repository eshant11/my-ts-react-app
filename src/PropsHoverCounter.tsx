
import React, { Component } from 'react'
interface componentProps{
    count:number,
    incrementCount:()=>void
}

 class PropsHoverCounter extends Component<componentProps,{}> {
constructor(props:componentProps){
    super(props)
}

  render() {
    const {count, incrementCount}=this.props
    return (
 <button onMouseOver={incrementCount}>{count} Hover</button>
    )
  }
}

export default PropsHoverCounter;