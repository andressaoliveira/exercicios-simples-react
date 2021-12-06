import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component{
    render(){
        return(
            <div className="Menu">
                <Link to="/">Calculo</Link><br/>
                <Link to="/Senadores">Senador</Link><br/>
                <Link to="/Filiacoes">Filiações</Link>
            </div>
        )
    }
}