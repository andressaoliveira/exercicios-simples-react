import React from "react";
import { Link } from "react-router-dom";
import './Menu.css'

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                Menu:
                <Link to="/">Página inicial</Link>
                <Link to="/destiny">Destinos</Link>
                <Link to="/fuel">Combustivel</Link>

            </div>
        )
    }
}