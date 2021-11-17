import React from "react";
import MenuLateral from "./MenuLateral";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Destinos from "./Destinos";
import Combustivel from "./Combustivel";

import './Prova.css';

class Prova extends React.Component {
    render() {
        return (
            <Router>
                <MenuLateral />
                <div className="content">
                    <Routes>
                        <Route element={<Home />} exact path="/" />
                        <Route element={<Destinos />} path="/destinos" />
                        <Route element={<Combustivel />} path="/combustivel" />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default Prova;