import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import './Prova.css';

import Inicio from './Inicio/Inicio';
import Destinos from './Destinos/Destinos';
import Combustivel from './Combustivel/Combustivel';

const Routes = () => {
  return (
    <div className="rotas">
      <BrowserRouter>
        <Route path="/" exact component={Inicio} />
        <Route path="/Inicio" component={Inicio} />
        <Route path="/Destinos" component={Destinos} />
        <Route path="/Combustivel" component={Combustivel} />
      </BrowserRouter>
    </div>
  )
}

export default Routes;