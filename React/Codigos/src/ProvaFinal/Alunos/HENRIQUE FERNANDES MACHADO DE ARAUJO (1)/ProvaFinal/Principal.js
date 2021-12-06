import React from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Calculo from "./Calculo";
import Senador from "./Senador";
import Filiacoes from "./Filiacoes";
import Menu from "./Menu/Menu";

const Principal = () => {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route element={<Calculo/>} path="/" exact/>
                <Route element={<Senador/>} path="/Senadores"/>
                <Route element={<Filiacoes/>} path="/Filiacoes"/>
            </Routes>
        </Router>
    )
}

export default Principal;