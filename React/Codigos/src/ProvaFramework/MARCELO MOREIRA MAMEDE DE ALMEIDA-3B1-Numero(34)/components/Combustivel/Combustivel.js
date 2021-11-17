import React, { useState } from 'react'
import Combustivel2 from '../Combustivel/Combustivel2.css'


export default function Combustivel() {



    const [Tempo, setTempo] = useState('');
    const [velMedia, setvelMedica] = useState('');
    const [redMedio, setredMedio] = useState('');
    const [PrecoGasolina, setPrecoGasolina] = useState('');
    const [distancia] = useState('');



    return (
        <div className="principal">
            <h1>Combustivel</h1>
            <form>
                <label>Tempo(Em Horas):</label>
                <input
                    class="num1"
                    type="text"
                    required
                    value={Tempo}
                    onChange={(e) => setTempo(e.target.value)}
                /><br></br>
                <label>Velocidade Média(Em Km/h):</label>
                <input
                    class="num2"
                    type="text"
                    required
                    value={velMedia}
                    onChange={(e) => setvelMedica(e.target.value)}
                ></input>
                <br></br>
                <label>Rendimento Médio(Em Km/Litros):</label>
                <input
                    type="text"
                    required
                    value={redMedio}
                    onChange={(e) => setredMedio(e.target.value)}
                ></input>
                <br></br>
                <label>Preço da Gasolina(Em Reais):</label>
                <input
                    type="text"
                    required
                    value={PrecoGasolina}
                    onChange={(e) => setPrecoGasolina(e.target.value)}
                ></input>
                <br></br>
                <button>Limpar</button>
            </form>
            <text>---------------------------------------------------------------------------------------------------------------------------------------------React.Js (:-------------------------------------------------------------------------------------------------------------------------------------------    </text>
            <p> Tempo(Em Horas):{Tempo}</p>
            <p>Velocidade Média(Em Km/h):{velMedia}</p>
            <p>Rendimento Médio(Em Km/Litros):{redMedio}</p>
            <p>Combustivel Gasto(Em L):Valor da Distancia  ÷  {redMedio} </p>
            <p>Distancia: {Tempo}X{velMedia}= Valor da distancia</p>
            <p>Valor Total:{PrecoGasolina}X{redMedio}= Valor gasto</p>
        </div>
    )
}