import { Link } from "react-router-dom";
import './Menu.scss'
import React from 'react';

export default class Menu extends React.Component{
    render(){
        return(
            <div className="colun_menu">
                <Link to="Inicio">Página Inicial</Link>
                <Link to="Destinos">Destinos</Link>
                <Link to="Combustvel">Combustivel</Link>
            </div>
        )
    }
}