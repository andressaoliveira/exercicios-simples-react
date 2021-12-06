import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default class Menu extends React.Component{
    render(){
        return(
            <div className="Menu">
                <Link to="/">Calculo</Link>
                <Link to="/Senadores">Senador</Link>
                <Link to="/Filiacoes">Filiações</Link>
            </div>
        )
    }
}