import "./style.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Inicio from "./inicio";
import Destino from "./destino";
import Combustivel from "./combustivel";

const Prova = () => {
  return (
    <Router>
      <div className="container Navbar">
        <ul>
          <li>
            <Link className="Link" to="/">
              Pagina Inicial
            </Link>
          </li>
          <li>
            <Link className="Link" to="/destinos">
              Destinos
            </Link>
          </li>
          <li>
            <Link className="Link" to="/combustivel">
              Combustivel
            </Link>
          </li>            
        </ul>
            

        <div>
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/destinos" exact component={Destino} />
            <Route path="/combustivel" exact component={Combustivel} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Prova;