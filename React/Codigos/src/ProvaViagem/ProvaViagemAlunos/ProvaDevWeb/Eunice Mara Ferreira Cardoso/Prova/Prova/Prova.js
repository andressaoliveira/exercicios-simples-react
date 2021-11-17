import { Route, BrowserRouter } from "react-router-dom";

import Inicio from "../inicio/Inicio";
import Destinos from "../destinos/Destinos";
import Combustivel from "../combustivel/Combustivel";
import Menu from './menu/Menu';
import "./Cod_rotas.scss";

const Routes = () => {
  return (
      <div className="colun_rotas">
        <BrowserRouter>
            <Menu />    
            <Route path="/Inicio" component={Inicio}/>
            <Route path="/Destinos" component={Destinos}/>
            <Route path="/Combustivel" component={Combustivel}/>
        </BrowserRouter>
    </div>
  )
}
export default Routes;