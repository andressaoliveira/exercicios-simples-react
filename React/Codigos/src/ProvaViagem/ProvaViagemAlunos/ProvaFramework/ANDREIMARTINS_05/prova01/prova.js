import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './Main/index.js';
import { Destino } from './Destino/index.js'
import { Combustivel } from './Combustivel/index.js';
export function Prova() {
  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/destino" component={Destino} />
        <Route path="/gasolina" component={Combustivel} />


      </Switch>

    </BrowserRouter>
  );
}
{/* Bom dia professora. Tive muito problema em fazer pois meu codigo tava dando muito erro e acredito que não consegui resolver todos eles...Obrigado! */ }