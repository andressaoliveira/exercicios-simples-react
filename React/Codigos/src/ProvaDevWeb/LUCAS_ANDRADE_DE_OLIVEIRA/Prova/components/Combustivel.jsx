import React, { useState } from 'react';

function Combustivel() {
    
    const [tempo, setTempo] = useState(0);
    const [velocidade, setVelocidade] = useState(0);
    const [rendimento, setRendimento] = useState(0);
    const [preco, setPreco] = useState(0);

    const [distancia, setDistancia] = useState(0);
    const [gasolina, setGasolina] = useState(0);
    const [total, setTotal] = useState(0);

    const [resultado, setResultado] = useState(false);

    function calcular(e) {
        e.preventDefault();
        if (tempo > 0 && velocidade > 0 && rendimento > 0 && preco > 0) {
            const distancia = tempo * velocidade;
            setDistancia(distancia);

            const litros = (distancia / rendimento).toFixed(2);
            setGasolina(litros);

            const total = (litros * preco).toFixed(2);
            setTotal(total);

            setResultado(true);
        } else {
            setResultado(false);
            alert('Preencha todos os campos corretamente!');
        }
    }

    return (
        <>
            <h1>Combustível</h1>
            <section>
                <form>
                    <div>
                        <label>Tempo (em horas): </label>
                        <input type="tel" name="tempo" onInput={e => setTempo(e.target.value)} />
                    </div>
                    <div>
                        <label>Velocidade média (em km/h): </label>
                        <input type="tel" name="velocidade" onInput={e => setVelocidade(e.target.value)} />
                    </div>
                    <div>
                        <label>Rendimento médio (em km/litros): </label>
                        <input type="tel" name="rendimento" onInput={e => setRendimento(e.target.value)} />
                    </div>
                    <div>
                        <label>Preço da gasolina (em R$): </label>
                        <input type="tel" name="preco" onInput={e => setPreco(e.target.value)} />
                    </div>

                    <input type="submit" value="Calcular" onClick={e => calcular(e)} />
                </form>
                {resultado ? <div>
                    <p>Velocidade média: {velocidade} km/h</p>
                    <p>Tempo gasto: {tempo} horas</p>
                    <p>Rendimento: {rendimento} km/litros</p>
                    <p>Distância: {distancia} km</p>
                    <p>Combustível: {gasolina} litros</p>
                    <p>Valor Total: R$ {total} </p>
                </div> : ''}
            </section>
        </>
    );
}

export default Combustivel;