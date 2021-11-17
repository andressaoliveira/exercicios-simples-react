import { Route, BrowserRouter } from "react-router-dom";
import combustiveis from './COMBUSTIVEIS/combustiveis';
import destinos from './DESTINOS/destinos';
import inicio from './INICIO/inicio';
import Menu from './MENU/menu';
import './Prova.scss';

const Routes = () => {
  return (
    <div className="rotas">
      <BrowserRouter>
        <Menu/>
        <Route path="/combustiveis" component={combustiveis} />
        <Route path="/destinos" component={destinos} />
        <Route path="/inicio" component={inicio} />
        <Route path="/menu" component={Menu} />
      </BrowserRouter>
    </div>
  )
}

export default Routes;