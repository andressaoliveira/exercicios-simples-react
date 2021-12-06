import React from 'react';

export default class Calculo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nummero: null,
            numero1: null,
            numero2: null,
            divisivel: null,
            mostrar: false
        };

    }

    numero = (valor) => {
        this.setState({ numero : valor })
    }

    calculo = () => {
        const {numero1} = this.state;
        const {numero2} = this.state;

        var resultado = " ";
        var calc = numero1 % numero2;
        if (calc === 0){
            resultado = "É divisivel";
        } else {
            resultado = "Não é divisivel";
        }

        this.setState({

            divisao: resultado
        });
    }

    render(){
        return(

                <div>
                    <label>Primeiro numero:</label>
                    <input onChange={(e) => this.numero(e.target.value)} />

                    <label>Segundo numero:</label>
                    <input type="number" id="item" value="" />

                    <button onclick="Calcular()">Calcular</button>

                    <div>
                    <h4>(divisao)</h4>
                    </div>
                </div>

                
        )
    }
}