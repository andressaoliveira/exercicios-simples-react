import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import {  Combustivel } from "./Pages/Combustivel/Combustivel";
import { Destino } from "./Pages/Destino/Destino";

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
