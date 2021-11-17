import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Destino from './Destino/Destino';
import Home from './Home/Home';
import Combustivel from './Combustivel/Combustivel';
import Menu from './Inicio/Inicio.js';

const Routes = () => {
    return (
        <div className="rotas">

            <BrowserRouter>
            <Menu/>
                <Route path= "/Home" exact component={Home} />
                <Route path="/Destino" component={Destino} />
                <Route path="/Combustivel" component={Combustivel}/>
            </BrowserRouter>
        </div>
    )
}
export default Routes;