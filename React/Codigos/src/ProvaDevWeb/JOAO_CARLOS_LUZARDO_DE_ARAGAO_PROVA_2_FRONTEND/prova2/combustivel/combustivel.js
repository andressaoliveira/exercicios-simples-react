import './combustivel.css';
import React from 'react';

export default class Formulario extends React.Component {

  render() {
    const {
      combustivelFinal,
      velocidade,
      valorFinal,
      distanciaFinal,
      resultado,
      rendimento,
      tempo,
    } = this.state;

    return (
      <div className='combustivel'>
       
          <h1>Combustível</h1>

            <div className='linha'>
              <label>Tempo:</label>
              <input
                placeholder='Em horas'
                onChange={(e) => this.changeTempo(e.target.value)}
              />
            </div>

            <div className='linha'>
              <label>Velocidade média:</label>
              <input
                placeholder='Em Km/h'
                onChange={(e) => this.changevelocidade(e.target.value)}
              />
            </div>
          
            <div className='linha'>
              <label>Rendimento médio:</label>
              <input
                placeholder='Em Km/Litros'
                onChange={(e) => this.changeRendimento(e.target.value)}
              />
            </div>
            
            <div className='linha'>
              <label>Preço da Gasolina:</label>
              <input
                placeholder='Em Reais (R$)'
                onChange={(e) => this.changevalorGasolina(e.target.value)}
              />
            </div>

            <button className='calcular' onClick={() => this.calcularTotal()}>Calcular</button>


          


          {resultado && (
            <div className='resultado'>
              <h1>Resultado</h1>

              <p className='linhaResultado'> 
                <label>Velocidade média: {velocidade} km/h</label>
              </p>
              
              <p className='linhaResultado'> 
                <label>Tempo gasto: {tempo} Horas</label>
              </p>

              <p className='linhaResultado'> 
                <label>Rendimento:  {rendimento} km/Litros</label>
              </p>

              <p className='linhaResultado'> 
                <label>Distância percorrida: {distanciaFinal} km</label>
              </p>

              <p className='linhaResultado'> 
                <label>Combustível gasto: {combustivelFinal} litros</label>
              </p>

              <p className='linhaResultado'> 
                <label>Valor Total: R$ {valorFinal}</label>
              </p>  
            </div>
          )}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      combustivelFinal: null,
      velocidade: null, //em km/h
      valorFinal: null,
      distanciaFinal: null,
      resultado: false,
      tempo: null, //em horas
      rendimento: null, //em km/L
      valorGasolina: null, //em Reais
    };
  }

  calcularTotal() {
    if (
      this.state.valorGasolina != null &&
      this.state.rendimento != null &&
      this.state.velocidade != null &&
      this.state.tempo != null 
      
    ) {
      
      let distancia = parseFloat(this.state.tempo) * parseFloat(this.state.velocidade);
      let combustivel = distancia / parseFloat(this.state.rendimento);
      let valorGasolinaosaFinal = parseFloat(this.state.valorGasolina.replace(',', '.')) * combustivel;
      

      this.setState({
        distanciaFinal: distancia,
        combustivelFinal: combustivel.toFixed(2).replace('.', ','),
        valorFinal: valorGasolinaosaFinal.toFixed(2).replace('.', ','),
        resultado: true,
      });
    } else {
      alert('Preencha todos os campos!');
    }
  }

  
  changeRendimento(newRendimento) {
    this.setState({ rendimento: newRendimento });
  }

  changeTempo(newTempo) {
    this.setState({ tempo: newTempo });
  }

  
  changevalorGasolina(newvalorGasolina) {
    this.setState({ valorGasolina: newvalorGasolina });
  }


  changevelocidade(newvelocidade) {
    this.setState({ velocidade: newvelocidade });
  }

  
}
