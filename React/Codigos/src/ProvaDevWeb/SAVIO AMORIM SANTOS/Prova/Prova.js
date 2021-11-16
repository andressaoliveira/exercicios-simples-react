import React from 'react';
import './Prova.css';
import Botao from './Botao/Botao'
import Combustivel from './Combustivel/Combustivel';
import Inicio from './Inicio/Inicio';
import Destinos from './Destinos/Destinos';
import { Route, BrowserRouter } from "react-router-dom";
import Menu from "./Menu/Menu"

export default class Prova extends React.Component {

    render() {
        return (
            <div id="prova_page">
                <div className="rotas">
                    <BrowserRouter>
                        <Menu />
                        <Route path="/" exact component={Inicio} />
                        <Route path="/Destinos" component={Destinos} />
                        <Route path="/Combustivel" component={Combustivel} />
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}