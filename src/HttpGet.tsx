import axios from 'axios'

import { Component } from 'react'

class HttpGet extends Component<any, { data: any,errorMsg:string }> {
    constructor(props: any) {
        super(props)

        this.state = {
            data: [],
            errorMsg:"",
        }
    }
    componentDidMount(): void {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) =>{ this.setState({
                data: response.data
            })
            ;console.log(response);  
         } ).catch((error) => this.setState({errorMsg:"error while retrieving data"})
            )

    }

    render() {
        const { data,errorMsg } = this.state
        return (
            <div style={{}}><h1> List of Data</h1>
             {
                data.map((currentData: any) =>
                    <div style={{display:"flex",flexDirection:"row", justifyContent:"space-between",alignItems:"center"}}>
                        <h1>{currentData.id}</h1>
                        <p>{currentData.title}</p>
                   </div>)
            }
              {errorMsg?<h1>{errorMsg}</h1>:null}
            </div>
        )
    }
}

export default HttpGet