import React, { Component } from "react";

export class ConditionalRenderring extends Component<
  any,
  { isloggedIn: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isloggedIn: true,
    };
  }
  render() {
    //1. If else conditional rendering
    // if (this.state.isloggedIn) {
    //   return <div>ConditionalRenderring</div>;
    // } else {
    //   return null;
    // }

    // 2. Using Ternary Operator
    // return (this.state.isloggedIn?( <div>ConditionalRenderring</div>): null)

    // 3. Short Circuit Approach
    return (this.state.isloggedIn&& <div>ConditionalRenderring</div>)
  }
}
