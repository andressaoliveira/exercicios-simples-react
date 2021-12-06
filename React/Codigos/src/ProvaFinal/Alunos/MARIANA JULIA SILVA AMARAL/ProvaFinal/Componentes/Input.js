import React from "react";

export default class Input extends React.Component{
    render(){
        const {onChange} = this.props;
    
        return(
            <div>
                <input onChange={onChange}></input>
            </div>
        )
    }
    
    }