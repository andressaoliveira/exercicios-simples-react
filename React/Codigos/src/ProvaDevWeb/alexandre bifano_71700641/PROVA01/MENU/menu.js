import React from 'react';
import Botao from './botaoMenu';
import {Link} from 'react-router-dom';
import './MENU/menu.scss'

export default class Menu extends React.Component{

render(){
return(
    <div ClassName="menu">
    Menu:
    <link to="/inicio">Pagina Inicial</link>
    <link to="/destinos">Destinos</link>
    <link to="/combustiveis">Combustível</link>
    </div>
    )
    }

}