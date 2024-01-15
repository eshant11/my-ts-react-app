import React, { Component } from 'react'
import MountingChild from './MountingChild';

 class Mounting extends Component<{},{msg:string}> {
    constructor(props:{}){
        super(props);
        this.state={
            msg:"hello!!",
        }
        console.log("I'm constructor A");
    }
    static getDerivedStateFromProps(props:{},state:{msg:string}):null{
        console.log("I'm getDerivedFromProps A")
        return null
    }
    componentDidMount(): void {
        console.log("I'm componentDidMount A")
    }

    shouldComponentUpdate(nextProps:{}, nextState: {msg:string}, nextContext: any): boolean {
        console.log("I'm shouldComponentUpdate A",);
        return false;
    }
    getSnapshotBeforeUpdate(prevProps: {}, prevState:{ msg: string; }) {
        console.log("I'm getSnapshotBeforeUpdate A",prevState.msg);
        return prevState;
    }
    componentDidUpdate(prevProps:{}, prevState: { msg: string; }, snapshot?: {msg:string}): void {
        console.log("I'm componentDidUpdate A ",`snapshot:${snapshot?.msg}`,this.state.msg);
        
    }
  render() {
    console.log("I'm render Method A");
    
    return (
      <div>Mounting
        <MountingChild/>
        <button onClick={()=>{this.setState({msg:"hiiiiiiii"})}}></button>
      </div>
    )
  }
}

export default Mounting