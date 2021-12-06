import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
    <div className="menu">
        <h3>Menu: </h3> <Link to="/">Página Inicial</Link> / <Link to="/Senador">Senador</Link> / <Link to="/Filiacao">Filiação</Link>        
    </div>
    );
}
export default Menu;