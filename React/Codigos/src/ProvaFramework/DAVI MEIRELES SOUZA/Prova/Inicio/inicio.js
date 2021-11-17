import React from 'react';

export default class Inicio extends React.Component{

    render(){
  
  
      return (
  
        <div>

            <h1>Inicio</h1> <br/>

            <p> Escolha o seu destino :</p>

            <select>

                <option value="tokyo">Tokyo</option>
                <option value="veneza">Veneza</option>
                <option value="holanda">Holanda</option>

            </select>

        </div>

      )
    }
  }
