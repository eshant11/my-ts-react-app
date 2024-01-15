import React, { Component } from 'react'

 class MountingChild extends Component<{},{msg:string}> {
    constructor(props:{}){
        super(props);
        this.state={
            msg:"hello!!",
        }
        console.log("I'm constructor B");
    }
    static getDerivedStateFromProps(props:{},state:{msg:string}):null{
        console.log("I'm getDerivedFromProps B")
        return null
    }
    componentDidMount(): void {
        console.log("I'm componentDidMount B")
    }
    shouldComponentUpdate(nextProps:{}, nextState: {msg:string}, nextContext: any): boolean {
        console.log("I'm shouldComponentUpdate B");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps: {}, prevState:{ msg: string; }) {
        console.log("I'm getSnapshotBeforeUpdate B",prevState.msg);
        return null;
    }
    componentDidUpdate(prevProps:{}, prevState: { msg: string; }, snapshot?:any): void {
        console.log("I'm componentDidUpdate B ",prevState.msg,);
        
    }
  render() {
    console.log("I'm render Method B");
    
    return (
      <div>Mounting Child</div>
    )
  }
}

export default MountingChild;