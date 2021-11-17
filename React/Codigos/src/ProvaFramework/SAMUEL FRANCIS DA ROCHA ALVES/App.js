import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Inicio from './Inicio';
import Destino from './Destino';
import Combustivel from './Combustivel';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
     <NavBar />
     <Switch>
     <Route path="/" exact component={PaginaPrincipal} />
     <Route path="/inicio" component={Inicio} />
     <Route path="/destino" component={Destino} />
     <Route path="/combustivel" component={Combustivel} /> 
     </Switch>
    </div>
    </Router>
  );
}

const PaginaPrincipal = () => (
  <div>
    <h1> Pagina Principal </h1>
  </div>
);

export default App;
