import React from 'react';
import Botao from './botaoMenu';
import { Link } from 'react-router-dom';
import './menu.scss'

export default class Menu extends React.Component {

    render() {
        return (
            <div ClassName="menu">
                Menu:
                <Link to="/inicio">Pagina Inicial</Link>
                <Link to="/destinos">Destinos</Link>
                <Link to="/combustiveis">Combustível</Link>
            </div>
        )
    }

}