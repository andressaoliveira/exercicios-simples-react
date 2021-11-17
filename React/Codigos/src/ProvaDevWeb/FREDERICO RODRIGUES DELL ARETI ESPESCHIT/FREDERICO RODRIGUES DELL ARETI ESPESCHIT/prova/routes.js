
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/header'; //importando o componente navbar

import Main from './pages/main';
import Destinos from './pages/destinos';
import Combustivel from './pages/combustivel';

function Routex(){
    return(

    <BrowserRouter>
       <Navbar />
       <Routes>
            <Route path="/"  element={<Main />} />
            <Route path="/destino" element={<Destinos />} />
            <Route path="/combustivel" element={<Combustivel />} />
        </Routes>
    </BrowserRouter>
    );
};

export default Routex;

//Utilizando o react-router-dom na versão 6