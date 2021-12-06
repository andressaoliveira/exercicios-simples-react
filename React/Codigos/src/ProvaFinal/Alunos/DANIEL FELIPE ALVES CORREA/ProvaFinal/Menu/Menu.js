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
                        <h4>Menu</h4>
                    </div>
                    <ul className="list-unstyled components">
                        <li>                            
                            <Link to="/">Página inicial</Link>
                        </li>
                        <li>                            
                            <Link to="/senador">Senador</Link>
                        </li>
                        <li>
                            <Link to="/filiacoes">Filiações</Link>
                        </li>
                    </ul>
                </nav>
            </div>
                    )
    }
}