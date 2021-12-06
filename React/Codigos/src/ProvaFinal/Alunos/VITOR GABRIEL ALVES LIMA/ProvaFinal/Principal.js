import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Calculo from "./Calculo";
import Senador from "./Senador";
import Cargos from "./Cargos";

export default class Principal extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <p>
            <Link to="/">Pagina incial</Link>
          </p>
          <p>
            <Link to="/Senador">Senador</Link>
          </p>
          <p>
            <Link to="/Cargos">Cargos</Link>
          </p>

          <Route path="/" exact component={Calculo} />
          <Route path="/Senador" component={Senador} />
          <Route path="/Cargos" component={Cargos} />
        </BrowserRouter>
      </div>
    );
  }
}
