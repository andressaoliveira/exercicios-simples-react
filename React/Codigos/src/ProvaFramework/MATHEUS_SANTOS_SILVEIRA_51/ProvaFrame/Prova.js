import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import PaginaInicial from './PaginaInicial';
import Destino from './Destino/destino';
import Combustivel from './Combustivel/Combustivel';
import './Style.scss';


const Routes = () => {
        return(
        <Router>
                <div className="col-3">
                        <div className="Links">
                                <Link to="/" className="Botao">Página Inicial</Link>
                                <Link to="/destino" className="Botao">Página Destino</Link>
                                <Link to="/combustivel" className="Botao">Página Combustivel</Link>
                        </div>
                </div>
                <div className="col-9">
                        <Switch>
                                <Route path="/" exact={true} component={PaginaInicial} />
                                <Route path="/destino" component={Destino} />
                                <Route path="/combustivel" component={Combustivel} />
                        </Switch>
                </div>
        </Router>
        )
}
export default Routes;