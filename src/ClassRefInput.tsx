import React, { Component } from 'react'

 class ClassRefInput extends Component<any> {
    private inputRef =React.createRef<HTMLInputElement>();
    constructor(props:any){
        super(props);
        this.inputRef = React.createRef();
    }
    //here we r not using componentDidMount  for focusing instead of this we'll call this in parent component
    focusInputRef(){
        this.inputRef.current?.focus();
    }
  render() {
    return (
      <div><input type="text" ref={this.inputRef} /></div>
    )
  }
}

export default ClassRefInput