import "./Prova.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="menu">
          <div className="header">
            <Link className="App-link" to="/">
              Pagina Inicial
            </Link>
            <Link className="App-link" to="/destinos">
              Destinos
            </Link>
            <Link className="App-link" to="/combustivel">
              Combustivel
            </Link>
          </div>
        </div>

        <div></div>

        <div className="pagina">
          <Switch>
            <Route path="/" exact component={Page1} />
            <Route path="/destinos" exact component={Page2} />
            <Route path="/combustivel" exact component={Page3} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
