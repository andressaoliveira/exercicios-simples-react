import React from "react";
import Button from "../Componentes/Button";
import Input from "../Componentes/Input";

export default class Calculo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          valor1: null,
          valor2: null,
          resultado: "",
          mostrar: false
        };
      }

    dividendo = (valor) => {
        this.setState({valor1: valor, mostrar:false});
    }

    divisor = (valor) => {
        this.setState({valor2: valor, mostrar:false});
    }

    calcular = () =>{

        const dividendo = parseFloat(this.state.valor1);
        const divisor = parseFloat(this.state.valor2);

        if(this.resto(dividendo,divisor)==0){
            this.setState({resultado: "é divisível"})
        }
        else{
            this.setState({resultado: "não é divisível"})
        }

        this.setState({mostrar:true})
    }

    resto(num1, num2){

        return(num1%num2)
    }

    render() {

        const {valor1, valor2, resultado, mostrar} = this.state;

        return (
            <div className="calcular">
                <div className="dados">
                <h2>Cálculo</h2>
               <p>Informe dois valores e clique em Calcular para saber se eles são divisíveis:</p>
               Primeiro Valor: <Input onChange={(e) => this.dividendo(e.target.value)} />
               Segundo Valor: <Input onChange={(e) => this.divisor(e.target.value)} />  
               <Button onClick={() => this.calcular()}>Calcular</Button> 
                </div>
            {mostrar && (
          <div className="resultado">
            <p>O número {valor1} {resultado} por {valor2}</p>
          </div>
        )}
            </div>
            
        )
    }
}