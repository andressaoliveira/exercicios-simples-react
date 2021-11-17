import React from 'react';
import Botao from '../Botao/Botao';
import Input from '../Input/Input';
export default class Combustivel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      TEMPO: null,
      PREÇOGASOLINA: null,
      DISTANCIA: null,
      RENDIMEDIO: null,
      VELOCIDADE: null,     
      EXIBIR: false,
     
    };
  }

  

DADOS = (valor) => {
         
    this.setState({ TEMPO: parseFloat(valor)});
  
};

DADOSI = (valor) => {
         
    this.setState({ VELOCIDADE: parseFloat(valor)});
  
};

DADOSII = (valor) => {
         
    this.setState({ RENDIMEDIO: parseFloat(valor)});
  
};

DADOSIII = (valor) => {
         
    this.setState({ PREÇOGASOLINA: parseFloat(valor)});
  
};


CALCULO = () => {

    const { TEMPO, PREÇOGASOLINA, RENDIMEDIO, VELOCIDADE } = this.state;
    const DISTANCIA = (VELOCIDADE*TEMPO);
    const QUANTGASO = (DISTANCIA / RENDIMEDIO);
    const VALORCOMB = (PREÇOGASOLINA * QUANTGASO);
    

            this.setState({
            VELOCIDADE: VELOCIDADE,
            TEMPO: TEMPO,
            DISTANCIA: DISTANCIA,
            QUANTGASO: QUANTGASO,
            VALORCOMB: VALORCOMB,
            EXIBIR: true
        });
    
};
  

  render() {

    const { TEMPO, VELOCIDADE, VALORCOMB, QUANTGASO, DISTANCIA, RENDIMEDIO, EXIBIR, } = this.state;

    return (
      <div>
        <div className="Destin">
        <h1>INFORMAÇÕES DA VIAGEM</h1>
        <p>DIGITE AS INFORMAÇÕES DA VIAGEM ABAIXO EM KM E LITROS</p>
        
        TEMPO: <Input onChange={(e) => this.DADOS(e.target.value)}/>
        VELOCIDADE: <Input onChange={(e) => this.DADOSI(e.target.value)}/>
        RENDIMENTO MÉDIO: <Input onChange={(e) => this.DADOSII(e.target.value)}/> 
        PREÇO DA GASOLINA: <Input onChange={(e) => this.DADOSIII(e.target.value)}/>         
        <Botao onClick={() => this.CALCULO()}>CALCULAR</Botao>
        </div>
                
        {EXIBIR && <div className="Destin">

        <p>TEMPO GASTO: {TEMPO} HORAS</p>  
        <p>VELOCIDADE: {VELOCIDADE} KM/H </p> 
        <p>RENDIMENTO MÉDIO: {RENDIMEDIO} KM/L </p>   
        ----------------------------------------------------------------------------------------------------/
        <p>VALOR TOTAL DE GASTO COM COMBUSTÍVEL EM R$: {VALORCOMB.toFixed(2)} </p>
        <p>QUANTIDADE DE GASOLINA UTILIZADA NA VIAGEM: {QUANTGASO.toFixed(3)} LITROS</p>          
        <p>DISTANCIA: {DISTANCIA} KM</p>  
          </div>}
        </div>
        
    )
  }
}
