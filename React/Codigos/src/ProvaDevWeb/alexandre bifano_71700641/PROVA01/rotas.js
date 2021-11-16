import { Route, BrowserRouter } from "react-router-dom";
import combustiveis from '../PROVA01/COMBUSTIVEIS/combustiveis';
import destinos from '../PROVA01/DESTINOS/destinos';
import inicio from '../PROVA01/INICIO/inicio';
import Menu from '../PROVA01/MENU/menu';
import './rotas.scss';

const Routes = () => {
  return (
    <div className="rotas">
      <BrowserRouter>
        <Menu/>
        <Route path="/combustiveis" component={combustiveis} />
        <Route path="/destinos" component={destinos} />
        <Route path="/inicio" component={inicio} />
        <Route path="/menu" component={menu} />
      </BrowserRouter>
    </div>
  )
}

export default Routes;