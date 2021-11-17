import { Route, BrowserRouter } from "react-router-dom";

import Inicio from "./Home";
import Destino from "./Destino";
import Combustivel from "./Combustivel";
import Menu from "./Menu";
import './App.css'; 

const Routes_Prova = () =>{
    return(
        <div className="rotas">      
            <BrowserRouter>
            <Menu/> 
                <Route path="/" component={Inicio} exact/>
                <Route path="/Inicio" component={Inicio}/>
                <Route path="/Destino" component={Destino}/>
                <Route path="/Combustivel" component={Combustivel}/>
            </BrowserRouter>
        </div>
    )
}


export default Routes_Prova;