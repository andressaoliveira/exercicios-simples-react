import React from 'react'
import { Combustivel } from './Paginas/Combustivel'
import { Destinos } from './Paginas/Destinos'
import Inicio from './Paginas/Inicio'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Menu/Navbar';
import './Prova.css'

export class Prova extends React.Component {
    render() {
        return (
            <div className="divFlex">                
                <Router>
                    <Navbar />
                    <Route path='/' exact component={Inicio} />
                    <Route path='/destinos' component={Destinos} />
                    <Route path='/combustivel' component={Combustivel} />
                </Router>
            </div>
        )
    }
}