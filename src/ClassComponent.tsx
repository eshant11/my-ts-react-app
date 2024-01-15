import React,{Component, ReactNode} from 'react';

//if you are extending React.Component then no need to write the React.ReactNode
interface classComponent{
    name:string,
    children :ReactNode,
}

class  ClassComponent extends Component <classComponent>{

    render(): React.ReactNode {
        //destructuring the props in render method
        const {name}=this.props
        return <>
        <h1>Welcome {name} in  Class Component</h1>
        {/* children element of this component which is written in App */}
        {this.props.children}
        </>
    }
}

export default ClassComponent;