import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Menu from './Menu/Menu';

import './Prova.scss';

import PaginaInicial from './paginaInicial/paginaInicial';
import Destinos from './destinos/destinos';
import Combustivel from './combustivel/combustivel';

const Prova = () => {
  return (
    <div className='prova-main'>
      <BrowserRouter>
        <Menu />
        <Route path='/' exact component={PaginaInicial} />
        <Route path='/destinos' component={Destinos} />
        <Route path='/combustivel' component={Combustivel} />
      </BrowserRouter>
    </div>
  );
};

export default Prova;
