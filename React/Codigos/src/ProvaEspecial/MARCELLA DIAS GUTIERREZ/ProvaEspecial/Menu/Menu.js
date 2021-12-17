import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

export default class Menu extends React.Component {
  render() {
    return (
      <div className='menu'>
          <Link to='/'>Página inicial - Ordenacao</Link>
          <Link to='/Senador'>Senador</Link>
          <Link to='/Votacao'>Votacao</Link>
          <Link to='/Profissao'>Profissao</Link>
      </div>
    );
  }
}
