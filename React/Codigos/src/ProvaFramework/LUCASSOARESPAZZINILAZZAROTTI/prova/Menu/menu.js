import React from 'react';
import { Link } from "react-router-dom";
export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                Menu:
                <br/>
                <Link to="/Inicio">Início</Link>
                <br/>
                <Link to="/Destino">Destinos</Link>
                <br/>
                <Link to="/Combustivel">Combustivel</Link>
                <br/>
            </div>
        );
    }
}