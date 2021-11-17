import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default class Menu extends React.Component{
    render(){
        return(
            <div className="Menu">
                <Link to="/">Inicio</Link>
                <Link to="/Destinos">Destinos</Link>
                <Link to="/Combustivel">Combustivel</Link>
            </div>
        )
    }
}