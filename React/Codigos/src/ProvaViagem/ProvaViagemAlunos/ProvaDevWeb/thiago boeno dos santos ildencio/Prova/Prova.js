import {
  BrowserRouter,
  Route
} from "react-router-dom";

import "./Prova.css";

import Menu from "./Menu/Menu";

import Inicio from "./Inicio/Inicio";
import Destinos from "./Destinos/Destinos";
import Combustivel from "./Combustivel/Combustivel";

const App = () => {
  return (
    <main className="grid">
      <BrowserRouter>
        <Menu />

        <Route exact path="/" component={Inicio} />
        <Route path="/destinos" component={Destinos} />
        <Route path="/combustivel" component={Combustivel} />
      </BrowserRouter>
    </main>
  );
}

export default App;