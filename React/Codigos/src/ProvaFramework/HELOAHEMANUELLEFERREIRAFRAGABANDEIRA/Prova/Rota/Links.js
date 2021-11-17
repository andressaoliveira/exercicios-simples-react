import React from 'react';
import { Link } from "react-router-dom";

export default class Links extends React.Component {
    render() {
        return (
            <div>
                <h1>Prova</h1>
                <ul>
                <li><Link to="/Primeira"> Página inicial </Link></li>
                <li><Link to="/Segunda"> Destinos </Link></li>
                <li><Link to="/Terceira"> Combustível </Link></li>
                </ul>
            </div>
        );
    }
}