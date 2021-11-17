import React from "react";
import { Link } from "react-router-dom";
import './App.css'; 


const Menu = () => {
    return (
    <div className="menu">
        Menu:
        <Link to="/">Página inicial</Link>
        <Link to="/Destino">Destino</Link>
        <Link to="/Combustivel">Combustível</Link>
    </div>
    );
}

export default Menu;


