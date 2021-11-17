import React, { useState } from 'react';
import './Fuel.css'

const Fuel = () => {
  const [ result, setResult ] = useState({
    destiny: "",
    velocity: 0,
    time: 0,
    yyield: 0,
    distance: 0,
    fuel: 0,
    valueTotal: 0,
    show: false
  });

  const calculate = () => {
    const [
      {value: time},
      {value: velocity},
      {value: yyield},
      {value: gasPrice}
    ] = document.querySelectorAll('.fuelInputItem input').values();

    const destiny = sessionStorage.getItem("destiny")
    const distance = (time * velocity).toFixed(2)
    const fuel = (distance / yyield).toFixed(2)
    const valueTotal = (gasPrice * fuel).toFixed(2)

    setResult({
      destiny,
      velocity,
      time,
      yyield,
      distance,
      fuel,
      valueTotal,
      show: true
    })
  }

  return (
    <div className="fuel">
      <div className="fuelBackground">
        <div className="fuelInput">
          <span className="fuelInputItem">
            <h4>Tempo</h4>
            <input type="number"placeholder="0" min="0"/>
            <h4>&#40;em horas&#41;</h4>
          </span>

          <span className="fuelInputItem">
            <h4>Velocidade média</h4>
            <input type="number"placeholder="0" min="0"/>
            <h4>&#40;em km/h&#41;</h4>
          </span>

          <span className="fuelInputItem">
            <h4>Rendimento médio</h4>
            <input type="number"placeholder="0" min="0"/>
            <h4>&#40;em km/litros&#41;</h4>
          </span>

          <span className="fuelInputItem">
            <h4>Preço da gasolina</h4>
            <input type="number"placeholder="0.00" step="any" min="0"/>
            <h4>&#40;em reais R$&#41;</h4>
          </span>

          <button onClick={calculate}>Calcular</button>
        </div>
      </div>

      <div className="fuelResult">
        {result.show ? (
          <>
          <p><b>Destino: </b>{result.destiny}</p>
          <p><b>Velocidade média: </b>{result.velocity} km/h</p>
          <p><b>Tempo gasto: </b>{result.time} horas</p>
          <p><b>Rendimento: </b>{result.yyield} km/litros</p>
          <p><b>Distância: </b>{result.distance} km</p>
          <p><b>Combustível: </b>{result.fuel} litros</p>
          <p><b>Valor total: </b>R$ {result.valueTotal}</p>
          </>
        ) : ""}
      </div>
    </div>
  );
}

export default Fuel;