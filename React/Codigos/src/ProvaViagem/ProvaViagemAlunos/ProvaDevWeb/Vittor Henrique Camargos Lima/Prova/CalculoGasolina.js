import React from 'react';

export default class CalculoGasolina extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             tempo: '',
             velocidademedia: '',
             rendimento: '',
             preco: '',
             dist: null,
             qtdLitros: null,
             exibir: false
        }
    }

    calcularGastos = () =>{
        const { tempo, velocidademedia, rendimento, preco} = this.props;
        if (this.validaInput()){
           const distancia = tempo * velocidademedia; 
           const quantLitros = distancia / rendimento;
           const precoTotal = preco * quantLitros;          
           
           this.setState({
            tempo: tempo,
            velocidademedia: velocidademedia,
            rendimento: rendimento,
            preco: precoTotal,
            dist: distancia,
            qtdLitros: quantLitros,
            exibir: true
           });
        }
    };

    validaInput = () =>{
        const { tempo, velocidademedia, rendimento, preco} = this.props;
        if(!tempo || !velocidademedia || !rendimento || !preco){
            alert("Dados insuficientes! Favor informar todos os campos.")
            return false
        }
        return true
    }

    render(){
        const { tempo, velocidademedia, rendimento, preco,dist, qtdLitros, exibir} = this.state;
        return(
            <div>
                <button onClick={()=> this.calcularGastos()}>Calcular</button>
                {exibir ? <div id="resultado">
                    Velocidade Média = {velocidademedia} km/h<br/>
                    Tempo Gasto = {tempo} hora(s)<br/>
                    Rendimento = {rendimento} km/litros<br/>
                    Distância = {dist} km<br/>
                    Combustível = {qtdLitros.toFixed(2)} litros<br/>
                    Valor total = R$ {preco.toFixed(2)} 
                </div> : null}  
            </div>              
        )
    }
}