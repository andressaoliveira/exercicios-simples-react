import React from "react";
import { Link } from "react-router-dom";
import './Menu.scss'

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Link to="/">Página Inicial</Link>
                <Link to="/Destinos">Destinos</Link>
                <Link to="/Combustivel">Combustivel</Link>
            </div>
        )
    }
}