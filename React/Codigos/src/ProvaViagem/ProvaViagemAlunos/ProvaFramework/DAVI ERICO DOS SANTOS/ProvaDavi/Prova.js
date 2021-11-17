import React from "react"
import { Route, BrowserRouter } from "react-router-dom"
import Combustivel from "../ProvaDavi/Combustivel/Combustivel";
import Destinos from "../ProvaDavi/Destinos/Destinos"
import Inicio from "../ProvaDavi/Inicio/Inicio";
import Menu from '../ProvaDavi/Menu/Menu'

const Routes = () => {
    return (
        <div className="routes">
            <BrowserRouter>
                <Menu />
                <Route path="/Inicio" exact component={Inicio} />
                <Route path="/Destinos" exact component={Destinos} />
                <Route path="/Combustivel" exact component={Combustivel} />
            </BrowserRouter>
        </div>
    )
}

export default Routes;