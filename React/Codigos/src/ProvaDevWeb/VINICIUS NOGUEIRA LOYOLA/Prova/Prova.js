
import { BrowserRouter, Route } from "react-router-dom";

import "./Prova.css";

import Menu from "./Menu/Menu";
import Inicio from "./Inicio/Inicio";
import Destinos from "./Destinos/Destinos";
import Combustivel from "./Combustivel/Combustivel";

const Prova = () =>{
return (

   <main className = ".Destin">
     <BrowserRouter>
     <Menu />

     <Route exact path ="/" component={Inicio} />
     <Route path="/Destinos" component={Destinos} />
     <Route path="/Combustivel" component={Combustivel} />
     
     </BrowserRouter>
     </main>
);
}

export default Prova;