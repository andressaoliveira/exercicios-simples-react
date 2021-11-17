import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Menu from "./Prova/Menu/Menu";

import Inicio from "./Prova/Inicio/inicio";
import Destinos from "./Prova/Destinos/destinos";
import Combustivel from "./Prova/Combustivel";

const Prova = () => {
  return (
    <BrowserRouter>
      <Menu />
        <Route component={Inicio} exact path="/" />
        <Route component={Inicio} path="/Inicio" />
        <Route component={Destinos} path="/Destinos" />
        <Route component={Combustivel} path="/Combustivel" />
    </BrowserRouter>
  );
};

export default Prova;
