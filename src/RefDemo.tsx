import React, { Component } from 'react';

class RefDemo extends Component<any> {
  private inputRef = React.createRef<HTMLInputElement>();

  constructor(props: any) {
    super(props);

this.inputRef=React.createRef();
  }
  componentDidMount(): void {
    this.inputRef.current?.focus()
      console.log(this.inputRef);
      
  }

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.inputRef} />
      <button onClick={()=>{alert(`Aname was submitted ${this.inputRef.current?.value}`)}}>submit</button>
      </>
    );
  }
}

export default RefDemo;
