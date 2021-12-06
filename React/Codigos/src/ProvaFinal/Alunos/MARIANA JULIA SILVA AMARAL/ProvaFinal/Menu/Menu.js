import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                <h2>Menu</h2>
                <Link to="/">Página Inicial</Link>
                <Link to="/Senador">Senador</Link>
                <Link to="/Filiacao">Filiação</Link>
            </div>
        )
    }
}