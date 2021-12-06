import 'bootstrap/dist/css/bootstrap.min.css';
import './Principal.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap"

import MenuLateral from './Menu/MenuLateral';
import { Calculo } from './Calculo';
import Senador from './Senador';
import Cargos from './Cargos';
import Filiacoes from './Filiacoes';
import Mandatos from './Mandatos';

class Principal extends React.Component {
    render(){
        return (
            <Router>
                <MenuLateral />
                <Container fluid className="content">
                    <Routes>
                        <Route element={<Calculo />} exact path="/" />
                        <Route element={<Senador />} path="/senador" />
                        <Route element={<Cargos />} path="/cargos" />
                        <Route element={<Filiacoes />} path="/filiacoes" />
                        <Route element={<Mandatos />} path="/mandatos" />
                    </Routes>
                </Container>
            </Router>
        )
    }
}

export default Principal;