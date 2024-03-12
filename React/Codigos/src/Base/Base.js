import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Lista01 from '../Lista01/Lista01';
import Lista02 from '../Lista02/Lista02';
import Menu from './Menu';

const Routes = () => {
    return (
        <div className="rotas">
            <BrowserRouter>
                <Menu />
                <Route path="/" exact component={Lista01} />
                <Route path="/Lista01" component={Lista01} />
                <Route path="/Lista02" component={Lista02} />
            </BrowserRouter>
        </div>
    )
}

export default Routes;