import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    
    <div className="App">

      <div class="container-fluid">

        <div class="row">
          
          <div class="col-2">
            <br/>
            <Button variant="secondary">Página Inicial</Button>{' '}
            <br/>
            <br/>
            <Button variant="secondary">Destinos</Button>{' '}
            <br/>
            <br/>
            <Button variant="secondary">Combustivel</Button>{' '}
          </div>

          <div class="col-6">
            <br/>
            <h1>Início</h1>
             <p>Escolha o seu destino:</p>

            <div id="campo" class="classCampo">
              <select id="item" >
                <option value="São Tomé das Letras">São Tomé das Letras</option>
                <option value="Capitólio">Capitólio</option>
                <option value="Carrancas">Carrancas</option>
              </select>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
