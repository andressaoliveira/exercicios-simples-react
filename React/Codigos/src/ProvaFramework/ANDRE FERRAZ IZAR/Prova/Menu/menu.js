import React from 'react';
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
    render() {
        return (
//"Frontend" do router para ter algo visivel na tela e ser usada para transitar entre elas com os caminhos do router já settados no "prova.js"
            <div className="menu">
                Menu:
                <br/>
                <Link to="/Principal">Página inicial</Link>
                <br/>
                <Link to="/Info">Inforações dos locais</Link>
                <br/>
                <Link to="/Detalhes">Detalhes sobre gastos</Link>
                <br/>
            </div>
        );
    }
}