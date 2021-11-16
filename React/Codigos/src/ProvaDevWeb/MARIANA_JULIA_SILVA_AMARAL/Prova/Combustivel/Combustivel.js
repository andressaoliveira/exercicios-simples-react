import React from "react";
import Input from "../Componentes/Input";
import Button from "../Componentes/Button";

export default class Combustivel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempo: null,
      velocidade: null,
      rendimento: null,
      precoGasolina: null,
      distanciaPercorrida: null,
      litros: null,
      valorGasto: null,
      mostrar: false,
    };
  }

  tempoGasto = (valor) => {
    this.setState({ tempo: valor });
  };

  velocidadeMedia = (valor) => {
    this.setState({ velocidade: valor });
  };

  rendimentoMedio = (valor) => {
    this.setState({ rendimento: valor });
  };

  preco = (valor) => {
    this.setState({ precoGasolina: valor });
  };

  calcular = () => {
    const tempo = parseFloat(this.state.tempo);
    const velocidade = parseFloat(this.state.velocidade);
    const rendimento = parseFloat(this.state.rendimento);
    const preco = parseFloat(this.state.precoGasolina);
    let distancia = tempo * velocidade;
    let litros = distancia / rendimento;
    let valor = litros * preco;

    this.setState({
      distanciaPercorrida: distancia,
      litros: Math.round(litros * 100) / 100,
      valorGasto: Math.round(valor * 100) / 100,
      mostrar: true,
    });
  };

  render() {
    const {
      tempo,
      velocidade,
      rendimento,
      distanciaPercorrida,
      litros,
      valorGasto,
      mostrar,
    } = this.state;

    return (
      <div className="combustivel">
        <div className="dados">
          <h2>Cálculo Combustível</h2>
          <p>Informe os valores a seguir e clique em calcular</p>
          Tempo (horas): <Input onChange={(e) => this.tempoGasto(e.target.value)} />
          Velocidade Média (km/h): <Input onChange={(e) => this.velocidadeMedia(e.target.value)} />
          Rendimento Médio (km/litros):<Input onChange={(e) => this.rendimentoMedio(e.target.value)} />
          Preço da Gasolina (R$):<Input onChange={(e) => this.preco(e.target.value)} />
          <Button onClick={() => this.calcular()}>Calcular</Button>
        </div>
        {mostrar && (
          <div className="resultado">
            <p>Velocidade Média: {velocidade} km/h</p>
            <p>Tempo de viagem: {tempo} horas</p>
            <p>Rendimento combustível: {rendimento} km/litros</p>
            <p>Distância Percorrida: {distanciaPercorrida} km</p>
            <p>Litros de Combustível Gastos: {litros} litros</p>
            <p>Valor total combustível: R$ {valorGasto}</p>
          </div>
        )}
      </div>
    );
  }
}
