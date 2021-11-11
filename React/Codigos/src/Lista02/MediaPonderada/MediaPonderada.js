import React, { useState } from 'react';
import Button from '../../Base/Button';
import Input from '../../Base/Input';

export default function MediaPonderada() {
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [peso1, setPeso1] = useState(0);
    const [peso2, setPeso2] = useState(0);
    const [media, setMedia] = useState(0);
    const [mostrar, setMostrar] = useState(false);

    const calcular = () => {
        const resultado = ((nota1 * peso1) + (nota2 * peso2)) / (parseFloat(peso1) + parseFloat(peso2))
        setMedia(resultado)
        setMostrar(true)
    };

    return (
        <div>
            <h2>Media Ponderada</h2>
            <div>
                <p>Primeira nota:</p>
                Nota:<Input onChange={(e) => setNota1(e.target.value)} />
                Peso: <Input onChange={(e) => setPeso1(e.target.value)} />
            </div>
            <div>
                <p>Segunda nota:</p>
                Nota: <Input onChange={(e) => setNota2(e.target.value)} />
                Peso: <Input onChange={(e) => setPeso2(e.target.value)} />
            </div>
            <Button onClick={() => calcular()}>Calcular</Button>

            {mostrar ? <p>{media}</p> : null}

        </div>
    )
}