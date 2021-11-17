import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Menu from "./Prova/Menu";

import Prova from './Prova/Prova';


const Routes = () => {
  return (
    <div className="rotas">
      <BrowserRouter>
        <Menu />
        <Route path="/" exact component={Prova} />
        <Route path="/" component={Menu} />
        
      </BrowserRouter>
    </div>
  )
}

export default Routes;