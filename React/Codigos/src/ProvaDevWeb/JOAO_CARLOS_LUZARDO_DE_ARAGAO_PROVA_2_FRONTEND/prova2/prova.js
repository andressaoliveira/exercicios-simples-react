import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './prova.css';
import Menu from './menu/menu';
import Inicio from './inicio/inicio';
import Combustivel from './combustivel/combustivel';
import Destinos from './destino/destino';

const Prova = () => {
  return (
    <div className='prova2'>
      <BrowserRouter>
        <Menu />
        <Route path='/' exact component={Inicio} />
        <Route path='/destinos' component={Destinos} />
        <Route path='/combustivel' component={Combustivel} />
      </BrowserRouter>
    </div>
  );
};

export default Prova;
