import React, { useEffect, useState } from 'react';

function Combustivel() {
    const[tempo, setTempo] = useState('');
    const[velocidade, setVelocidade] = useState('');
    const[rendimento, setRendimento] = useState('');
    const[preco, setPreco] = useState('');
    const[distancia, setDistancia] = useState('');
    const[litros, setLitros] = useState('');
    const[valorTotal, setValorTotal] = useState('');
    const[exibir, setExibir] = useState(false);
    
    function Calcular(){
        setDistancia(tempo * velocidade)
        // setLitros(distancia/rendimento)
        // setValorTotal(litros*preco)
        // setExibir(true)
    }

    useEffect(() => {
        setLitros(distancia/rendimento)
        setValorTotal(litros*preco)
        if(valorTotal){
            setExibir(true)
        }
    }, [distancia, valorTotal, litros, tempo, velocidade, rendimento, preco])

    function updateTempo(value){
        setTempo(value)
    }

    function updateVelocidade(value){
        setVelocidade(value)
    }

    function updateRendimento(value){
        setRendimento(value)
    }

    function updatePreco(value){
        setPreco(value)
    }

    
    return (
        <>
            <div style={{marginLeft: '50px', marginRight: '50px' , justifyItems: 'center'}}>
                <h2>Combustível</h2>
                <p>Tempo (em Horas):</p>
                <input onChange={(e) => updateTempo(e.target.value)}></input>
                <p>Velocidade média:</p>
                <input onChange={(e) => updateVelocidade(e.target.value)}></input>
                <p>Rendimento médio:</p>
                <input onChange={(e) => updateRendimento(e.target.value)}></input>
                <p>Preço Gasolina:</p>
                <input onChange={(e) => updatePreco(e.target.value)}></input>
                <br></br>
                <button style={{marginTop: '15px'}} onClick={() => Calcular()}>Calcular</button>
            </div>
            {exibir === true &&
                <div style={{marginLeft: '50px', marginRight: '50px' , justifyItems: 'center'}}>
                    <p>Velocidade média: {velocidade} km/h</p>
                    <p>Tempo gasto: {tempo} horas</p>
                    <p>Rendimento: {rendimento} km/litros</p>
                    <p>Distância: {distancia} km</p>
                    <p>Combustivel: {litros.toFixed(2)} litros</p>
                    <p>Valor Total: R${valorTotal.toFixed(2)}</p>
                </div>
            }
        </>
    );
}

export default Combustivel;
