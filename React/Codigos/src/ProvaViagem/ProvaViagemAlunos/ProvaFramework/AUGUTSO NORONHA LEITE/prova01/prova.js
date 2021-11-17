
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import {  Combustivel } from "./components/Pages/Combustivel";
import { Destino } from "./components/Pages/Destino";

//versoes e libs usadas
// "react": "^17.0.1",
// "react-dom": "^17.0.1",
// "react-router-dom": "^5.2.0",
// "react-scripts": "4.0.1",
// "react-select": "^5.2.1",
// "web-vitals": "^0.2.4"

function Prova() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/destino" component={Destino} />
            <Route path="/combustivel" component={Combustivel} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Prova;
