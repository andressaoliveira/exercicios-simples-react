import React from 'react';
export default class Combustivel extends React.Component{
    render(){
        return (
            <div>
  <label>Tempo</label><br />
  <input type="text" id="time" name="time" /><br />
  <label>Velocidade média:</label><br />
  <input type="text" id="vel" name="vel" /><br />
  <label>Rendimento médio</label><br />
  <input type="text" id="med" name="med" /><br />
  <label>Preço Gasolina</label><br />
  <input type="text" id="gaso" name="gaso" /><br />
  <button type="button">Calcular</button>
            </div>
        )
    }
}