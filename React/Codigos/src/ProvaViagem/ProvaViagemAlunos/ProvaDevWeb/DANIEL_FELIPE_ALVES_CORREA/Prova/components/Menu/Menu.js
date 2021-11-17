import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Link } from "react-router-dom";
import './Menu.scss'

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h4>Destinos</h4>
                    </div>
                    <ul className="list-unstyled components">
                        <li>                            
                            <Link to="/">Início</Link>
                        </li>
                        <li>                            
                            <Link to="/destinos">Destinos</Link>
                        </li>
                        <li>
                            <Link to="/combustivel">Combustível</Link>
                        </li>
                    </ul>
                </nav>
            </div>
                    )
    }
}