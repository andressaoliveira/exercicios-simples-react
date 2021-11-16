import { Route, BrowserRouter } from "react-router-dom";
import Inicio from "./Inicio/Inicio";
import Destinos from "./Destinos/Destinos";
import Combustivel from "./Combustivel/Combustivel";
import Menu from "./Menu/Menu";
import "./Prova.scss";

const Routes = () => {
  return (
    <div className="prova">
      <BrowserRouter>
        <Menu />

        <div className="rotas">
          <Route path="/" exact component={Inicio} />
          <Route path="/Destinos" component={Destinos} />
          <Route path="/Combustivel" component={Combustivel} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
