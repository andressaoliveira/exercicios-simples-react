import React from 'react';
import Input from '../Input/Input';

export default class calculo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numero1: '',
            numero2: '',
            resultado: '',
            display: false
        };
    }

    changeNumero1(newNumero1) {
        this.setState({ numero1: newNumero1 });
    }
    
    changeNumero2(newNumero2) {
        this.setState({ numero2: newNumero2 });
    }

    changeResultado(newResultado) {
        this.setState({ resultado: newResultado });
    }

    changeDisplay(newDisplay) {
        this.setState({display: newDisplay})
    }

    calculo() {
        const {numero1, numero2} = this.state;

        if(isNaN(numero1) || isNaN(numero2)) {
            alert("Digite um valor válido.")
            return
        }

        if (numero2 == 0) {
            this.changeResultado("Não é possível realizar divisão por 0");
            return
        }

        if(numero1 % numero2 == 0) {
            this.changeResultado(numero1 + " é divísvel por " + numero2);
        }
        else {
            this.changeResultado(numero1 + " não é divísvel por " + numero2);
        }
        this.changeDisplay(true);
    }

    render() {
        const {numero1, numero2, resultado, display} = this.state;
        return (
            <div id="body_container">
                <h1>Divisível</h1>
                <div>
                    <label>Primeiro número:</label>
                    <Input 
                        onChange={(e) => this.changeNumero1(e.target.value)}>
                    </Input>
                </div>
                <div>
                    <label>Segundo número:</label>
                    <Input 
                        onChange={(e) => this.changeNumero2(e.target.value)}>
                    </Input>
                </div>
                <div id="result">
                    <h1>Resultado</h1>
                    <div>Numero 1: {numero1}</div>
                    <div>Numero 2: {numero2}</div>
                </div>

                <div>
                    <button onClick={() => this.calculo()}>Calcular</button>
                    {display ? <div id="resultado">
                        {resultado}
                    </div> : null}
                </div>
            </div>
        )
    }
}

export const Calcular = {
    calcular(n1, n2){
        return n1%n2
    }
}