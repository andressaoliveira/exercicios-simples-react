import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="link">
                    <Link to="/">Inicio</Link>
                </div>
                <div className="link">
                    <Link to="/destinos">Destinos</Link>
                </div>
                <div className="link">
                    <Link to="/combustivel">Combustivel</Link>
                </div>   
            </div>
        )
    }
}