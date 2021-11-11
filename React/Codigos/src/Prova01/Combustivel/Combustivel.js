import React, { useEffect, useState } from 'react';

export default function Combustivel() {
    const [tempo, setTempo] = useState(0);
    const [velocidade, setVelocidade] = useState(0);
    const [rendimento, setRendimento] = useState(0);
    const [gasolina, setGasolina] = useState(0);
    const [distancia, setDistancia] = useState(0);
    const [combustivel, setCombustivel] = useState(0);
    const [valor, setValor] = useState(0);
    const [mostrar, setMostrar] = useState(0);


    useEffect(() => {
        setMostrar(false);
    }, [tempo, velocidade, rendimento, gasolina]);

    const calcular = () => {
        setDistancia(tempo * velocidade);
        setCombustivel(parseFloat(distancia) / parseFloat(rendimento));
        setValor(combustivel * parseFloat(gasolina));
        setMostrar(true)
    };

    return (
        <div>
            <h2>Combustível</h2>
            <div>
                <div>
                    Tempo:
                    <input onChange={(e) => setTempo(e.target.value)} />
                    (em horas)
                </div>
                <div>
                    Velocidade média:
                    <input onChange={(e) => setVelocidade(e.target.value)} />
                    (em km/h)
                </div>
                <div>
                    Rendimento médio:
                    <input onChange={(e) => setRendimento(e.target.value)} />
                    (em km/litros)
                </div>
                <div>
                    Preço gasolina:
                    <input onChange={(e) => setGasolina(e.target.value)} />
                    (em reais R$)
                </div>
            </div>
            <button onClick={() => calcular()}>Calcular</button>

            {mostrar ?
                <div>
                    <p>Velocidade média: {velocidade} km/h</p>
                    <p>Tempo gasto: {tempo} horas</p>
                    <p>Rendimento: {rendimento} km/litros</p>
                    <p>Distância: {distancia} km</p>
                    <p>Combustivel: {combustivel.toFixed(2)} litros</p>
                    <p>Valor total: R$ {valor.toFixed(2)}</p>
                </div>
                : null}

        </div>
    )
}