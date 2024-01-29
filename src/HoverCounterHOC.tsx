import React, { Component } from 'react'
import HOC from './HOC'
interface ComponentProps{
    count:number,
    countHandler: ()=>void;
    name:string;
}
 class HoverCounterHOC extends Component<ComponentProps>  {
    constructor(props:ComponentProps) {
        super(props)
      
      }
    render() {
        const  {countHandler,count}= this.props
        return (
            <>
            <h1 onMouseOver={countHandler}>{count}{this.props.name}</h1>
               
                </>
        )
    }
}
// wrapping our component with HOC 
export default HOC (HoverCounterHOC);