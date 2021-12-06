
import { BrowserRouter, Route } from "react-router-dom";

import "./Prova.css";

import Menu from "./Menu/Principal";
import Calculo from "./Calculo/Calculo";
import Senador from "./Senador/Senador";
import Cargos from "./Cargos/Cargos";

const ProvaFinal = () =>{
return (

   <main className = ".Destin">
     <BrowserRouter>
     <Menu />

     <Route exact path ="/" component={Calculo} />
     <Route path="/Senador" component={Senador} />
     <Route path="/Cargos" component={Cargos} />
     
     </BrowserRouter>
     </main>
);
}

export default ProvaFinal;