import { Route, BrowserRouter } from "react-router-dom";
import Menu from './Menu/Menu'
import Fuel from './Fuel/Fuel'
import Home from './Home/Home'
import Destiny from './Destiny/Destiny'

const Prova = () =>{
  return (
    <div className="rotas">
      <BrowserRouter>
        <Menu />
        <Route path="/" exact component={Home} />
        <Route path="/destiny" component={Destiny} />
        <Route path="/fuel" component={Fuel} />
      </BrowserRouter>
    </div>
  );
}
// PROF ME PERDOA EU JURO Q VOU FAZER MELHOR NA PROX E NAO ENROLAR, KTA MTO FEIO MAS JURO Q NO TRABALHO EU N SOU ASSIM!!!! PERDAOOOOO
export default Prova;