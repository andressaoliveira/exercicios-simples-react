import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

//ira linkar os componentes aos respctivos paths
//criará a conexao do menu com as telas do projeto
export default class Menu extends React.Component {
    render() {
        return (
            <div className="topnav">
                Menu:
                <p><Link to="/" className="link">Home</Link></p>
                <p><Link to="/Destino" className="link">Destinos</Link></p>
                <p><Link to="/Combustivel" className="link">Cálculo</Link></p>
            </div>
        );
    }
}
