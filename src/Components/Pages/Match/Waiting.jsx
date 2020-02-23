import React from "react";
import './Waiting.css'

export default class Waiting extends React.Component {
    render(){
        return(
            <React.Fragment>
                <button className="btn-real" type="button" onclick="location.href='setuna://'">Join！</button>
                
            </React.Fragment>
        )
    }
}