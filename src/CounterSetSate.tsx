import { Component } from "react";

interface Count {
  count: number;
}

class CounterSetSate extends Component<any, Count> {
    
  constructor(props: any) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  incrementCount = () => {
    // this.setState(
    //   // here setstate take 2 parameter 1st state object and 2nd is callback func which should render after the state update
    //   { count: this.state.count + 1 },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );

   // state based on previous state
    this.setState((prevState,props)=>( 
        {count:prevState.count+1}),
        ()=>{  console.log(this.state.count);}
        );
      
};
incrementFive=()=>{
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
   
}

  render(): React.ReactNode {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={() => this.incrementFive()}></button>
      </div>
    );
  }
}

export default CounterSetSate;
