import React from "react";
//import do router dom
import { Route, BrowserRouter } from "react-router-dom";

//André Ferraz Izar 3B1
//11900105 N-04
//import das telas para usar no "route"
import Menu from './Menu/menu';
import Principal from './Principal/principal';
import Detalhes from './Detalhes/detalhes';
import Informacoes from './Info/info';

const Routes = () => {
    return (
//div com os caminhos que o router ira tomar usando o menu 
      <div className="rotas">
        <BrowserRouter>
          <Menu />
          <Route path="/Principal" exact component={Principal} />
          <Route path="/Detalhes" component={Detalhes} />
          <Route path="/Info" component={Informacoes} />
        </BrowserRouter>
      </div>
    )
  }
  
  export default Routes;
// Router-dom foi instalado e usado nesse projeto Versão 5.3.0 para a execução do projeto