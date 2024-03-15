import React, { Component } from 'react';

class RefDemo extends Component<any> {
  private inputRef = React.createRef<HTMLInputElement>();

  // this ref is used to access the heading element
public headingRef = React.createRef<HTMLHeadingElement>();
  constructor(props: any) {
    super(props);

// this.inputRef=React.createRef();

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
        <h1 ref={this.headingRef} onClick={(event: React.MouseEvent<HTMLHeadingElement>)=>{ 
  event.stopPropagation();
          if (this.headingRef.current) {
      this.headingRef.current.textContent = 'Updated Heading';
    }}}>Eshant</h1>
      <button onClick={()=>{alert(`Aname was submitted ${this.inputRef.current?.value}`)}}>submit</button>
      </>
    );
  }
}

export default RefDemo;
