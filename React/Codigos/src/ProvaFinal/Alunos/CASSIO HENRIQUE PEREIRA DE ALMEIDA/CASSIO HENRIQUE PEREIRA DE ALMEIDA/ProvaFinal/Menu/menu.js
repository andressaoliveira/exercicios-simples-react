import React from "react";
import { Link } from "react-router-dom";
// import "./Menu.css";
const Menu = () => {
    return (
    <div className="menu">
        <h1><p>Menu:</p></h1>
        <Link to="/Calculo">Calculo</Link>
        <Link to="/Senador">Senador</Link>
        <Link to="/Filiacao">Filiação</Link>
    </div>
    );
}

export default Menu;