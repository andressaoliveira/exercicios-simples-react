import { BrowserRouter} from 'react-router-dom';
import Rotas from './Rotas';
import './App.css';
import NavBar from './NavBar'
import React from 'react';

export default function Prova() {
  return (
    <div className="App">
      <div className="Routes">
        <BrowserRouter>
          <div className="NavBar">
            <NavBar/>
          </div>
          <Rotas />
        </BrowserRouter>
      </div>

     
    </div>
  );
}

