import React from "react";
import { Link } from "react-router-dom";
import './MENU.scss'

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="Link">
                <Link className='linkcolor' to="/">PÁGINA INICIAL</Link>
                <Link className='linkcolor' to="/SENADOR">SENADOR</Link>
                <Link className='linkcolor' to="/CALCULO">CÁLCULO</Link>
                <Link className='linkcolor' to="/FILIACOES">FILIAÇÕES</Link>
            </nav>
         
            
           
        )
    }
}