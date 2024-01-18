import { count } from 'console'
import React, { Component } from 'react'
import HOC from './HOC';

interface ComponentProps{
    count:number,
    countHandler: ()=>void;
}
class ClickCounterHOC extends Component<ComponentProps, { count: number }> {
constructor(props:ComponentProps) {
  super(props)

}
    render() {
        return (
            <>
            <h1>{this.props.count}</h1>
                <button type="button" onClick={this.props.countHandler}>Click me</button>
                </>
        )
    }
}

export default HOC(ClickCounterHOC);