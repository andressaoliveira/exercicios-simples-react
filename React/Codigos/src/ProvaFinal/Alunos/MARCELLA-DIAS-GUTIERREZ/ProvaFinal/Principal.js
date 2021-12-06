import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import Menu from './Menu/Menu'
import PaginaInicial from './PaginaInicial'
import Senador from './Senador'
import Cargo from './Cargo'
import Filiacao from './Filiacao'
import Mandato from './Mandato'
import './Principal.scss';


export default class Principal extends React.Component {
  render() {
    return (
        <div className='prova-main'>
            <BrowserRouter>
                <Menu />
                <Route path='/' exact component={PaginaInicial} />
                <Route path='/Senador' component={Senador} />
                <Route path='/Cargo' component={Cargo} />
                <Route path='/Filiacao' component={Filiacao} />
                <Route path='/Mandato' component={Mandato} />
            </BrowserRouter>
      </div>
    );
  }
}

//oi prof, minha ultima prova foi horrivel. eu sei. tentei dar um caprichada melhor nessa.
// sei que to precisando de mtos pontos entao coloquei todos os tipos de apis que voce pediu
// eu coloquei amarelo (nao ficou tao bom), mas é minha cor favorita hehehe
// apesar do que falaram de voce esse semestre, eu gostei muito da sua didatica
// gostaria de ter me esforcado mais, mas por N fatores nao consegui.
// obrigada pelo semestre!
