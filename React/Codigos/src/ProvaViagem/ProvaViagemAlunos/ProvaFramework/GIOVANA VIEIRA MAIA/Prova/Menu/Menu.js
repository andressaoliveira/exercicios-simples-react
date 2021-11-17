import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div class="preto">
                    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" >
                        <Link to="/Inicio" class="nav-link px-2 text-secondary"> Inicio</Link>
                        <Link to="/Destinos" class="nav-link px-2 text-white">Destinos</Link>
                        <Link to="/Combustivel" class="nav-link px-2 text-white">Combustivel</Link>
                    </div>
                </div>
            </div>
        );
    }
}