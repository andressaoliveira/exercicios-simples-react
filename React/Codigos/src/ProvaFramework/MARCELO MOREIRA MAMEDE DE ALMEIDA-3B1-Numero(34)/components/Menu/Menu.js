import React from 'react';
import { Link } from "react-router-dom";
import Menu2 from '../Menu/Menu2.css'


export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <nav> 
                <Link to="/Home" > Pagina Inicial</Link >
                <Link to="/Destino" > Destino</Link >
                <Link to="/Combustivel" > Combustivel</Link >
                </nav>
            </div >
        );
    }
}