import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <Link to="/">Página inicial</Link>
                <Link to="/Senador">Senador</Link>
                <Link to="/Cargos">Cargos</Link>
                <Link to="/Filiacoes">Filiacoes</Link>
                <Link to="/Mandatos">Mandatos</Link>
                {/* <Link to="/Profissoes">Profissoes</Link> */}
            </div>
        );
    }
}