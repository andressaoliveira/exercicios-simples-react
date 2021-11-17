import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import pagina_inicial from './pagina-inicial'
import pagina_destinos from './pagina-destinos'
import pagina_combustivel from './pagina-combustivel'

const M1 = {width: '100%', height: "600pt"}
const D1 = {width: '20%', height: "100%", "text-align": 'center' }
const D2 = {width: '80%', "text-align": 'center', "background-color": "gray", height: "100%"}
const D3 = {width: '80%', "background-color": "gray", height: "100%"}

const L2 = {height: "50pt", "text-align": 'center'}



function Prova(){  return(

    <div style={M1}>


        <Router>

            <table style={M1}>
                <tr>

                    <th style={D1}>
                        
                        <table>
                            <tr style={L2}><Link className="" to="/pagina-inicial"><h1>Página inicial</h1></Link></tr>
                            <tr style={L2}><Link className="" to="/pagina-destinos"><h1>Destinos</h1></Link></tr>
                            <tr style={L2}><Link className="" to="/pagina-combustivel"><h1>Combustível</h1></Link></tr>
                        </table>

                    </th>


                    <th style={D3}>

                        <Switch>
                        <Route path="/pagina-inicial" exact component={pagina_inicial}></Route>
                        <Route path="/pagina-destinos" exact component={pagina_destinos}></Route>
                        <Route path="/pagina-combustivel" exact component={pagina_combustivel}></Route>
                        </Switch>

                    </th>


                </tr>
            </table>


        </Router>
    




    </div>

    );

}

export default Prova;