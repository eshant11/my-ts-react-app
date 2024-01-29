import PropTypes from 'prop-types'
import React, { Component } from 'react'
interface Props {
    render: (count: number, incrementCount: () => void) => JSX.Element;
  }
 class PropsCounter extends Component<Props,{count:number}> {
    constructor(props:Props){
        super(props)
        this.state = {
    count:0
        }
        this.incrementCount=this.incrementCount.bind(this)
      }
      incrementCount(){
        this.setState((prevState)=>{return{count:prevState.count+1}})
      }

  render() {
    return (
      <>
        {this.props.render(this.state.count,this.incrementCount)}
      </>
    )
  }
}

export default PropsCounter