import React from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Inicio from "./Inicio/Inicio";
import Combustivel from "./Combustivel/Combustivel";
import Destinos from "./Destinos/Destinos";
import Menu from "./Menu/Menu";

const Redirect = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route element={<Inicio/>} path="/" exact/>
                <Route element={<Destinos/>} path="/Destinos"/>
                <Route element={<Combustivel/>} path="/Combustivel"/>
            </Routes>
        </Router>
    )
}

export default Redirect;