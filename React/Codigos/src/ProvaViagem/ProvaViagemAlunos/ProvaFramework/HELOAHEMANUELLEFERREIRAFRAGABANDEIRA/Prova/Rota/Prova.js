import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Primeira from '../Telas/Primeira';
import Segunda from '../Telas/Segunda';
import Terceira from '../Telas/Terceira';
import Links from "./Links";

//estou fazendo uma gambiarra usando o codigo feito em aula, por enquanto esta dando certo

const Routes = () => {
    return (
        <BrowserRouter>
        <Links />
        <Route path="/Primeira" component={Primeira} />
        <Route path="/Segunda" component={Segunda} />
        <Route path="/Terceira" component={Terceira} />
        </BrowserRouter>
    )
}

export default Routes;