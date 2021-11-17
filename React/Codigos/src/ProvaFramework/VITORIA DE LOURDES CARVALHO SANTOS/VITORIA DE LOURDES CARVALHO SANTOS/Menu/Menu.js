import React from 'react';
import { Link } from 'react-router-dom';

const Sobre = () => {
    return (
        <div>
            <h1>Sobre</h1>
            <Link to="/Inicio">Inicio</Link>
            <Link to="/Formulario">Formulario Combustivel</Link>
            <Link to="/Destino">Destino</Link>
        </div>
    );
}
export default Sobre;