import { Route, BrowserRouter } from "react-router-dom";
import PaginaInicial from './PaginaInicial/PaginaInicial';
import Destinos from './Destinos/Destinos';
import Combustivel from './Combustivel/Combustivel';
import Menu from "./Menu/Menu";
import './Prova.scss';

const Routes = () => {
  return (
    <div className="prova1">
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
