import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Link to="/">Página inicial</Link>
                <Link to="/Destinos">Destinos</Link>
                <Link to="/Combustivel">Combustivel</Link>
            </div>
        )
    }
}