import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

export default class Menu extends React.Component {
  render() {
    return (
      <div className='menu'>
          <Link to='/'>Página inicial</Link>
          <Link to='/Senador'>Senador</Link>
          <Link to='/Cargo'>Cargo</Link>
          <Link to='/Filiacao'>Filiacao</Link>
          <Link to='/Mandato'>Mandato</Link>
      </div>
    );
  }
}
