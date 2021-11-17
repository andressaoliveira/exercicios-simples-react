import React from "react";
import {Route, BrowserRouter} from "react-router-dom"
import Combustivel from "./Combustivel/combustivel";
import Destinos from "./Destinos/destinos"
import Inicio from "./Inicio/inicio";
import Menu from './Menu/menu'

const Routes = () => {
    return(
        // criação das rotas
        <div className="rotas">
            <BrowserRouter>
            <Menu/>
            <Route path="/Inicio" exact component={Inicio}/>
            <Route path="/Destinos" exact component={Destinos}/>
            <Route path="/Combustivel" exact component={Combustivel}/>
            </BrowserRouter>
        </div>
    )
}

export default Routes;