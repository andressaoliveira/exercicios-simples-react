import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Calculo from "./Calculo/Calculo";
import Filiacoes from "./Filiacoes/Filiacoes";
import Senador from "./Senador/Senador";
import Menu from "./Menu/Menu";
import "./Principal.scss";

const Routes = () => {
  return (
    <div className="rotas">
      <BrowserRouter>
        <Menu />
        <Route path="/" exact component={Calculo} />
        <Route path="/Senador" component={Senador} />
        <Route path="/Filiacoes" component={Filiacoes} />
      </BrowserRouter>
    </div>
  );
};

export default Routes;
