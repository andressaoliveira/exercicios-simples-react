import React, { useState } from 'react';
import Button from '../../Base/Button';
import Input from '../../Base/Input';

export default function ConversaoGraus() {
    const [grausFarenheit, setGrausFarenheit] = useState(0);
    const [grausCelsius, setGrausCelsius] = useState(0);
    const [mostrar, setMostrar] = useState(false);

    const calcular = () => {
        const graus = (5 / 9) * (grausFarenheit - 32)
        setGrausCelsius(graus)
        setMostrar(true)
    };

    return (
        <div>
            <h2>Conversao de Graus</h2>
            <div>
                Farenheit:<Input onChange={(e) => setGrausFarenheit(e.target.value)} />
            </div>
            <Button onClick={() => calcular()}>Calcular</Button>

            {mostrar ? <p>Celsius: {grausCelsius}</p> : null}

        </div>
    )
}