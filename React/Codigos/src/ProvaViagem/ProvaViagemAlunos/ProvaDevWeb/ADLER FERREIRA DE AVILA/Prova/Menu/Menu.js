import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
    render(){
            return (
            <div className="menu">
                <Link to="/inicio">Início</Link>
                <Link to="/combustivel">Cálculo de Combustível</Link>
                <Link to="/destinos">Destinos</Link>
            </div>
            )
    }
    
}
