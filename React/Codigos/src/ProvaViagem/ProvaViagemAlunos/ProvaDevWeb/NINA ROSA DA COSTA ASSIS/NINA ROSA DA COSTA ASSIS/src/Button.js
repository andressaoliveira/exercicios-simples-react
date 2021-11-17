import React from "react";

export default(props) =>{
    return <button className="botao" onClick={props.onClick}>{props.children}</button>
}