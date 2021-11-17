import React from 'react';
import { Link } from "react-router-dom";



export default class visual extends React.Component {
    render() {
        return (
            <div className="Link">
                <nav> 
                <Link to="/Home" > Pagina Inicial</Link >
                <Link to="/Destino" > Destino</Link >
                <Link to="/Combustivel" > Combustivel</Link >
                </nav>
            </div >
        );
    }
}