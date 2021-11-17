
import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Menu from './components/Menu';

function Prova() {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Router />
            </BrowserRouter>
        </>
    );
}

export default Prova;
