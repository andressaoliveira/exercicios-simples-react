import React from "react";
import { Link } from "react-router-dom";
import "../Menu/menu.css";

const Menu = () => {
    return (
    <div className="menu">
        <h1><p>Menu:</p></h1>
        <Link to="/Home">Home</Link>
        <Link to="/Senador">Senador</Link>
        <Link to="/Votacoes">Votações</Link>
        <Link to="/Profissao">Profissão</Link>
    </div>
    );
}

export default Menu;