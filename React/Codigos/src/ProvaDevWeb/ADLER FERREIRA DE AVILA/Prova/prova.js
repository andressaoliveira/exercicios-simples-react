import { Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Menu from "./Menu/Menu";
import Inicio from "./Inicio/inicio";
import Combustivel from "./Combustivel/combustivel";
import Destinos from "./Destinos/destinos";


export default class Prova extends React.Component {
  render(){
  return (
    <div>
      
      <BrowserRouter>
            <Menu />
            <Route path="/inicio" component={Inicio} />
            <Route path="/combustivel" component={Combustivel} />
            <Route path="/destinos" component={Destinos} />
      </BrowserRouter>
      
    </div>
  )
  }
}
