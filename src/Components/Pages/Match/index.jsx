import React from "react";
import Discussion from "./Discussion";
import Waiting from "./Waiting";

export default class Match extends React.Component{
    render(){
        // const isMatched = Boolean("true");
        // function match(){
        //     if (isMatched){
        //         return(<Matched />)
        //     }
        //     else {
        //         return (<Waiting />)
        //     }
        // }
        
        // return({match})
        
        return(<Waiting />)
    }
}