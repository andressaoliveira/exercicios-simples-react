import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        // div com os links para acessas as paginas
        <div className="menu col-md-2 ">
            <h3><b>MENU:</b></h3><br />
            <Link to="/Inicio">Escolha o seu destino</Link><br /><br />
            <Link to="/Destinos">Destinos</Link><br /><br />
            <Link to="/Combustivel">Combustivel</Link><br /><br />


        </div>
    )
}

export default Menu;