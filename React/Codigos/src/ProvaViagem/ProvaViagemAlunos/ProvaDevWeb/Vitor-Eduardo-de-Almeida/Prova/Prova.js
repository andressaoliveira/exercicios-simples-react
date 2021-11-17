import React from "react"
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Home from "./Home/Home";
import Combustivel from "./Combustivel/Combustivel";
import Local from "./Local/Local";
import Menu from "./Menu/Menu";

const Redirect = () => {
    return(
        <Router>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/combustivel" element={<Combustivel/>}></Route>
                <Route path="/local" element={<Local/>}></Route>
            </Routes>
        </Router> 
    );
}

export default Redirect;