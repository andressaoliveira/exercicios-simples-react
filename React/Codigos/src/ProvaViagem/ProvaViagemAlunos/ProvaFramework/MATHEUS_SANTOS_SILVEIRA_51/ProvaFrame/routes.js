import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProvaFrame from './ProvaFrame';
import Destino from './Destino/destino';
import Combustivel from './Combustivel/Combustivel';
import Link from './Link';

const Routes = () => {
        return(
        <div>
        <BrowserRouter>
                <Link />
                <Route path="/" exact={true} component={ProvaFrame} />
                <Route path="/destino" component={Destino} />
                <Route path="/combustivel" component={Combustivel} />
        </BrowserRouter>
        </div>
        )
}
export default Routes;