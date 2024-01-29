import PropTypes from 'prop-types'
import React, { Component } from 'react'
interface cProps{
    render:(isLoggedIn:boolean)=>string;
}

class PropsRenderCounter extends Component <cProps,{count:number}> {
  constructor(props:cProps){
    super(props)
  }
  render() {
    return (
      <h1>{this.props.render(true)}</h1>
    )
  }
}

export default PropsRenderCounter