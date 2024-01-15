import React from "react";
interface userDetails{
    message:string,
    name:string,
    address:{
        city:string,
        state:string
    }
}

const Greet =(props:userDetails)=>{
    return<>
    <h1>Hello World!!!!!!!!!</h1>
    </>
}
export default Greet;
