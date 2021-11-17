import React from "react";
import { Link } from "react-router-dom";

export default () => {
        return <div className="menu">
                <Link to="/">Página inicial</Link>
                <Link to="/Inicio">Início</Link>
                <Link to="/Destinos">Destinos</Link>
                <Link to="/Combustivel">Combustível</Link>
            </div>
    
}