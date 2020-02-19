import React from "react";
import Button from "@material-ui/core/Button"

export default class Waiting extends React.Component {
    render(){
        return(
            <React.Fragment>
                {/* <Button variant="contained" color="secondary" size="large" > */}
                    <a href="setsuna://"> Go！</a>
                    {/* </Button> */}
            </React.Fragment>
        )
    }
}