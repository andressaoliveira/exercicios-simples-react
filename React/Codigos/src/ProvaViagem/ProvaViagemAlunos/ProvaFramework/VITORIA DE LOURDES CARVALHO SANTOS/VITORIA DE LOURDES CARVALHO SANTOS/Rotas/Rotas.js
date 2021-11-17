import React from "react";
import Inicio from "../Inicio/Inicio"
import Formulario from "../Formulario/Formulario"
import Destino from "../Destino/Destino"
import Menu from "../Menu/Menu"

import { Route, BrowserRouter } from "react-router-dom"

export default class Rotas extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Menu />
                <Route component={Inicio} exact path="/Inicio" />
                <Route component={Formulario} path="/Formulario" />
                <Route component={Destino} path="/Destino" />
            </BrowserRouter>

        )
    }
}