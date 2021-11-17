import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Options from "./routes/Options";
import Checkout from "./routes/Checkout";

import './css/style.css'

export default () => {
    return <BrowserRouter>
        <Sidebar />
        <Routes>
            <Route path="" element={<Home/>}></Route>
            <Route path="/options" element={<Options/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
    </BrowserRouter>
}