import React from "react";

import { Route, BrowserRouter } from "react-router-dom";

import Menu from "./Menu/menu";
import Pagina1 from "./Pagina1/pag1";
import Pagina2 from "./Pagina2/pag2";
import Pagina3 from "./Pagina3/pag3";

const Routes = () => {
    return (
//div com os caminhos que o router ira tomar usando o menu 
      <div className="rotas">
        <BrowserRouter>
          <Menu />
          <Route path="/pagina1" exact component={Pagina1} />
          <Route path="/pagina2" component={Pagina2} />
          <Route path="/pagina3" component={Pagina3} />
        </BrowserRouter>
      </div>
    )
  }

  export default Routes;