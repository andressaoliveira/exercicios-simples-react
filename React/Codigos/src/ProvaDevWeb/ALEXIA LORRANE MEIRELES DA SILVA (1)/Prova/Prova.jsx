import React from 'react';

import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import Menu from './Menu';

function Prova(){
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes />
            </BrowserRouter>
        </>
    )
}

export default Prova;