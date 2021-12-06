import React from 'react'
 import Calculo from './Calculo'
import { Senador } from './Senador'
import { Cargos } from './Cargos'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Menu/Navbar';

export class Principal extends React.Component {
    render() {

        return (
            <div className="divFlex">                
                <Router>
                    <Navbar />
                    <Route path='/' exact component={Calculo} />
                    <Route path='/senador' component={Senador} />
                    <Route path='/cargos' component={Cargos} />
                </Router>
            </div>
        )
    }
}

export default Principal;