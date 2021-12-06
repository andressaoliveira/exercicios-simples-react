import React from 'react';
import Botao from '../Botao/Botao';
import Input from '../Input/Input';
export default class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      VALOR: null,
      VALORI: null,
      
     
    };
  }

  

DADOS = (valor) => {
         
    this.setState({ VALOR: parseFloat(valor)});
  
};

DADOSI = (valor) => {
         
    this.setState({ VALORI: parseFloat(valor)});
  
};


calculaCond = ()  => {
  const{VALOR, VALORI} = this.state;   
  const RESULTADO = VALOR%VALORI
  
  if (RESULTADO === 0){
    alert("OS VALORES SÃO DIVISÍVEIS ENTRE SI")                    
  }

  else if ((VALORI === 0))  {

   alert("ATENÇÃO! REVISE OS VALORES POIS NÃO EXISTEM DIVISÃO POR 0!!")
   
  }

  else {

   alert("OS VALORES NÃO SÃO DIVISÍVEIS ENTRE SI")  
  }       
                            
  }      
  
  validaInformacoes = () => {
    const{VALORI} = this.state;
    
    if((VALORI === 0))  {
        alert("ATENÇÃO! REVISE OS VALORES POIS NÃO EXISTEM DIVISÃO POR 0!!")
        return false
    }
    return true  
    
}

 
 render(){
        
    return(
        <div>
            <h1>CALCULAR A DIVISÃO ENTRE DOIS NÚMEROS</h1>
        <p>DIGITE OS VALORES PARA VERIFICAR A DIVISÃO</p>
        
            LADO1: <Input onChange={(e) => this.DADOS(e.target.value)}/>          
            LADO2: <Input onChange={(e) => this.DADOSI(e.target.value)}/>         
           
            <Botao onClick={() => this.calculaCond()}>VERIFICAR</Botao>
            
        </div>
    )

  }
}
