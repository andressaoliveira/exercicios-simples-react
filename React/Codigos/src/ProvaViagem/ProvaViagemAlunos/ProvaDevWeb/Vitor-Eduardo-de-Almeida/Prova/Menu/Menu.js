import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component{
    render(){
        return(
            <div className="menuL">
                <Link to="/">Home</Link><br/>
                <Link to="/Local">Locais</Link><br/>
                <Link to="/Combustivel">Combustivel</Link>
            </div>
        )
    }
}