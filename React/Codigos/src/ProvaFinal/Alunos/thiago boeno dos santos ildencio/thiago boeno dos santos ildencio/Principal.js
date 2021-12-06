import {
  BrowserRouter,
  Route
} from "react-router-dom";

import "./Principal.css";

import Menu from "./Menu/Menu";
import Calculo from "./Calculo";
import Senador from "./Senador";
import Cargos from "./Cargos";

const App = () => {
  return (
    <main className="grid">
      <BrowserRouter>
        <Menu />

        <Route exact path="/" component={Calculo} />
        <Route path="/senador" component={Senador} />
        <Route path="/cargos" component={Cargos} />
      </BrowserRouter>
    </main>
  );
}

export default App;