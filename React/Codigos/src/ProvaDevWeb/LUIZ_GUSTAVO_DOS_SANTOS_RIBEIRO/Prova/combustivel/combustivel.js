import './combustivel.scss';
import React from 'react';

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempo: null,
      velMedia: null,
      rendimento: null,
      precoGas: null,
      distanciaFinal: null,
      combustivelFinal: null,
      valorFinal: null,
      hiddenForm: false,
    };
  }

  changeTempo(newTempo) {
    this.setState({ tempo: newTempo });
  }

  changeVelMedia(newVelMedia) {
    this.setState({ velMedia: newVelMedia });
  }

  changeRendimento(newRendimento) {
    this.setState({ rendimento: newRendimento });
  }

  changePrecoGas(newPrecoGas) {
    this.setState({ precoGas: newPrecoGas });
  }

  calcularTotal() {
    if (
      this.state.tempo != null &&
      this.state.velMedia != null &&
      this.state.rendimento != null &&
      this.state.precoGas != null
    ) {
      let distancia =
        parseFloat(this.state.tempo) * parseFloat(this.state.velMedia);
      let combustivel = distancia / parseFloat(this.state.rendimento);
      let precoGasosaFinal =
        parseFloat(this.state.precoGas.replace(',', '.')) * combustivel;

      this.setState({
        distanciaFinal: distancia,
        combustivelFinal: combustivel.toFixed(2).replace('.', ','),
        valorFinal: precoGasosaFinal.toFixed(2).replace('.', ','),
        hiddenForm: true,
      });
    } else {
      alert('Preencha todos os campos!');
    }
  }

  render() {
    const {
      tempo,
      velMedia,
      rendimento,
      distanciaFinal,
      combustivelFinal,
      valorFinal,
      hiddenForm,
    } = this.state;

    return (
      <div className='combustivel'>
        <div className='form-main'>
          <h1>Combustível</h1>

          <div className='form-row'>
            <div className='form-item'>
              <label>Tempo:</label>
              <input
                placeholder='Em horas'
                onChange={(e) => this.changeTempo(e.target.value)}
              />
            </div>
            <div className='form-item align-margin'>
              <label>Velocidade média:</label>
              <input
                placeholder='Em Km/h'
                onChange={(e) => this.changeVelMedia(e.target.value)}
              />
            </div>
          </div>
          <hr />
          <div className='form-row'>
            <div className='form-item'>
              <label>Rendimento médio:</label>
              <input
                placeholder='Em Km/Litros'
                onChange={(e) => this.changeRendimento(e.target.value)}
              />
            </div>
            <div className='form-item align-margin'>
              <label>Preço da Gasolina:</label>
              <input
                placeholder='Em Reais (R$)'
                onChange={(e) => this.changePrecoGas(e.target.value)}
              />
            </div>
          </div>
          <div className='form-row'>
            <button onClick={() => this.calcularTotal()}>Calcular</button>
          </div>

          {hiddenForm && (
            <div className='resultado-formulario'>
              <h1>Resultado</h1>
              <hr />
              <p>
                <b>Velocidade média:</b> {velMedia} km/h
              </p>
              <p>
                <b>Tempo gasto:</b> {tempo} Horas
              </p>
              <p>
                <b>Rendimento:</b> {rendimento} km/Litros
              </p>
              <p>
                <b>Distância percorrida:</b> {distanciaFinal} km
              </p>
              <p>
                <b>Combustível gasto:</b> {combustivelFinal} litros
              </p>
              <p>
                <b>Valor Total:</b> R$ {valorFinal}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
