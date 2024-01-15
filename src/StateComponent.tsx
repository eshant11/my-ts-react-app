import React,{Component} from 'react';

interface Iprops{}

interface State {
    message:string,
}

class StateComponent extends Component<Iprops,State>{
    constructor(props:Iprops){
        super(props);
        this.state={
message:'State Component',
        };
    }
changeState=()=>{
    this.setState({message:"State component with typescript"})
}

    render():React.ReactNode{
return<>

<h1 onClick={()=>this.changeState()}>{this.state.message}</h1></>
    }
}

export default StateComponent;