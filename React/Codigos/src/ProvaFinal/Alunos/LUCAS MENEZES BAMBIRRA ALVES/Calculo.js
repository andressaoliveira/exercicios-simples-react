import React, { useState } from 'react';

function Calculo() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [isDivisible, setIsDivisible] = useState('...')

  const calculate = function (numero1, numero2) {
    if(numero1 !== '0' && numero2 !== '0') {
      if(numero1 % numero2 === 0) {
        setIsDivisible('É divisível.')
      }else {
        setIsDivisible('Não é divisível.')
      }
    } else {
      setIsDivisible('0 não é permitido.')
    }
    return ('isDivisible')
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h3>Cálculo de Divisor</h3>
      <p>Digite dois números. Lhe direi se o primeiro é divisível pelo segundo.</p>
      <div>
        <label>Número 1:</label><br/>
        <input value={num1} onChange={e => setNum1(e.target.value)} placeholder="Número 1"></input>
      </div>
      <div>
        <label>Número 2:</label><br/>
        <input value={num2} onChange={e => setNum2(e.target.value)} placeholder="Número 2"></input>
      </div>
      <div>
        <button onClick={() => calculate(num1, num2)}>Calcular</button><br></br>
        <p>Resultado: {isDivisible}</p>
      </div>
    </div>
  );
}

export default Calculo;
