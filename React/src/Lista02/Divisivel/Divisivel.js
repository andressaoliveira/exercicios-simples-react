import React, { useState } from 'react';
import Button from '../../Base/Button';
import Input from '../../Base/Input';

export default function Divisivel() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [ehDivisivel, setEhDivisivel] = useState(null);
    const [mostrar, setMostrar] = useState(false);

    const calcular = () => {
        const resto = num1 % num2;
        if (resto === 0)
            setEhDivisivel(true)
        else
            setEhDivisivel(false)
        setMostrar(true)
    };

    return (
        <div>
            <h2>Divisivel</h2>
            <div>
                Primeiro número:<Input onChange={(e) => { setNum1(e.target.value); setMostrar(false) }} />
                Segundo número: <Input onChange={(e) => { setNum2(e.target.value); setMostrar(false) }} />
            </div>
            <Button onClick={() => calcular()}>Calcular</Button>

            {mostrar ? <p>{`${num1} ${ehDivisivel ? 'é' : 'não é'} divisível por ${num2}`}</p> : null}

        </div>
    )
}