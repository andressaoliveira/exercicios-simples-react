import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

export default class Menu extends React.Component {
  render() {
    return (
      <div className='menu'>
        <Link to='/'>Página inicial</Link>
        <Link to='/destinos'>Destinos</Link>
        <Link to='/combustivel'>Combustível</Link>
      </div>
    );
  }
}


