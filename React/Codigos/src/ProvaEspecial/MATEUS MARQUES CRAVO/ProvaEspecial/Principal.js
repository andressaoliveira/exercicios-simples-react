import React from 'react'
import Ordenacao from './Ordenacao'
import { Senador } from './Senador'
import { Profissao } from './Profissao'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Menu/Navbar';
import { Votacoes } from './Votacoes';
import './Principal.css'

export class Principal extends React.Component {
    render() {

        return (
            <div className="divFlex">                
                <Router>
                    <Navbar />
                    <Route path='/' exact component={Ordenacao} />
                    <Route path='/senador' component={Senador} />
                    <Route path='/votacoes' component={Votacoes} />
                    <Route path='/profissao' component={Profissao} />
                </Router>
            </div>
        )
    }
}

export default Principal;