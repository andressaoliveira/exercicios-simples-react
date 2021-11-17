
import './App.css';

import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import Início from "./Páginas/Início";
import Destinos from "./Páginas/Destinos";
import Combustível from "./Páginas/Combustível";

const App = () => {
return (
<Router>
<div className="container">
  <div className="menu">
    <div className="header">
      <Link className="App-link" to="/">
      Página Jornal
      </Link>
      <Link className= "App-link" to= "/destinos">
        Destinos
        </Link>
        <Link className= "App-link" to= "combustivel">
        combustivel
        </Link>
    </div>
  </div>

<div className="pagina">
  <Switch>
    <Route path="/" exact component={Início} />
    <Route path="/Destinos" exact component={Destinos} />
    <Route path="/Combustível" exact component={Combustível} />
  </Switch>
</div>
</div>
</Router>
);
};

export default App;