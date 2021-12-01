import React from 'react';
import { Link } from 'react-router-dom';


export default class Combustivel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tempo: '',
          velocidade: '',
          rendimento: '',
          gasolina: '',

          distancia: '',
          combustivel: '',
          valorTotal: '',

          view: false,
        };
      }

    calcular() {
        let tempo = document.getElementById("tempo").value;
        let velocidadeMedia = document.getElementById("velocidadeMedia").value;
        let rendimentoMedio = document.getElementById("rendimentoMedio").value;
        let valorGasolina = document.getElementById("valorGasolina").value;
        this.setState({tempo: tempo});
        this.setState({velocidade: velocidadeMedia});
        this.setState({rendimento: rendimentoMedio});
        this.setState({gasolina: valorGasolina});


        let distancia = parseInt(tempo * velocidadeMedia);
        let combustivelGasto = parseInt(distancia / rendimentoMedio);
        let gastoTotal = parseInt(combustivelGasto * valorGasolina);
        this.setState({distancia: distancia});
        this.setState({combustivel: combustivelGasto});
        this.setState({valorTotal: gastoTotal});

        this.setState({view: true});
    }

    render() {
        const {tempo, velocidade, rendimento, gasolina, distancia, combustivel, valorTotal, view} = this.state;

        return (
            <>
            <div class="navegacao">
                <nav>
                    <li class="link">
                        <Link to="/Inicio">Início</Link>
                    </li>
                    <li class="link">
                        <Link to="/Destinos">Destinos</Link>
                    </li>
                    <li class="link">
                        <Link to="/Combustivel">Cálculo Combustível</Link>
                    </li>
                </nav>
            </div>
            <div class="principal">
                <h2>Combustível</h2>
                <h5>Vamos calcular seu gasto para a viagem! $</h5>

                <form>
                    <label>Tempo: (em horas)</label> <br/>
                    <input type="number" size="40" id="tempo" /> <br/><br/>

                    <label>Velocidade Média: (em Km/H)</label> <br/>
                    <input type="number" size="40" id="velocidadeMedia" /> <br/><br/>

                    <label>Rendimento Médio: (em Km/Litros)</label> <br/>
                    <input type="number" size="40" id="rendimentoMedio" /> <br/><br/>

                    <label>Preço da Gasolina: (em Reais/R$)</label> <br/>
                    <input type="number" size="40" id="valorGasolina" /> <br/><br/>

                    <button onClick={() => this.calcular()}>Calcular</button> <br/>
                </form>
                <hr/>

                {view ? <div>
                    <div>
                        <h4>Informações fornecidas:</h4>
                        <label>Tempo: {tempo}h</label> <br/>
                        <label>Velocidade Média: {velocidade}km/h</label> <br/>
                        <label>Rendimento Médio: {rendimento} litros</label> <br/>
                        <label>Preço da Gasolina: R${gasolina}</label> <br/>
                        <hr/>
                    </div>

                    {/* distancia percorrida, combustivel gasto, valor total */}
                    <div>
                        <h4>Informações a partir dos cálculos:</h4>
                        <label>Distância percorrida: {distancia}km</label> <br/>
                        <label>Combustível gasto: {combustivel} litros</label> <br/>
                        <label>Valor Total: R$ {valorTotal}</label> <br/>
                    </div>
                </div> : null
                }
                </div>
            </>
        )
    }
}