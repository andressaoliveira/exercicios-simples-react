import {TelaInicial} from './Home/TelaInicial.js'
import {Destinos} from './Destinos/Destinos.js'
import {Combustivel} from './Fuel/Combustivel.js'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
export function Prova(){
return (
<BrowserRouter>
   <Switch>
     <Route path='/' exact component= {TelaInicial} />
     <Route path='/destinos'  component= {Destinos} />
     <Route path='/combustivel'  component= {Combustivel} />
   </Switch>
   </BrowserRouter>
   );
}