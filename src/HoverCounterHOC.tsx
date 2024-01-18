import React, { Component } from 'react'
import HOC from './HOC'
interface ComponentProps{
    count:number,
    countHandler: ()=>void;
}
 class HoverCounterHOC extends Component<ComponentProps>  {
    constructor(props:ComponentProps) {
        super(props)
      
      }
    render() {
        const  {countHandler,count}= this.props
        return (
            <>
            <h1 onMouseOver={countHandler}>{count}</h1>
               
                </>
        )
    }
}
// wrapping our component with HOC 
export default HOC (HoverCounterHOC);