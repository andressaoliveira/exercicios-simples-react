import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import PaginaInicial from "./Pagina inicial/PaginaInicial";
import Destinos from "./Destinos/Destinos";
import Combustivel from "./Combustivel/Combustivel";
import Menu from "./Menu/Menu";
import "./Prova.scss"

const Routes = () => {
    return (
      <div className="rotas">
        <BrowserRouter>
          <Menu />
          <Route path="/" exact component={PaginaInicial} />
          <Route path="/Destinos" component={Destinos} />
          <Route path="/Combustivel" component={Combustivel} />
        </BrowserRouter>
      </div>
    )
  }
  
  export default Routes;

