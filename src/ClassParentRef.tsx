import React, { Component } from 'react'
import ClassRefInput from './ClassRefInput'

 class ClassParentRef extends Component <any> {
    private componentRef = React.createRef<ClassRefInput>();

    constructor(props:any) {
      super(props)
    
      this.componentRef =React.createRef()
    }
    handleFocus=()=>{
        //focusInputRef child ki method hai focus karne ke li
this.componentRef.current?.focusInputRef()
    }
  render() {
    return (
      <div><ClassRefInput ref={this.componentRef}/>
      <button onClick={this.handleFocus}>Focus</button></div>
    )
  }
}

export default ClassParentRef