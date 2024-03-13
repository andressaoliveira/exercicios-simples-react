import React, { useState } from 'react';
import Button from '../../Base/Button';
import Input from '../../Base/Input';

export default function Expressao() {
    const [numY, setNumY] = useState(0);
    const [numZ, setNumZ] = useState(0);
    const [numX, setNumX] = useState(0);
    const [mostrar, setMostrar] = useState(false);

    const calcular = () => {
        const y = Math.pow(numY, 22);
        const z = Math.pow(numZ, 33);
        const x = Math.sqrt(numY * (y + z))
        setNumX(x)
        setMostrar(true)
    };

    return (
        <div>
            <h2>Expressao</h2>
            <div>
                Numero Y:<Input onChange={(e) => setNumY(e.target.value)} />
                Numero Z: <Input onChange={(e) => setNumZ(e.target.value)} />
            </div>
            <Button onClick={() => calcular()}>Calcular</Button>

            {mostrar ? <p>{numX}</p> : null}

        </div>
    )
}