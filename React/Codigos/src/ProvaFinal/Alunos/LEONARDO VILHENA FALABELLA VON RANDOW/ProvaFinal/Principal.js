import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Calculo from "./Calculo";
import Senador from "./Senador";
import Cargos from "./Cargos";
import Menu from "./Menu/Menu";
import "./Principal.scss"

const Principal = () => {
    return (
      <div className="rotas">
        <BrowserRouter>
          <Menu />
          <Route path="/" exact component={Calculo} />
          <Route path="/PaginaInicial" component={Calculo} />
          <Route path="/Senador" component={Senador} />
          <Route path="/Cargos" component={Cargos} />
        </BrowserRouter>
      </div>
    )
  }
  
  export default Principal;