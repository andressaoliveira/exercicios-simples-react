import React, { useState } from 'react';
import Button from '../../Base/Button';
import Input from '../../Base/Input';

export default function Ordenacao() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [numeros, setNumeros] = useState([]);
    const [mostrar, setMostrar] = useState(false);

    const calcular = () => {
        const array = [];
        array.push(num1, num2, num3);
        array.sort(function (a, b) {
            return a - b;
        });
        setNumeros(array)
        setMostrar(true)
    };

    return (
        <div>
            <h2>Ordenacao</h2>
            <div>
                Numero 1:<Input onChange={(e) => setNum1(e.target.value)} />
                Numero 2: <Input onChange={(e) => setNum2(e.target.value)} />
                Numero 3: <Input onChange={(e) => setNum3(e.target.value)} />
            </div>
            <Button onClick={() => calcular()}>Calcular</Button>

            {mostrar ? <p>{numeros[0]} - {numeros[1]} - {numeros[2]}</p> : null}

        </div>
    )
}