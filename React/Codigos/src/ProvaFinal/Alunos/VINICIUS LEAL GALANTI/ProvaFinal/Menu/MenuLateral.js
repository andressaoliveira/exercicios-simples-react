import "./MenuLateral.css";

import React from "react";
import { Link } from "react-router-dom";

class MenuLateral extends React.Component{
    render(){
        return (
            <div className="menuLateral">
                <Link to="/">Home</Link>
                <Link to="/senador">Senador</Link>
                <Link to="/cargos">Cargos</Link>
                <Link to="/filiacoes">Filiações</Link>
                <Link to="/mandatos">Mandatos</Link>
            </div>
        );
    }
}

export default MenuLateral;