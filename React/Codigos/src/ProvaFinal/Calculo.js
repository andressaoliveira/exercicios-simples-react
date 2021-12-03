import React, { useState } from 'react';

export const calcularDivisivel = (num1, num2) => {
    const resto = num1 % num2;
    if (resto === 0)
        return true
    else
        return false
};

export default function Calculo() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [ehDivisivel, setEhDivisivel] = useState(null);
    const [mostrar, setMostrar] = useState(false);


    return (
        <div>
            <h2>Divisivel</h2>
            <div>
                <p>Primeiro número: <input onChange={(e) => { setNum1(e.target.value); setMostrar(false) }} /></p>
                <p>Segundo número: <input onChange={(e) => { setNum2(e.target.value); setMostrar(false) }} /></p>
            </div>
            <button onClick={() => { setEhDivisivel(calcularDivisivel(num1, num2)); setMostrar(true) }}>
                Calcular
            </button>

            {mostrar ? <p>{`${num1} ${ehDivisivel ? 'é' : 'não é'} divisível por ${num2}`}</p> : null}

        </div>
    )
}