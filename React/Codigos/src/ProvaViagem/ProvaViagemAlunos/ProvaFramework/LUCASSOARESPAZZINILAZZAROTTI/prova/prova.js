import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
//Lucas Soares 3B1

import Menu from './Menu/menu';
import Inicio from './Inicio/inicio';
import Combustivel from './Combustivel/combustivel';
import Destino from './Destino/destino';

const Routes = () => {
    return (
      <div className="rotas">
        <BrowserRouter>
          <Menu />
          <Route path="/Inicio" exact component={Inicio} />
          <Route path="/Combustivel" component={Combustivel} />
          <Route path="/Destino" component={Destino} />
        </BrowserRouter>
      </div>
    )
  }

  export default Routes;