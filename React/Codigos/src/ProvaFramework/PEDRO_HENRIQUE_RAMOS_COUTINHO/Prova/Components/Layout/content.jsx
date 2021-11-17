import "./content.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Fuel from "../../Views/Pages/fuel";
import Home from "../../Views/Pages/home";
import Destino from "../../Views/Pages/destino";

// Rotas entre as páginas do menu de navegação.

const content = (props) => (
  <main className="content">
    <Switch>
      <Route path="/fuel">
        <Fuel></Fuel>
      </Route>
      <Route path="/destino">
        <Destino></Destino>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>
  </main>
);

export default content;
