import React, { Component } from 'react'

 class ErrorBoundary extends Component<any,{hasError:boolean}> {
    constructor(props:any) {
      super(props)
    
      this.state = {
         hasError:false,
      }
    }
    static getDerivedStateFromError(error:any){
return{
    hasError:true
}
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log(error);
        
    }
  render() {
    if(this.state.hasError){
    return ( <h1>Some Error</h1>)
    }
        return this.props.children
    
  }
}

export default ErrorBoundary;